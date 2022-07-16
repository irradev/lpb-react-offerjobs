export const setRandomlyNew = (date: string) => {
   if (date === '4 days ago') {
      let random = Math.floor(Math.random() * 2);
      return random > 0 ? true : false;
   }

   return false;
};
