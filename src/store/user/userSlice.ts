import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IBadges {
   favoriteJobs: number[];
   appliedJobs: number;
   notifications: number;
}

export interface userState {
   id: string;
   name: string;
   email: string;
   favoriteJobs: number[];
   appliedJobs: number[];
   viewedJobs: number[];
   badges: IBadges;
}

const initialState: userState = {
   id: '',
   name: 'userName',
   email: 'email@mail.com',
   favoriteJobs: [],
   appliedJobs: [],
   viewedJobs: [],
   badges: {
      favoriteJobs: [],
      appliedJobs: 0,
      notifications: 0,
   },
};

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      addToFavoriteJobs: (state, action: PayloadAction<number>) => {
         if (!state.favoriteJobs.some((f) => f === action.payload)) {
            state.favoriteJobs.push(action.payload);
            state.badges.favoriteJobs.push(action.payload);
         }
      },
      removeFromFavoriteJobs: (state, action: PayloadAction<number>) => {
         // User Favorite Jobs
         let itemIndex = state.favoriteJobs.findIndex(
            (f) => f === action.payload
         );
         state.favoriteJobs.splice(itemIndex, 1);

         // For recent badge only
         if (state.badges.favoriteJobs.some((f) => f === action.payload)) {
            itemIndex = state.badges.favoriteJobs.findIndex(
               (f) => f === action.payload
            );
            state.badges.favoriteJobs.splice(itemIndex, 1);
         }
      },
      addToAppliedJobs: (state, action: PayloadAction<number>) => {
         state.appliedJobs.push(action.payload);
         state.badges.appliedJobs += 1;
      },
      addToViewedJobs: (state, action: PayloadAction<number>) => {
         state.viewedJobs.push(action.payload);
      },
   },
});

// Action creators are generated for each case reducer function
export const {
   addToFavoriteJobs,
   addToAppliedJobs,
   addToViewedJobs,
   removeFromFavoriteJobs,
} = userSlice.actions;
