import { MicrosoftBG, MicrosoftImage1, MicrosoftImage2 } from "@/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import ListPoints from "../../components/ListPoints";

const PROJECT_CHALLENGES = [
  "<highlight>Containerized Workload Management</highlight>: Ensuring efficient deployment and scalability of containerized applications.",
  "<highlight>Seamless Application Delivery</highlight>: Automating build, test, and deployment workflows while maintaining environment-specific configurations.",
  "<highlight>High Availability & Resilience</highlight>: Ensuring the platform remained highly available and resilient across environments.",
];

const SOLUTIONS = [
  "<highlight>Containerized Workloads</highlight>: Designed and deployed workloads on Amazon EKS, integrating with RDS, S3, and secure IAM roles to ensure high availability and scalability.",
  "<highlight>CI/CD Automation</highlight>: Implemented AWS CodePipeline and CodeCommit for CI/CD automation, enabling automated build, test, and deployment workflows with environment-specific configurations and rollback support.",
];

const RESULTS = [
  "Deployed high-availability containerized workloads.",
  "Streamlined application delivery with automated workflows.",
  "Ensured platform resilience and seamless operations.",
  "Reduced the need for manual processes in deployment.",
];

export default function Page() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={MicrosoftBG}
            alt="hero background"
          />
          <div className="absolute inset-0 bg-hero-gradient"></div>
        </div>

        <div className=" z-10 h-full flex flex-col">
          <Navbar />

          <div className="relative z-10 w-full px-4 mt-[60vh] mb-20">
            <div className="bg-white max-w-7xl mx-auto rounded-xl">
              <div className="flex flex-col gap-16 lg:gap-32 w-full">
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <CaseStudyHeader
                    title="Microsoft <br/>(Business Platform)"
                    description="Macrosoft's business platform leveraged Amazon EKS for containerized workloads, integrated with AWS services like RDS, S3, and IAM roles, ensuring a highly available, scalable, and resilient infrastructure. CI/CD pipelines were implemented for seamless application delivery."
                  />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={MicrosoftImage1}
                  alt="microsoft-image"
                  className="object-contain"
                />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={MicrosoftImage2} alt="microsoft-image" />
                  </div>
                  <ListPoints
                    title="Results and  Impact"
                    challenges={RESULTS}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
