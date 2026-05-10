import { PowerhouseBG, PowerhouseImage1, PowerhouseImage2 } from "@/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import ListPoints from "../../components/ListPoints";

const PROJECT_CHALLENGES = [
  "<highlight>Infrastructure Management</highlight>: Ensuring secure, optimized, and reliable application performance across production environments.",
  "<highlight>Deployment Automation</highlight>: Automating deployment processes to streamline development and ensure rapid, consistent delivery.",
  "<highlight>Environment Configuration</highlight>: Supporting different environment configurations for staging, testing, and production.",
];

const SOLUTIONS = [
  "<highlight>AWS Infrastructure Management</highlight>: Managed AWS EC2 instances for application deployment, integrated with RDS for the backend, and implemented secure networking, automated backups, and performance optimization across production environments.",
  "<highlight>CI/CD Automation</highlight>: Built CI/CD pipelines using GitHub Actions to automate deployment processes, integrate testing workflows, and enable rapid, reliable delivery with environment-specific configurations.",
];

const RESULTS = [
  "Integrated testing and environment configurations for smoother deployments.",
  "Automated deployment for rapid, consistent releases.",
  "Enabled more reliable and efficient deployments with automated processes.",
  "Ensured secure, reliable delivery with performance optimizations.",
];

export default function Page() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={PowerhouseBG}
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
                    title="Powerhouse (IT Services)"
                    description="Powerhouse managed AWS infrastructure to deploy applications on EC2 with a backend powered by RDS. They also implemented CI/CD pipelines to automate deployment, integrate testing, and enable rapid delivery with environment-specific configurations."
                  />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={PowerhouseImage1}
                  alt="power-house-image"
                  className="object-contain"
                />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={PowerhouseImage2} alt="power-house-image" />
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
