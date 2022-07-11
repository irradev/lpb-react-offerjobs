import React, { FC } from 'react';

interface TopBarMobileProps {
   title: string;
}

export const TopBarMobile: FC<TopBarMobileProps> = ({ title }) => {
   return (
      <div
         className={`
         flext justify-center items-center 
         bg-white 
         border-b border-b-gray-300
         p-2 
         z-10 
         sticky top-0 
         w-full 
         md:hidden
      `}
      >
         <h1 className="text-gray-800 font-bold text-lg text-center ">
            {title}
         </h1>
      </div>
   );
};
