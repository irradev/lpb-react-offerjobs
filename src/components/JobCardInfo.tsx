import React, { FC } from 'react';

import {
   HiOutlineCurrencyDollar,
   HiOutlineLocationMarker,
} from 'react-icons/hi';

import { BiCategory, BiTimeFive } from 'react-icons/bi';
import { FiDollarSign } from 'react-icons/fi';

interface JobCardInfoProps {
   location: string;
   category: string;
   jobType: string;
   salary: string;
}
export const JobCardInfo: FC<JobCardInfoProps> = ({
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
         text:
            jobType === ''
               ? 'To treat'
               : jobType.replace('_', ' ').toUpperCase(),
      },
      {
         icon: <HiOutlineLocationMarker />,
         text: location,
      },
      // {
      //    icon: <BiCategory />,
      //    text: category,
      // },
   ];

   return (
      <div className="flex justify-start items-center gap-2 flex-wrap text-indigo-500 font-bold mt-3">
         {infos.map((info, index) => (
            <div
               key={`${index}_${info.text}_${category}_${jobType}`}
               className="flex items-center gap-1"
            >
               <span className="text-md">{info.icon}</span>
               <span className="text-sm">{info.text}</span>
            </div>
         ))}
      </div>
   );
};
