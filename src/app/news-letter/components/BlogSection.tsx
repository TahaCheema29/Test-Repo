"use client";
import { CustomSoftwareBG, CloudOptimizationBG, DesignToDevBG } from "@/assets";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface IBlog {
  title: string;
  imageUrl: StaticImageData | string;
  link: string;
}
export default function BlogSection() {
  const BLOGS: IBlog[] = [
    {
      title: "Why Cloud Optimization Matters",
      imageUrl: CloudOptimizationBG,
      link: "/blogs/cloud-optimization",
    },
    {
      title: "Why You Should Invest in Custom Software Development",
      imageUrl: CustomSoftwareBG,
      link: "/blogs/custom-software",
    },
    {
      title: "⁠How Our Team Builds Digital Products: From Design to Deployment",
      imageUrl: DesignToDevBG,
      link: "/blogs/design-to-deployment",
    },
  ];

  return (
    <section className="relative flex flex-col overflow-hidden bg-white  ">
      <div className="min-h-[30vh] mt-10 md:mt-14 xl:mt-20  w-11/12   mx-auto flex flex-col gap-12 xl:gap-16 overflow-hidden">
        <div className="w-full flex flex-col gap-4 items-center justify-center  text-center">
          <p className="text-xl md:text-2xl xl:text-3xl 3xl:text-[40px] text-footer-black font-medium">
            Our News & Blog
          </p>
          <p className="text-base lg:text-lg 3xl:text-xl w-11/12 md:w-2/3 lg:w-1/3">
            Stay updated with the latest industry news, insights, and expert
            blogs to keep you informed and inspired.
          </p>
        </div>

        <div className="flex-1 overflow-hidden lg:flex lg:flex-row  lg:scroll-smooth lg:scrollbar-hide cursor-pointer grid gap-4 md:grid-cols-2 xl:gap-8 md:auto-rows-auto mx-auto">
          {BLOGS.map((blog, index) => (
            <Link
              key={index}
              className="group bg-[#F9F9F9] flex flex-col gap-4 rounded-xl flex-[1_1_300px] max-w-[700px]"
              href={blog.link}
            >
              <Image
                src={blog.imageUrl}
                alt={`blog-${index}`}
                className="w-full rounded-2xl h-[260px] lg:h-[250px] xl:h-[290px] opacity-50 grayscale transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:grayscale-0"
              />
              <div className="w-11/12 mx-auto">
                <p className="text-xl font-semibold text-start mb-4">
                  {blog.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// opacity-50 group-hover:opacity-100 group-hover:grayscale-0 grayscale-100 transition-all duration-300 ease-in-out
