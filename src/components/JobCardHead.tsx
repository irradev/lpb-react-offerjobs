import { FC } from 'react';
import { formatDate, setRandomlyNew } from '../utils/';
import { NewTag } from './';

interface JobCardHeadProps {
   company_logo: string;
   company_name: string;
   title: string;
   publication_date: string;
}

export const JobCardHead: FC<JobCardHeadProps> = ({
   company_logo,
   company_name,
   title,
   publication_date,
}) => {
   let daysAgo = formatDate(publication_date);
   let isNew = daysAgo === '4 days ago' ? true : false;

   return (
      <div className="flex gap-2">
         <div className="flex-shrink-0 w-14 relative">
            <img src={company_logo} alt={company_name} />
            {isNew && <NewTag />}
         </div>
         <div className="flex-grow flex flex-col justify-center items-start relative">
            <div className="flex ">
               <span className="text-sm text-blue-400 font-bold">
                  {company_name}
               </span>
               <span className="flex-shrink-0 w-12"> </span>
            </div>
            <h2 className="text-base text-gray-800 font-bold">{title}</h2>

            <span
               className="text-gray-500 text-xs absolute right-0 top-0 "
               // style={{ fontSize: '11px' }}
            >
               {daysAgo}
            </span>
         </div>
      </div>
   );
};
