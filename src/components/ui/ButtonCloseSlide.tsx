import React, { FC } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';

interface ButtonCloseSlideProps {
   isOpenSlide: boolean;
   onClick: () => void;
}

export const ButtonCloseSlide: FC<ButtonCloseSlideProps> = ({
   isOpenSlide,
   onClick,
}) => {
   return (
      <div
         onClick={onClick}
         className={`
               md:hidden
               flex-shrink-0 
             text-red-500 
               text-5xl 
               absolute bottom-0 
               pb-1
               cursor-pointer
               ${isOpenSlide ? 'translate-y-0 ' : 'translate-y-full'}
               transition-all duration-300 delay-300 ease-in-out
            `}
      >
         <div className="bg-zinc-200 h-5 w-5  absolute top-3 left-3 -z-10"></div>
         <RiCloseCircleFill />
      </div>
   );
};
