import {
  Microsoft365BG,
  Microsoft365Image1,
  Microsoft365Image2,
} from "@/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import ListPoints from "../../components/ListPoints";

const PROJECT_CHALLENGES = [
  "<highlight>Collaboration Tools Management</highlight>: Streamlining and managing various tools within the Microsoft 365 ecosystem.",
  "<highlight>Secure Access</highlight>: Implementing secure identity and access management across the organization.",
  "<highlight>Enterprise Adoption</highlight>: Ensuring seamless adoption of Microsoft tools like Word, Excel, and PowerPoint, while providing training and governance.",
  "<highlight>Centralized Policy Enforcement</highlight>: Establishing consistent policies for all Microsoft 365 tools.",
];

const SOLUTIONS = [
  "<highlight>Microsoft 365 Integration</highlight>: Led the integration and administration of tools such as Teams, Outlook, SharePoint, OneDrive, and Planner, streamlining collaboration across the organization.",
  "<highlight>Secure Identity Management</highlight>: Implemented Azure Active Directory for secure access and identity management, ensuring safe and compliant usage.",
  "<highlight>Enterprise-Wide Adoption</highlight>: Supported the adoption of Microsoft Word, Excel, and PowerPoint by standardizing deployments, providing user training, and utilizing usage analytics.",
  "<highlight>Policy Enforcement</highlight>: Centralized policy enforcement across the Microsoft 365 ecosystem to maintain control and compliance.",
];

const RESULTS = [
  "Centralized Microsoft 365 tools for enhanced teamwork.",
  "Standardized deployments and training for seamless adoption.",
  "Secured identity management with Azure AD.",
  "Enforced policies for better compliance.",
];

export default function Page() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={Microsoft365BG}
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
                    title="Microsoft365 <br/>(Integration service of Microsoft365)"
                    description="The project focused on integrating and administering the Microsoft 365 ecosystem across the organization, enhancing collaboration and productivity while ensuring secure access and identity management."
                  />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={Microsoft365Image1}
                  alt="microsoft-365-image"
                  className="object-contain"
                />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={Microsoft365Image2} alt="microsoft-365-image" />
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
