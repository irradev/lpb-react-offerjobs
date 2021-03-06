import React, { FC, useMemo } from 'react';

import { JobQueryIndex } from '../views/';
import { CardContainer } from './ui';
import {
   JobCardDescription,
   JobCardHead,
   JobCardInfo,
   JobCardActionButtonsContainer,
} from './';
import { IJob } from '../interfaces';

interface JobsListProps {
   jobs: IJob[];
   jobsPerShow: number;
   setJobQueryIndex: (value: React.SetStateAction<JobQueryIndex>) => void;
}

export const JobsList: FC<JobsListProps> = ({
   jobs,
   jobsPerShow,
   setJobQueryIndex,
}) => {
   return (
      <div className="">
         {useMemo(
            () =>
               jobs.map((job, index) => {
                  return (
                     <CardContainer key={`${job.id}_${job.title}`}>
                        <>
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

                           <JobCardDescription
                              isFullInfo={false}
                              description={job.description
                                 .replace(/<\/?[^>]+>/gi, ' ')
                                 .slice(0, 250)}
                           />

                           <JobCardActionButtonsContainer
                              jobId={job.id}
                              wichFather={'joblist'}
                           />
                        </>
                     </CardContainer>
                  );
               }),
            [jobs]
         )}

         {jobs.length > 0 && (
            <div className="flex justify-center items-center my-4">
               <button
                  onClick={() =>
                     setJobQueryIndex((state) => ({
                        from: state.to,
                        to: state.to + jobsPerShow,
                     }))
                  }
                  className="bg-blue-600 text-white font-bold text-sm rounded-md p-2 shadow-md "
               >
                  SHOW MORE
               </button>
            </div>
         )}
      </div>
   );
};

/*
candidate_required_location: "USA"
category: "All others"
company_logo: "https://remotive.com/job/1308782/logo"
company_logo_url: "https://remotive.com/job/1308782/logo"
company_name: "BetterHelp"
description: "<div class=\"h2\" style=\"line-height: 1.4; text-align: center; font-weight: 
id: 1308782
job_type: "other"
publication_date: "2022-07-08T23:32:26"
salary: "$60k - 130k"
tags: (9) ['excel', 'operations', 'business', 'people', 'writing', 'support', 'billing', 'mental health', 'software']
title: "Licensed Mental Health Therapist"
url: "https://remotive.com/remote-jobs/all-others/license

*/
