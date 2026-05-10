import { QuantumBG, QuantumImage1, QuantumImage2 } from "@/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import ListPoints from "../../components/ListPoints";

const PROJECT_CHALLENGES = [
  "Designing an AWS infrastructure that is scalable, secure, and cost-effective.",
  "Integrating continuous compliance, error tracking, and edge security in CI/CD pipelines.",
  "Ensuring high availability and automated scaling based on resource demand.",
];

const SOLUTIONS = [
  "<highlight>Scalable AWS Architecture</highlight>: Designed a flexible, secure AWS environment with services like Lambda, Vapor, EC2, and RDS, focusing on cost optimization via rightsizing and Reserved Instances.",
  "<highlight>CI/CD Pipeline Automation</highlight>: Implemented Bitbucket Pipelines for automated deployments, integrated Sentry for error tracking, Vanta for compliance, and Cloudflare for enhanced security and performance.",
  "<highlight>High Availability & Security</highlight>: Ensured VPC isolation, security best practices, and auto-scaling to meet demand spikes without sacrificing performance or cost efficiency.",
];

const RESULTS = [
  "Optimized infrastructure for high availability and cost savings.",
  "Streamlined deployments with automated CI/CD and compliance checks.",
  "Enhanced security through integrated Cloudflare edge optimization.",
  "Improved performance with efficient auto-scaling and monitoring.",
];

export default function Page() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={QuantumBG}
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
                    title="Quantum <br/>(Building Supplies & IT Innovator)"
                    description="Quantum Building Supplies & IT Innovator required a highly scalable infrastructure to support its diverse IT operations. The solution focused on architecting a secure, cost-effective AWS environment and streamlining development processes through CI/CD automation and integrated security tools."
                  />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={QuantumImage1}
                  alt="qauntum-image"
                  className="object-contain"
                />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={QuantumImage2} alt="quantum-image" />
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
