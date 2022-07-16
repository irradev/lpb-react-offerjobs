import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import {
   MainTabs,
   TopNavbar,
   FooterDesktop,
   ButtonCloseSlide,
} from '../components/ui/';
import { JobInfoView, JobsView } from '../views/';
import { setOpenRightSlide } from '../store';

export const MainLayout = () => {
   return (
      <>
         <div className="fixed md:static h-screen w-screen md:w-full bg-slate-200">
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
      <div className="h-full pb-16 md:pb-12 flex justify-center ">
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
   const dispatch = useAppDispatch();

   return (
      <div
         className={`
         pb-16
         fixed right-0
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
         <div className="flex justify-center items-center w-full h-12 relative md:hidden">
            <ButtonCloseSlide
               isOpenSlide={isOpenRightSlide}
               onClick={() => dispatch(setOpenRightSlide(false))}
            />
         </div>
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
