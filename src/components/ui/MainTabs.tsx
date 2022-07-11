import React, { useCallback, useMemo } from 'react';

import { MdOutlineWorkOutline } from 'react-icons/md';
import { IoIosStarOutline } from 'react-icons/io';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
import { useAppSelector } from '../../hooks/useRedux';

export const MainTabs = () => {
   const { badges } = useAppSelector((state) => state.user);

   const tabs = useMemo(() => {
      let iconSize = 24;
      return [
         {
            id: 1,
            name: 'menu',
            icon: <RiMenuUnfoldFill fontSize={30} />,
            badge: 0,
         },
         {
            id: 2,
            name: 'offers',
            icon: <MdOutlineWorkOutline fontSize={iconSize} />,
            badge: 2,
         },
         {
            id: 3,
            name: 'favorites',
            icon: <IoIosStarOutline fontSize={iconSize} />,
            badge: badges.favoriteJobs.length,
         },
         {
            id: 4,
            name: 'alerts',
            icon: <IoNotificationsOutline fontSize={iconSize} />,
            badge: 14,
         },
         {
            id: 5,
            name: 'profile',
            icon: <FaRegUserCircle fontSize={iconSize} />,
            badge: 0,
         },
      ];
   }, [badges]);

   return (
      <div
         className={`
         flex justify-evenly
         border-t border-t-gray-300
         bg-white
         text-gray-500
         py-2
      `}
      >
         {tabs.map((tab) => (
            <button
               key={`${tab.id}_${tab.name}`}
               className="flex flex-col justify-center items-center relative"
            >
               {tab.icon}
               <span className="uppercase text-xs mt-1">
                  {tab.name !== 'menu' && tab.name}
               </span>

               {tab.badge > 0 && (
                  <span
                     className="
                     text-white
                     bg-red-600
                     font-bold
                     text-xs
                     rounded-full 
                     w-4
                     absolute
                     -top-1
                     right-1
                     
                  "
                  >
                     {tab.badge > 9 ? '9+' : tab.badge}
                  </span>
               )}
            </button>
         ))}
      </div>
   );
};
