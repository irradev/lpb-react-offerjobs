import React, { FC } from 'react';
import { useAppSelector } from '../hooks/useRedux';
import { JobCardHead } from '../components';
import { CardContainer } from '../components/ui';
import {
   JobCardInfo,
   JobCardDescription,
   JobCardActionButtonsContainer,
} from '../components/';

export const JobInfoView = () => {
   const { selectedJob: job } = useAppSelector((state) => state.jobs);

   if (!job) return <div className="hidden md:block">Selected a job</div>;

   return (
      <CardContainer>
         <div className="flex flex-col h-full relative">
            <div className="flex-shrink-0">
               <JobCardHead
                  company_logo={job.company_logo}
                  company_name={job.company_name}
                  title={job.title}
                  publication_date={job.publication_date}
               />
               <JobCardInfo
                  location={job.candidate_required_location}
                  category={job.category}
                  jobType={job.job_type}
                  salary={job.salary}
               />
               <h2>Tags</h2>
            </div>
            <div className="flex-grow  overflow-y-scroll relative">
               <JobCardDescription
                  isFullInfo={true}
                  description={job.description}
               />
            </div>

            <div className="flex-shrink-0">
               <JobCardActionButtonsContainer
                  jobId={job.id}
                  wichFather={'jobinfo'}
               />
            </div>
         </div>
      </CardContainer>
   );
};
