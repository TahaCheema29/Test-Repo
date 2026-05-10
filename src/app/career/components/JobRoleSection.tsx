"use client";

import { Job } from "@/types/JobTypes";
import JobRoleCard from "./JobRoleCard";
import { useEffect } from "react";
import { getJobTypeLabel } from "@/utils/jobUtils";
import { showToast } from "@/utils/defaultToastOption";
import { useRouter } from "next/navigation";
import { getTimeAgo } from "@/utils/getTimeDIff";

interface JobRoleSectionProps {
  jobs: Job[] | string;
}

export default function JobRoleSection({ jobs }: JobRoleSectionProps) {
  const router = useRouter()

  useEffect(() => {
    if (typeof jobs === "string") {
      showToast("error", jobs);
    }
  }, [jobs]);

  const onViewClick = (index: number) => {
    if (typeof jobs !== "string") {
      localStorage.setItem("selectedJob", JSON.stringify(jobs[index]));
      router.push("/career/detail")
    }
  }

  return (
    <div className="flex flex-col gap-12 sm:gap-14 lg:gap-16 xl:gap-20">
      <h3 className="text-green-gradient text-3xl lg:text-4xl 3xl:text-[40px] 5xl:text-[45px] text-center font-semibold">
        Find the Role that Best Fits You!
      </h3>

      <div className="w-full h-[1px] bg-[#74AFAD]"></div>
      {typeof jobs === "string" ? (
        <p className="text-center text-lg text-gray-500">
          {jobs || "No jobs available at the moment. Please check back later."}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-10 lg:gap-5 xl:gap-10">
          {jobs?.map((job, index) => (
            <JobRoleCard
              key={index}
              index={index}
              role={job.title}
              type={getJobTypeLabel(job.type)}
              city="Lahore. Pakistan"
              roleType={job.status === "active" ? "OPEN_ROLE" : "CLOSED_ROLE"}
              postedAt={getTimeAgo(job.createdAt)}
              salaryRange={`${job.salary.currency} ${job.salary.from} - ${job.salary.currency} ${job.salary.to}`}
              onViewClick={() => { onViewClick(index) }} />
          ))}
        </div>
      )}
    </div>
  );
}
