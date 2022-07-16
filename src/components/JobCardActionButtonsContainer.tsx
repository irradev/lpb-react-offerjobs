import { FC, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import {
   addToFavoriteJobs,
   removeFromFavoriteJobs,
   setOpenRightSlide,
   setSelectedJob,
} from '../store';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { JobCardActionButton } from './';

interface JobCardActionButtonsContainerProps {
   jobId: number;
   wichFather: 'joblist' | 'jobinfo';
}

export const JobCardActionButtonsContainer: FC<
   JobCardActionButtonsContainerProps
> = ({ jobId, wichFather }) => {
   const dispatch = useAppDispatch();
   const { isOpenRightSlide } = useAppSelector((state) => state.ui);
   const { favoriteJobs } = useAppSelector((state) => state.user);
   const { selectedJob } = useAppSelector((state) => state.jobs);

   const handleFavoritesClick = useCallback(
      (jobId: number) => {
         console.log(favoriteJobs);
         if (!favoriteJobs.some((f) => f === jobId)) {
            dispatch(addToFavoriteJobs(jobId));
            confetti({
               zIndex: 100,
               particleCount: 100,
               spread: 160,
               angle: -100,
               origin: {
                  x: 1,
                  y: 0,
               },
            });
         } else {
            dispatch(removeFromFavoriteJobs(jobId));
         }
      },
      [favoriteJobs]
   );

   const handleInfoClick = (jobId: number) => {
      dispatch(setOpenRightSlide(true));
      dispatch(setSelectedJob(jobId));
   };

   return (
      <div className="flex  flex-col gap-2 md:flex-row-reverse md:justify-between mt-3">
         <JobCardActionButton
            onClick={() => handleFavoritesClick(jobId)}
            bgColor={'bg-zinc-200'}
            textColor={'text-gray-700'}
            width={'w-full md:w-10'}
            content={
               <div className="flex justify-center items-center gap-1">
                  {favoriteJobs.some((f) => f === jobId) ? (
                     <>
                        <MdFavorite fontSize={18} />
                        <div className="pt-0.5 md:hidden">
                           <span>In favorites</span>
                        </div>
                     </>
                  ) : (
                     <>
                        <MdFavoriteBorder fontSize={18} />
                        <div className="pt-0.5 md:hidden">
                           <span>Add to favorites</span>
                        </div>
                     </>
                  )}
               </div>
            }
         />

         {/* ${selectedJob?.id === jobId ? 'md:opacity-0 md:translate-x-full' : ''} */}
         <div
            className={`
            flex gap-1
         `}
         >
            <JobCardActionButton
               bgColor={'bg-sky-400'}
               textColor={'text-white'}
               width={`
                  ${wichFather === 'jobinfo' ? 'w-full ' : 'w-3/6'}
                  md:w-16
               `}
               content={'apply'}
            />
            <JobCardActionButton
               onClick={() => handleInfoClick(jobId)}
               bgColor={'bg-blue-500'}
               textColor={'text-white'}
               width={'w-3/6 md:w-16'}
               content={'info'}
               customClass={`
                  ${wichFather === 'jobinfo' ? 'hidden' : ''}
                  ${
                     selectedJob?.id === jobId
                        ? 'md:opacity-0 md:translate-x-full'
                        : ''
                  }
               `}
            />
         </div>
      </div>
   );
};
