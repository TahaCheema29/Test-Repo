import { PsychplusBG, PsychplusImage1, PsychplusImage2 } from "@/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import ListPoints from "../../components/ListPoints";

const PROJECT_CHALLENGES = [
  "The system required scalable infrastructure to handle varying workloads while maintaining high performance.",
  "Safeguarding sensitive healthcare data and ensuring compliance with industry standards was crucial.",
  "Managing Azure resources effectively to minimize unnecessary costs while scaling efficiently.",
];

const SOLUTIONS = [
  "<highlight>Azure Infrastructure</highlight>: Engineered and managed a range of Azure services, including App Services, AKS, VMs, MySQL Server, Storage Accounts, and Analytics Workspaces. Focused on IAM governance and cost optimization to reduce resource wastage.",
  "<highlight>CI/CD Workflows</highlight>: Developed secure, scalable workflows with GitHub Actions and self-hosted runners. Integrated Bitwarden for secure secrets management and CloudDefender for runtime protection. Enforced usage controls to monitor and reduce build costs.",
];

const RESULTS = [
  "Managed resources for cost-efficiency and scalability.",
  "Faster deployments and lower build costs.",
  "Secured sensitive data with robust protocols.",
  "Optimized resource use across environments.",
];

export default function Page() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={PsychplusBG}
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
                    title="Psychplus <br/>(Health Care System)"
                    description="Psychplus Health Care System required a secure and scalable infrastructure to support its healthcare applications. The system focused on leveraging Azure's robust services for optimized performance, cost-efficiency, and enhanced security."
                  />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={PsychplusImage1}
                  alt="psych-plus-image"
                  className="object-contain"
                />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={PsychplusImage2} alt="psych-plus-image" />
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
