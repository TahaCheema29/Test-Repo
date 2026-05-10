import {
  BrainyBoxTechBG,
  BrainyBoxTechImage1,
  BrainyBoxTechImage2,
} from "@/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import ListPoints from "../../components/ListPoints";

const PROJECT_CHALLENGES = [
  "The platform required a scalable infrastructure to handle fluctuating workloads, especially during high-demand periods, such as bulk QR code generation requests.",
  "Ensuring minimal downtime and continuous availability of services across different regions was essential.",
  "Secure handling of user and generated data was crucial to comply with industry standards and regulations.",
  "The rapid development cycle demanded an automated and reliable deployment pipeline to integrate changes and updates quickly.",
];

const SOLUTIONS = [
  "<highlight>AWS Infrastructure</highlight>: Provisioned and managed AWS infrastructure using EC2, RDS, and custom VPC setups to ensure high availability and scalability. Utilized Auto Scaling and load balancing to handle varying workloads and maintain uptime.",
  "<highlight>Backup Strategies</highlight>: Implemented robust backup strategies for EC2 instances and RDS databases, ensuring disaster recovery mechanisms were in place.",
  "<highlight>CI/CD Pipeline</highlight>: Built and maintained GitLab CI/CD pipelines to automate code integration, testing, and deployment processes. This enabled faster release cycles and minimized manual errors. Automated rollback mechanisms were included to revert to stable versions when necessary.",
];

const RESULTS = [
  "Easily scales to handle demand without performance loss.",
  "Automated CI/CD reduces deployment time and accelerates development.",
  "Secured infrastructure with backup strategies ensuring data integrity.",
  "High-availability and auto-scaling minimize downtime during high traffic.",
];

export default function Page() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={BrainyBoxTechBG}
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
                    title="Brainy Box Tech <br/>(QR Code Generating Platform)"
                    description="BrainyBoxTech is a cutting-edge platform designed to generate QR codes for various applications. The platform needed a robust, scalable, and high-availability infrastructure to support the demands of generating and managing QR codes at scale. It required seamless integration with automated CI/CD pipelines to enhance development and deployment processes."
                  />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={BrainyBoxTechImage1}
                  alt="brainy-box-image"
                  className="object-contain"
                />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={BrainyBoxTechImage2} alt="brainy-box-image" />
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
