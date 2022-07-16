import React, { FC, ReactElement } from 'react';

interface HalfViewInfoProps {
   children: ReactElement;
}

export const HalfViewInfo: FC<HalfViewInfoProps> = ({ children }) => {
   return (
      <div className="flex justify-center items-center relative h-screen-40 md:h-auto md:py-10">
         {children}
      </div>
   );
};
