import { BoxoBG, BoxoImage1, BoxoImage2 } from "@/assets";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/sections/FooterSection";
import CaseStudyHeader from "../../components/CaseStudyHeader";
import ListPoints from "../../components/ListPoints";

const PROJECT_CHALLENGES = [
  "<highlight>Scalability & High Availability</highlight>: The platform needed to support large-scale traffic spikes during peak sales periods, with minimal latency and no single point of failure.",
  "<highlight>Environment Isolation</highlight>: Required strict separation between staging and production environments to reduce deployment risk.",
  "<highlight>Multi-cloud Deployment</highlight>: Stakeholders mandated the use of both AWS and GCP to leverage cost efficiencies and avoid vendor lock-in.",
  "<highlight>CI/CD Automation</highlight>: Developers needed a fast, automated release process with support for rollback, gated approvals, and per-environment configuration.",
  "<highlight>Unified Monitoring & Secrets Management</highlight>: Secure and centralized handling of credentials and system observability across clouds.",
];

const SOLUTIONS = [
  "Provisioned multi-cloud infrastructure using Terraform, deploying services on AWS ECS and GCP GKE with managed databases (RDS, Cloud SQL).",
  "Enabled auto-scaling, redundancy, and isolated environments for staging and production.",
  "Automated deployments via AWS CodePipeline (ECS) and Jenkins (GKE) with support for rollbacks and approvals.",
  "Set up centralized monitoring and secret management using CloudWatch, Prometheus, and native secret managers.",
];

const RESULTS = [
  "By designing a resilient, automated, and scalable DevOps framework, Boxo achieved:<point>Faster and safer deployments</point> <point>Improved system reliability</point> <point>A foundation for continuous innovation across multiple cloud platforms</point>",
  "This architecture empowers Boxo to deliver exceptional e-commerce experiences and real-time analytics at scale.",
];

export default function Page() {
  return (
    <div>
      <main className=" min-h-screen">
        <div className="absolute inset-0 z-0 mt-20 md:mt-24 xl:mt-28">
          <Image
            className="w-full h-2/3 object-cover"
            src={BoxoBG}
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
                    title="Boxo <br/>(E-Commerce & Analytics Platform)"
                    description="Boxo is a scalable e-commerce and analytics platform designed to support high-volume product listings, transactional workflows, and real-time analytics. To meet modern business demands, the platform was architected with a multi-cloud, microservices-based backend and full CI/CD automation, enabling rapid feature delivery, fault tolerance, and seamless developer experience."
                  />
                  <ListPoints
                    title="Project Challenges"
                    challenges={PROJECT_CHALLENGES}
                  />
                </div>
                <Image
                  src={BoxoImage1}
                  alt="boxo-image"
                  className="object-contain"
                />
                <div className="flex flex-col gap-16 lg:gap-24 p-4 md:p-12  w-full lg:w-11/12 mx-auto">
                  <ListPoints title="Solutions" challenges={SOLUTIONS} />
                  <div className="bg-gray md:px-10 lg:px-14 xl:px-20 md:py-8 lg:py-12 xl:py-16">
                    <Image src={BoxoImage2} alt="boxo-image" />
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
