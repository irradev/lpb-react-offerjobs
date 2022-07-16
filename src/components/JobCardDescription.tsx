import React, { FC } from 'react';

interface JobCardDescriptionProps {
   description: string;
   isFullInfo: boolean;
}

// TODO: SET TEXT-OVERFLOW: ELLIPSIS 2 LINES
export const JobCardDescription: FC<JobCardDescriptionProps> = ({
   description,
   isFullInfo,
}) => {
   return (
      <div
         // className="mt-3 text-sm text-gray-600 text-opacity-80 text-ellipsis overflow-hidden relative"
         className={`
            ${isFullInfo ? '' : 'overflow-hidden text-ellipsis'}
            
            text-sm
            text-gray-600
            text-opacity-80
            mt-3
            relative
         `}
      >
         {isFullInfo ? (
            <div
               className=""
               dangerouslySetInnerHTML={{ __html: description }}
            ></div>
         ) : (
            <span
               className="whitespace-nowrap"
               // className={`${isFullInfo ? '' : 'whitespace-nowrap'}`}
            >
               {description}
            </span>
         )}
      </div>
   );
};
