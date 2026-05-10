import { CrewBloomBG, CrewBloomImage1, CrewBloomImage2 } from "@/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import ListPoints from "../../components/ListPoints";

const PROJECT_CHALLENGES = [
  "<highlight>Scalable & Secure Infrastructure</highlight>: The challenge was to ensure the infrastructure could handle growing demand while maintaining high security and performance.",
  "<highlight>Deployment Automation</highlight>: CrewBloom needed to automate the deployment process to accelerate delivery, reduce human error, and improve consistency across environments.",
  "<highlight>Efficient Environment Provisioning</highlight>: Rapidly provisioning and managing development, staging, and production environments was necessary to support agile development and faster releases.",
];

const SOLUTIONS = [
  "<highlight>AWS Infrastructure Optimization</highlight>: Managed and optimized AWS infrastructure (EC2, Lambda, S3, EBS, VPC, Load Balancers) for secure, scalable, and reliable application deployments.",
  "<highlight>CI/CD Automation</highlight>: Developed GitLab CI/CD pipelines to automate environment provisioning, build, test, and deployment workflows, accelerating release cycles.",
  "<highlight>Optimized Release Cycles</highlight>: Automated release processes to reduce operational overhead and allow developers to focus on feature development.",
];

const RESULTS = [
  "Best practices for secure, scalable, and efficient infrastructure.",
  "Automated deployment workflows for quicker delivery.",
  "Reduced operational costs and complexity through automation.",
  "Minimized manual intervention with CI/CD automation.",
];

export default function Page() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={CrewBloomBG}
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
                    title="CrewBloom <br/>(Staff Augmentation & IT services)"
                    description="CrewBloom, a leading staff augmentation and IT services provider, managed and optimized AWS infrastructure to enable scalable and secure application deployments. They focused on implementing best practices in AWS compute, storage, and networking, while also streamlining their deployment processes through the development and maintenance of CI/CD pipelines."
                  />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={CrewBloomImage1}
                  alt="crew-bloom-image"
                  className="object-contain"
                />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={CrewBloomImage2} alt="crew-bloom-image" />
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
