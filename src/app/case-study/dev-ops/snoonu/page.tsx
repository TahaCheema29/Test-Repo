import { SnoonuBG, SnoonuImage1, SnoonuImage2 } from "@/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import ListPoints from "../../components/ListPoints";

const PROJECT_CHALLENGES = [
  "Managing complex AWS infrastructure while adhering to security best practices.",
  "Integrating security checks into the fast-paced CI/CD pipeline.",
  "Continuously monitoring for security threats and ensuring regulatory compliance.",
];

const SOLUTIONS = [
  "<highlight>SecOps Leadership</highlight>: Led initiatives to harden IAM roles, segment VPCs, and implement continuous compliance checks using Secureframe.",
  "<highlight>Integrated Security into CI/CD</highlight>: Incorporated automated vulnerability scans, secrets detection, and policy enforcement within GitHub Actions to ensure security at every stage of development.",
  "<highlight>Continuous Monitoring</highlight>: Set up real-time threat detection and incident response protocols.",
];

const RESULTS = [
  "Hardened IAM and isolated VPC for enhanced security.",
  "Automated security checks integrated into the CI/CD pipeline.",
  "Continuous monitoring enabled streamlined compliance.",
  "Leveraged Secure frame for automated compliance management.",
];

export default function Page() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={SnoonuBG}
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
                    title="Snoonu <br/>(E-commerce Ecosystem)"
                    description="Snoonu is a dynamic e-commerce platform that handles a large volume of transactions and user data. To ensure the highest security standards, SecOps initiatives were implemented across the AWS infrastructure and integrated into the development lifecycle to safeguard critical data and maintain a secure environment."
                  />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={SnoonuImage1}
                  alt="snoonu-image"
                  className="object-contain"
                />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={SnoonuImage2} alt="snoonu-image" />
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
