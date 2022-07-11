import React, { FC } from 'react';

import {
   HiOutlineCurrencyDollar,
   HiOutlineLocationMarker,
} from 'react-icons/hi';

import { BiCategory, BiTimeFive } from 'react-icons/bi';
import { FiDollarSign } from 'react-icons/fi';

interface InfoContainerProps {
   location: string;
   category: string;
   jobType: string;
   salary: string;
}
export const InfoContainer: FC<InfoContainerProps> = ({
   location,
   category,
   jobType,
   salary,
}) => {
   const infos = [
      {
         icon: salary === '' ? <FiDollarSign /> : <></>,
         text: salary === '' ? 'To treat' : salary,
      },
      {
         icon: <BiTimeFive />,
         text: jobType.replace('_', ' ').toUpperCase(),
      },
      {
         icon: <HiOutlineLocationMarker />,
         text: location,
      },
      {
         icon: <BiCategory />,
         text: category,
      },
   ];

   return (
      <div className="flex justify-start items-center gap-2 flex-wrap text-sm text-orange-500 font-bold mt-3">
         {infos.map((info, index) => (
            <div
               key={`${index}_${info.text}_${category}_${jobType}`}
               className="flex gap-1"
            >
               {info.icon}
               <span className="text-xs">{info.text}</span>
            </div>
         ))}
      </div>
   );
};

const Separator = () => {
   return <span className="px-2">|</span>;
};
