import React from 'react';
import { useAppSelector } from '../hooks/useRedux';
import { MainTabs, TopNavbar, FooterDesktop } from '../components/ui/';
import { JobInfoView, JobsView } from '../views/';

export const MainLayout = () => {
   return (
      <>
         <div className="fixed md:static h-screen w-screen md:w-full  ">
            <TopNavbar />
            {/* <div className="absolute bg-red-200">Sidebar</div> */}
            <MainContainer />
            <MobileNavbarContainer />
         </div>
         <FooterDesktopContainer />
      </>
   );
};

const MainContainer = () => {
   return (
      <div className="h-full pb-16 md:pb-12 flex justify-center">
         <LeftContainer />
         <RightContainer />
      </div>
   );
};

const LeftContainer = () => {
   return (
      <div className="w-full md:max-w-sm overflow-y-scroll">
         <JobsView />
      </div>
   );
};

const RightContainer = () => {
   const { isOpenRightSlide } = useAppSelector((state) => state.ui);

   return (
      <div
         className={`
         pb-5 
         absolute right-0
         h-full w-full max-w-md 
         z-[60] md:z-0 
         md:static md:right-0 
         md:mt-0 md:pb-6
         md:translate-x-0
         ${isOpenRightSlide ? '' : 'translate-x-full'}
         transition-all duration-500 ease-in-out
      `}
      >
         <JobInfoView />
      </div>
   );
};

const MobileNavbarContainer = () => {
   return (
      <div className="sticky bottom-0 h-16 w-full md:hidden">
         <MainTabs />
      </div>
   );
};

const FooterDesktopContainer = () => {
   return (
      <div className="hidden md:block ">
         <FooterDesktop />
      </div>
   );
};
