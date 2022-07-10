import React from 'react';
import { MainTabs } from '../components/ui/MainTabs';

export const MainLayout = () => {
   return (
      <div>
         <div className="bg-red-200">Sidebar</div>
         <div>content</div>
         <div>
            <MainTabs />
         </div>
      </div>
   );
};
