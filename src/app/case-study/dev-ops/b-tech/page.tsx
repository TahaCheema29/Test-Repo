import { BTechBG, BTechImage1, BTechImage2 } from "@/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import ListPoints from "../../components/ListPoints";

const PROJECT_CHALLENGES = [
  "<highlight>Scalable and Reliable Infrastructure</highlight>: Ensuring the infrastructure could scale with demand while maintaining high performance.",
  "<highlight>Automation of Deployment</highlight>: Streamlining the build, test, and deployment processes to enforce consistency and improve delivery speed.",
  "<highlight>Monitoring and Security</highlight>: Ensuring the applications were secure and reliably monitored across environments.",
];

const SOLUTIONS = [
  "<highlight>AWS Infrastructure Management</highlight>: Provisioned and managed AWS ECS to deploy containerized applications backed by RDS. Implemented secure networking, auto-scaling, and continuous monitoring to ensure the applications' reliability and performance.",
  "<highlight>CI/CD Automation</highlight>: Designed and implemented CI/CD pipelines using GitHub Actions, automating build, test, and deployment workflows to streamline code delivery and ensure consistency across development and production environments.",
];

const RESULTS = [
  "Deployed containerized apps with auto-scaling for high availability.",
  "Automated CI/CD pipelines for quicker, consistent deployments.",
  "Ensured application performance with monitoring and security.",
  "Maintained workflow consistency throughout development and production.",
];

export default function Page() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={BTechBG}
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
                    title="BTech"
                    description="BTech provisioned and managed AWS infrastructure to deploy containerized applications on ECS, ensuring secure networking, auto-scaling, and robust monitoring. They also streamlined the application delivery process with automated CI/CD pipelines using GitHub Actions."
                  />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={BTechImage1}
                  alt="b-tech-image"
                  className="object-contain"
                />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={BTechImage2} alt="b-tech-image" />
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
