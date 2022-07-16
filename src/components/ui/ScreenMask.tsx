import React, { FC } from 'react';

interface ScreenMaskProps {
   isOpen: boolean;
   handleClose: () => void;
}

export const ScreenMask: FC<ScreenMaskProps> = ({ isOpen, handleClose }) => {
   return (
      <div
         onClick={handleClose}
         className={`
         bg-black 
         opacity-0
         absolute top-0 left-0
         w-full h-full
         -z-50
         md:hidden
         transition-opacity duration-300 ease-in-out
         ${isOpen ? 'opacity-50 z-50' : ''}
      `}
      ></div>
   );
};
