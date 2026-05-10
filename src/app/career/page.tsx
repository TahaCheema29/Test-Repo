import Navbar from "../components/Navbar";
import FooterSection from "../components/sections/FooterSection";
import JobRoleSection from "./components/JobRoleSection";
import SendResume from "./components/SendResume";
import { fetchJobs } from "@/hook/fetchJobs";
import { Suspense } from "react";
import { JobRoleSectionSkeleton } from "./components/JObRoleSectionSkeleton";
import WorkWIthUs from "./components/WorkWithUs";
import HeroSection from "./components/HeroSection";

export default function CareerPage() {
  return (
    <div>
      <main className=" min-h-screen ">
        <div className=" z-10 h-full flex flex-col">
          <Navbar />
          <HeroSection />
          <WorkWIthUs />
          <div className="w-11/12 xl:w-10/12 mx-auto flex flex-col gap-36 mb-28">
            <Suspense fallback={<JobRoleSectionSkeleton />}>
              <FetchCareers />
            </Suspense>
            <SendResume />
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}

async function FetchCareers() {
  const jobs = await fetchJobs();
  return <JobRoleSection jobs={jobs} />;
}

export const revalidate = 20;
