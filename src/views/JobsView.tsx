import React, { useEffect, useMemo, useState } from 'react';
import { JobsList } from '../components/JobsList';
import { TopBarMobile, HalfViewInfo } from '../components/ui';
import { ScreenMask } from '../components/ui/ScreenMask';
import { useAppSelector, useAppDispatch } from '../hooks/useRedux';
import { IJob } from '../interfaces';
import {
   deleteSelectedJob,
   setJobsToShow,
   setOpenRightSlide,
   startAddingNewJobs,
} from '../store';

export interface JobQueryIndex {
   from: number;
   to: number;
}

export const JobsView = () => {
   const dispatch = useAppDispatch();
   const { isOpenRightSlide } = useAppSelector((state) => state.ui);
   const { jobs, jobsToShow, jobCount, isAddingJobs } = useAppSelector(
      (state) => state.jobs
   );

   const [jobsPerShow, setJobsPerShow] = useState(50);

   const [jobQueryIndex, setJobQueryIndex] = useState<JobQueryIndex>({
      from: 0,
      to: 0,
   });

   useEffect(() => {
      if (jobs.length === 0) dispatch(startAddingNewJobs());
   }, []);

   useEffect(() => {
      if (!isAddingJobs && jobs.length > 0) {
         setJobQueryIndex({
            from: 0,
            to: jobsPerShow,
         });
      }
   }, [isAddingJobs]);

   useEffect(() => {
      let jobsToShowArray: IJob[] = [];

      for (let i = jobQueryIndex.from; i < jobQueryIndex.to; i++) {
         jobsToShowArray.push(jobs[i]);
      }
      dispatch(setJobsToShow([...jobsToShow, ...jobsToShowArray]));
   }, [jobQueryIndex]);

   return (
      <>
         <div
            className={`
               ${isOpenRightSlide ? 'blur-sm' : ''}
               md:blur-none
               transition-blur duration-150 ease-in-out
            
            `}
         >
            <TopBarMobile title="Offer Jobs" />
            {isAddingJobs ? (
               <>loading...</>
            ) : jobsToShow.length > 0 && jobs.length > 0 ? (
               <>
                  <HalfViewInfo>
                     <div className="text-center text-gray-800">
                        <div className="text-2xl font-bold">
                           Total Jobs Found:
                        </div>
                        <div className="text-3xl font-bold">{jobCount}</div>
                     </div>
                  </HalfViewInfo>

                  <JobsList
                     jobs={jobsToShow}
                     jobsPerShow={jobsPerShow}
                     setJobQueryIndex={setJobQueryIndex}
                  />
               </>
            ) : (
               <>No Offers Found</>
            )}
         </div>
         <ScreenMask
            isOpen={isOpenRightSlide}
            handleClose={() => dispatch(setOpenRightSlide(false))}
         />
      </>
   );
};
