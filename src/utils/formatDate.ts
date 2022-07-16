import { formatDistance, subDays } from 'date-fns';

export const formatDate = (publishDate: string) => {
   return formatDistance(subDays(new Date(publishDate), 3), new Date(), {
      addSuffix: true,
   });
};
