"use client"

import { Job } from "@/types/JobTypes";
import { useEffect, useState } from "react";
import VacancySideBar from "./VacancySidebard";
import { getJobTypeLabel } from "@/utils/jobUtils";

export default function JObDescription() {

    const [job, setJob] = useState<Job | null>(null);

    useEffect(() => {
        const storedJob = localStorage.getItem("selectedJob");
        if (storedJob) setJob(JSON.parse(storedJob));
    }, []);


    if (!job) return <p>No job data found.</p>;
    return (
        <div className="my-10 ssm:my-16 sm:my-20 md:my-24 lg:my-28 flex flex-col gap-16 sm:gap-20 lg:gap-24 ">
            <div className="w-full h-20 sm:h-24 lg:h-28 2xl:h-36 4xl:h-40 bg-soft-green-fade flex justify-center items-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[50px] 3xl:text-[40px] 4xl:text-5xl 5xl:text-6xl  font-semibold text-white">
                    {job.title}
                </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-10 w-11/12 xl:w-10/12 mx-auto">
                <div className="flex-1/3 order-2 md:order-1">
                    <VacancySideBar shareableLink={job.applicationLink} title={job.title} type={getJobTypeLabel(job.type)} workMode={job.workMode} location={job.location} />
                </div>
                <div className="flex-2/3 order-1 md:order-2">
                    <div
                        className="text-base text-gray-800 leading-relaxed prose"
                        dangerouslySetInnerHTML={{ __html: job.description }}
                    />
                </div>
            </div>
        </div>
    )
}