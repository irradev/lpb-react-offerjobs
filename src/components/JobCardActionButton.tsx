import { FC, ReactElement } from 'react';

interface JobCardActionButtonProps {
   bgColor: string;
   textColor: string;
   width: string;
   customClass?: string;
   content: string | ReactElement;
   onClick?: () => void;
}

export const JobCardActionButton: FC<JobCardActionButtonProps> = ({
   bgColor,
   textColor,
   width,
   customClass = '',
   content,
   onClick = () => {},
}) => {
   return (
      <button
         onClick={onClick}
         className={`
         flex justify-center items-center 
         ${bgColor}
         ${textColor} text-sm font-bold 
         uppercase 
         p-2 
         rounded 
         shadow-lg 
         h-9 ${width} md:h-7
         ${customClass}
         transition-all duration-150 ease-in-out
      `}
      >
         {content}
      </button>
   );
};
