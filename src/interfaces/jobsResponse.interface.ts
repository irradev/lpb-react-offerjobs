import { IJob } from './job.interface';

export interface IJobsResponse {
   ['00-warning']: string;
   ['0-legal-notice']: string;
   ['job-count']: number;
   jobs: IJob[];
}
