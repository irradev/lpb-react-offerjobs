import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IJob } from '../../interfaces';

interface IJobQueryIndex {
   from: number;
   to: number;
}

export interface jobState {
   jobs: IJob[];
   jobsToShow: IJob[];
   jobCount: number;
   jobQueryIndex: IJobQueryIndex;
   selectedJob: IJob | null;
   isAddingJobs: boolean;
}

interface AddJobsProps {
   jobs: IJob[];
   count: number;
}
const initialState: jobState = {
   jobs: [],
   jobsToShow: [],
   jobCount: 0,
   jobQueryIndex: { from: 0, to: 0 },
   selectedJob: null,
   isAddingJobs: false,
};

export const jobSlice = createSlice({
   name: 'jobs',
   initialState,
   reducers: {
      addingNewJobs: (state) => {
         state.isAddingJobs = true;
      },
      loadJobs: (state, action: PayloadAction<AddJobsProps>) => {
         state.jobs = action.payload.jobs.map((job) => {
            return job;
         });
         state.jobCount = action.payload.count;
         state.isAddingJobs = false;
      },
      setJobsToShow: (state, action: PayloadAction<IJob[]>) => {
         console.log('slice', action.payload);
         state.jobsToShow = action.payload;
      },
      selectedJob: (state, action: PayloadAction<IJob>) => {
         state.selectedJob = action.payload;
      },
      // toggleFavoriteJobs: (state, action: PayloadAction<number>) => {
      //    let isInFavortie = false;
      //    let indexInShows = state.jobsToShow.findIndex(
      //       (jobShow) => jobShow.id === action.payload
      //    );
      //    if (indexInShows > -1) {
      //       isInFavortie = state.jobsToShow[indexInShows].isInFavorite;
      //       state.jobsToShow[indexInShows].isInFavorite = !isInFavortie;
      //    }

      //    let indexInJobs = state.jobs.findIndex(
      //       (job) => job.id === action.payload
      //    );
      //    if (indexInJobs > -1) {
      //       isInFavortie = state.jobs[indexInJobs].isInFavorite;
      //       state.jobs[indexInJobs].isInFavorite = !isInFavortie;
      //    }

      //    if (indexInShows > -1 || indexInJobs > -1) {
      //       if (!isInFavortie) {
      //          state.badgeFavoriteJobs += 1;
      //       } else if (state.badgeFavoriteJobs > 0) {
      //          state.badgeFavoriteJobs -= 1;
      //       }
      //    }
      // },
      // setViewedJob: (state, action: PayloadAction<number>) => {
      //    state.jobs.map((job) => {
      //       if (job.id === action.payload) job.isViewed = true;

      //       return job;
      //    });
      // },
      // setAppliedJob: (state, action: PayloadAction<number>) => {
      //    state.jobs.map((job) => {
      //       if (job.id === action.payload) job.isApplied = true;

      //       return job;
      //    });
      // },
      // incrementByAmount: (state, action: PayloadAction<number>) => {
      //    // state.value += action.payload;
      // },
   },
});

// Action creators are generated for each case reducer function
export const {
   addingNewJobs,
   loadJobs,
   setJobsToShow,
   selectedJob,
   // toggleFavoriteJobs,
   // setViewedJob,
   // setAppliedJob,
} = jobSlice.actions;
