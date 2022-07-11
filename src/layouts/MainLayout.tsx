import React, { useEffect, useRef } from 'react';
import { MainTabs } from '../components/ui/MainTabs';
import { JobsView } from '../views/JobsView';

export const MainLayout = () => {
   const $container = useRef<HTMLDivElement | null>(null);
   const $bottomBar = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      let bottomBarHeight = $bottomBar.current!.offsetHeight;
      $container.current!.style.height = `calc(100% - ${bottomBarHeight}px)`;
   }, []);

   return (
      <div className="fixed h-screen w-screen ">
         {/* <div className="absolute bg-red-200">Sidebar</div> */}
         <div
            ref={$container}
            className="h-full flex justify-center  bg-slate-200"
         >
            <div className="w-full sm:max-w-sm overflow-y-scroll">
               <JobsView />
            </div>
            <div className="bg-blue-200 hidden absolute right-0 w-full max-w-md sm:static">
               right content
            </div>
         </div>
         <div ref={$bottomBar} className="sticky bottom-0 w-full">
            <MainTabs />
         </div>
      </div>
   );
};
