import {
  TechConsultingBG,
  TechConsultingImage1,
  TechConsultingImage2,
} from "@/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import ListPoints from "../../components/ListPoints";

const PROJECT_CHALLENGES = [
  "Clients lacked internal DevOps expertise for Azure-based infrastructure. ",
  "Manual deployments were error-prone and time-consuming.",
  "Engineering teams needed hands-on support and training to adopt cloud-native DevOps practices.",
];

const SOLUTIONS = [
  "Provisioned Azure infrastructure using best practices for security, scalability, and cost-efficiency.",
  "Implemented CI/CD pipelines with Azure DevOps, streamlining build-test-deploy workflows.",
  "Delivered on-call DevOps support, covering deployment issues, performance tuning, and environment management.",
  "Conducted tailored training sessions to upskill internal teams on Azure operations, monitoring, and CI/CD pipelines.",
];

const RESULTS = [
  "40% faster deployments with automation.",
  "Improved incident management via 24/7 support.",
  "Empowered teams with hands-on training and docs.",
  "Reduced cloud costs through resource optimization.",
];

export default function Page() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={TechConsultingBG}
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
                    title="Tech Consulting"
                    description="TechConsulting provides DevOps and cloud infrastructure services to clients across industries. The focus of this engagement was to assist multiple clients in transitioning to Microsoft Azure with robust, scalable DevOps practices, improving deployment reliability, operational efficiency, and internal team maturity."
                  />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={TechConsultingImage1}
                  alt="tech-consulting-image"
                  className="object-contain"
                />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image
                      src={TechConsultingImage2}
                      alt="tech-consulting-image"
                    />
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
