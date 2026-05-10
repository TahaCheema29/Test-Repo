import { SapHclBG, SapHclImage1, SapHclImage2 } from "@/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import ListPoints from "../../components/ListPoints";

const PROJECT_CHALLENGES = [
  "<highlight>Cross-Cloud Management</highlight>: Coordinating and maintaining cloud resources across multiple providers.",
  "<highlight>Microservices Scaling</highlight>: Ensuring seamless scalability for diverse applications running in different cloud environments.",
  "<highlight>Security & Compliance</highlight>: Ensuring adherence to security standards such as ISO 27001 and SOC 2 while maintaining high performance and uptime.",
  "<highlight>CI/CD Optimization</highlight>: Implementing efficient and secure pipelines for rapid code delivery.",
];

const SOLUTIONS = [
  "<highlight>Cross-Cloud Infrastructure</highlight>: Designed and managed infrastructure across AWS, GCP, and Azure using Terraform, Kubernetes, Helm, and Docker for scalable microservices deployment.",
  "<highlight>CI/CD & Runtime Protection</highlight>: Implemented GitHub Actions and Jenkins for CI/CD, integrated with SonarQube for code quality and Cloud Defender for runtime security.",
  "<highlight>Security & Compliance</highlight>: Enforced ISO 27001 and SOC 2 compliance across the stack while using Cloudflare and Kong API Gateway for secure, high-performance delivery.",
  "<highlight>Critical Services Management</highlight>: Managed essential services like Redis, PostgreSQL, SQL Server, Celery, and Metabase for analytics and task orchestration.",
];

const RESULTS = [
  "Managed and scaled microservices across multiple clouds.",
  "Streamlined deployments through CI/CD pipelines.",
  "Ensured secure, high-performance delivery with CDNs and API gateways.",
  "Achieved ISO 27001 and SOC 2 compliance for robust security.",
];

export default function Page() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={SapHclBG}
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
                    title="SAP/HCL <br/>(IT Services)"
                    description="SAP/HCL managed cross-cloud infrastructure across AWS, GCP, and Azure to support scalable microservices and ensure high-performance delivery for a variety of applications built with modern technologies such as Python/Django, Node.js, React, Next.js, and .NET."
                  />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={SapHclImage1}
                  alt="sap-hcl-image"
                  className="object-contain"
                />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={SapHclImage2} alt="sap-hcl-image" />
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
