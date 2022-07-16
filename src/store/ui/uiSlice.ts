import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface uiState {
   isOpenRightSlide: boolean;
}

const initialState: uiState = {
   isOpenRightSlide: false,
};

export const uiSlice = createSlice({
   name: 'ui',
   initialState,
   reducers: {
      setOpenRightSlide: (state, action: PayloadAction<boolean>) => {
         state.isOpenRightSlide = action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const { setOpenRightSlide } = uiSlice.actions;
