import confetti from 'canvas-confetti';
import React, { FC, ReactElement, useCallback } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { addToFavoriteJobs, removeFromFavoriteJobs } from '../../../store';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';

interface ActionButtonsContainerProps {
   // isInFavorites: boolean;
   jobId: number;
   // handleFavoritesClick: () => void;
}

export const ActionButtonsContainer: FC<ActionButtonsContainerProps> = ({
   // isInFavorites,
   jobId,
   // handleFavoritesClick,
}) => {
   const dispatch = useAppDispatch();
   const { favoriteJobs } = useAppSelector((state) => state.user);
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

   return (
      <div className="flex  flex-col gap-2 md:flex-row-reverse md:justify-between mt-3">
         <ActionButton
            onClick={() => handleFavoritesClick(jobId)}
            bgColor={'gray-200'}
            textColor={'slate-500'}
            width={'full md:w-10'}
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

         <div className="flex gap-1">
            <ActionButton
               bgColor={'orange-500'}
               textColor={'white'}
               width={'3/6'}
               content={'apply'}
            />
            <ActionButton
               bgColor={'green-500'}
               textColor={'white'}
               width={'3/6'}
               content={'info'}
            />
         </div>
      </div>
   );
};

interface ActionButtonProps {
   bgColor: string;
   textColor: string;
   width: string;
   content: string | ReactElement;
   onClick?: () => void;
}

const ActionButton: FC<ActionButtonProps> = ({
   bgColor,
   textColor,
   width,
   content,
   onClick,
}) => {
   return (
      <button
         onClick={onClick}
         className={`
         flex justify-center items-center 
         bg-${bgColor} 
         text-${textColor} text-sm font-bold 
         uppercase 
         p-2 
         rounded 
         shadow-lg 
         h-6 w-${width}
      `}
      >
         {content}
      </button>
   );
};
