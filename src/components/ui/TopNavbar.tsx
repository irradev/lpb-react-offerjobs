import React from 'react';

export const TopNavbar = () => {
   return (
      <div className="hidden md:flex justify-center items-center h-12 sticky top-0 z-20 bg-blue-400">
         <div className="flex justify-between items-center  w-full max-w-4xl px-11">
            <div>logo menu</div>
            <div>links</div>
         </div>
      </div>
   );
};
