import React, { useEffect, useMemo, useState } from 'react';
import { JobsList } from '../components/containers/JobsList';
import { TopBarMobile } from '../components/ui';
import { useAppSelector, useAppDispatch } from '../hooks/useRedux';
import { IJob } from '../interfaces';
import { setJobsToShow, startAddingNewJobs } from '../store';

export interface JobQueryIndex {
   from: number;
   to: number;
}

export const JobsView = () => {
   const dispatch = useAppDispatch();
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

   const JobsListMemo = useMemo(
      () => (
         <JobsList
            jobs={jobsToShow}
            jobsPerShow={jobsPerShow}
            setJobQueryIndex={setJobQueryIndex}
         />
      ),
      [jobsToShow]
   );
   return (
      <div>
         <TopBarMobile title="Offer Jobs" />
         {isAddingJobs ? <>loading...</> : JobsListMemo}
      </div>
   );
};
