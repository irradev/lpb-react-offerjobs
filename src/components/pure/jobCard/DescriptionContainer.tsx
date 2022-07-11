import React, { FC } from 'react';

interface DescriptionProps {
   description: string;
}

// TODO: SET TEXT-OVERFLOW: ELLIPSIS 2 LINES
export const DescriptionContainer: FC<DescriptionProps> = ({ description }) => {
   return (
      <div className="mt-2 text-xs text-gray-600 text-ellipsis overflow-hidden relative">
         <span className="whitespace-nowrap">{description}</span>
      </div>
   );
};
