"use client";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import Link from "next/link";

interface CaseStudySectionProps {
  caseStuies: { title: string; image: StaticImageData; link: string }[];
}

export default function CaseStudySection({
  caseStuies,
}: CaseStudySectionProps) {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView="auto"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      mousewheel={{ forceToAxis: true }}
      modules={[Autoplay, Pagination, Mousewheel]}
      className="w-full md:w-11/12  overflow-hidden mx-auto cursor-pointer"
    >
      {caseStuies.map((caseStudy, index) => (
        <SwiperSlide
          key={index}
          className="!w-[350px] lg:!w-[480px] 3xl:!w-[580px] !h-[340px] lg:!h-[380px] 3xl:!h-[400px] group bg-[#F9F9F9] flex flex-col rounded-xl cursor-pointer p-1 md:p-3"
        >
          <Link href={caseStudy.link} className="block w-full h-full">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              width={450}
              height={250}
              className="w-[340px] h-[250px] lg:w-[470px] lg:h-[290px] 3xl:w-[570px] 3xl:h-[310px] object-cover rounded-2xl opacity-50 grayscale transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:grayscale-0 mb-3"
            />
            <div className="w-11/12 mx-auto ">
              <p className="text-xl lg:text-2xl font-semibold text-start">
                {caseStudy.title}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
