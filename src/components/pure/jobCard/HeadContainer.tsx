import { FC } from 'react';
import { formatDistance, subDays } from 'date-fns';

interface HeadContainerProps {
   company_logo: string;
   company_name: string;
   title: string;
   publication_date: string;
}

export const HeadContainer: FC<HeadContainerProps> = ({
   company_logo,
   company_name,
   title,
   publication_date,
}) => {
   const formatDate = (publishDate: string) => {
      return formatDistance(subDays(new Date(publishDate), 3), new Date(), {
         addSuffix: true,
      });
   };

   const setRandomlyNew = (date: string) => {
      if (date === '4 days ago') {
         let random = Math.floor(Math.random() * 2);
         return random > 0 ? true : false;
      }

      return false;
   };

   return (
      <div className="flex gap-2">
         <div className="flex-shrink-0 w-14 relative">
            <img src={company_logo} alt={company_name} />
            {setRandomlyNew(formatDate(publication_date)) && <NewTag />}
         </div>
         <div className="flex-grow flex flex-col justify-center items-start relative">
            <div className="flex ">
               <span className="text-xs text-blue-400 font-bold">
                  {company_name}
               </span>
               <span className="flex-shrink-0 w-12"> </span>
            </div>
            <h2 className="text-sm text-gray-800 font-bold">{title}</h2>

            <span
               className="absolute right-0 top-0 text-gray-500"
               style={{ fontSize: '10px' }}
            >
               {formatDate(publication_date)}
            </span>
         </div>
      </div>
   );
};

const NewTag = () => {
   return (
      <span className="bg-red-500 text-white text-xs font-bold px-1 rounded-sm absolute -top-1 -left-1">
         NEW
      </span>
   );
};
