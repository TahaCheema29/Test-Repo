import { LocalizedBG, LocalizedImage1, LocalizedImage2 } from "@/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import ListPoints from "../../components/ListPoints";

const PROJECT_CHALLENGES = [
  "<highlight>Infrastructure Automation</highlight>: The platform needed a robust and automated infrastructure setup to efficiently manage and scale resources without manual intervention.",
  "<highlight>Security Compliance</highlight>: Ensuring security compliance and monitoring for an e-commerce platform handling sensitive user data and transactions.",
  "<highlight>Cost Optimization</highlight>: Managing cloud costs while maintaining performance, especially with the growing infrastructure needs.",
  "<highlight>Continuous Delivery</highlight>: Establishing smooth and automated CI/CD pipelines to speed up the deployment process and ensure code quality.",
  "<highlight>Incident Response</highlight>: Implementing a streamlined incident response system to reduce downtime and improve system reliability.",
];

const SOLUTIONS = [
  "<highlight>Infrastructure Automation & Security</highlight>: Automated infrastructure with CloudFormation, ensuring a secure and scalable architecture using AWS services like EC2, ECS, RDS, and S3, while implementing continuous security monitoring with AWS Security Hub and Inspector.",
  "<highlight>CI/CD & Event-Driven Architecture</highlight>: Implemented CI/CD pipelines with GitHub Actions and Bitbucket Pipelines, integrated AWS SAM and event-driven services (Event Bridge, Lambda, SQS) to support scalable, cost-optimized deployments.",
  "<highlight>Cost Optimization</highlight>: Reduced infrastructure costs using Graviton-based compute, reserved instances, and proactive cost management practices through AWS Billing.",
  "<highlight>Incident Response</highlight>: Integrated Freshdesk to enhance incident management and improve platform reliability and customer satisfaction.",
];

const RESULTS = [
  "Scalable provisioning with infrastructure as code.",
  "Quick, reliable deployments with CI/CD.",
  "Continuous compliance and data protection.",
  "Reduced cloud costs with Graviton and reserved instances.",
];

export default function Page() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={LocalizedBG}
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
                    title="Localized (E-Commerce Platform)"
                    description="This localized e-commerce platform offers designer clothing, accessories, and beauty products, and required a DevOps strategy to automate its infrastructure, enhance security, optimize costs, and improve development and incident response workflows. The solution involved implementing modern cloud technologies and CI/CD practices to ensure scalability, security, and operational efficiency."
                  />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={LocalizedImage1}
                  alt="localized-image"
                  className="object-contain"
                />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={LocalizedImage2} alt="localized-image" />
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
