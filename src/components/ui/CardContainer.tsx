import React, { FC, ReactElement } from 'react';

interface CardContainerProps {
   children: ReactElement;
}

export const CardContainer: FC<CardContainerProps> = ({ children }) => {
   return (
      <div
         className={`
             bg-white 
               shadow-md rounded-md
               p-2 
               my-2
               mx-2
               h-full
            `}
      >
         {children}
      </div>
   );
};
