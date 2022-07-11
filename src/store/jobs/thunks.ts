import { addingNewJobs, loadJobs } from './';
import { jobsApi } from '../../api/';
import { IJobsResponse } from '../../interfaces';

export const startAddingNewJobs = () => {
   return async (dispatch: any, getState: any) => {
      dispatch(addingNewJobs());
      const { data } = await jobsApi.get<IJobsResponse, any>(
         // 'remote-jobs?limit=50'
         'remote-jobs'
      );
      const { jobs, 'job-count': count } = data;
      console.log('feching data', jobs);
      dispatch(loadJobs({ jobs, count }));
   };
};
