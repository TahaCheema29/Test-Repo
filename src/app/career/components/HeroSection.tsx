import { CareerPageImage1, CareerPageImage2, CareerPageImage3, CareerPageImage4, CareerPageImage5, CareerPageImage6 } from "@/assets"
import Image from "next/image"

export default function HeroSection() {
    return (
        <section className="relative space-y-6 overflow-hidden bg-white mb-16 md:mb-10  text-black min-h-[30vh] mt-28 md:mt-30 lg:mt-40 xl:mt-48  w-11/12 xl:w-10/12  mx-auto flex flex-col gap-16 lg:gap-28  ">
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-26 xl:gap-30 3xl:gap-40 w-full">
                <div className="flex-1/3 flex flex-col items-center lg:items-start gap-3 lg:gap-5 w-full">
                    <h2 className="max-w-md text-3xl md:text-4xl lg:text-6xl xl:text-[68px] 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient leading-tight">
                        Careers at Verdant Soft
                    </h2>
                    <p className="text-md md:text-lg lg:text-xl xl:text-2xl max-w-md text-center lg:text-start">
                        Join a team where passion meets purpose. Discover a career where your contributions are valued and where you can truly make a difference.
                    </p>
                </div>
                <div className="flex-2/3">
                    <div className="w-full h-full min-h-[250px]  md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] flex flex-col items-center lg:items-end gap-6  ">
                        <div className="hidden lg:flex w-[704px] h-[100px] opacity-100 rounded-[16px] overflow-hidden bg-revert-green-gradient" />
                        <div className="flex gap-6 items-center">
                            <Image
                                src={CareerPageImage1}
                                alt="career-page-img1"
                                className="w-[160px] h-[90px] ssm:w-[250px] sm:w-[335px] sm:h-[100px] object-cover rounded-2xl"
                            />
                            <Image
                                src={CareerPageImage2}
                                alt="career-page-img1"
                                className="w-[160px] h-[90px] ssm:w-[250px] sm:w-[335px] sm:h-[100px] object-cover rounded-2xl"
                            />
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="hidden lg:flex w-[246px] h-[100px] opacity-100 rounded-[16px] overflow-hidden bg-revert-green-gradient" />
                            <Image
                                src={CareerPageImage3}
                                alt="career-page-img3"
                                className="w-[160px] h-[90px] ssm:w-[250px] sm:w-[335px] lg:w-[205px] sm:h-[100px] object-cover rounded-2xl"
                            />
                            <Image
                                src={CareerPageImage4}
                                alt="career-page-img4"
                                className="w-[160px] h-[90px] ssm:w-[250px]  sm:w-[335px] lg:w-[205px] sm:h-[100px] object-cover rounded-2xl"
                            />
                            <div className="hidden lg:flex w-[123px] h-[100px] opacity-100 rounded-[16px] overflow-hidden bg-revert-green-gradient" />
                        </div>
                        <div className="flex gap-6 items-center">
                            <Image
                                src={CareerPageImage5}
                                alt="career-page-img5"
                                className="w-[160px] h-[90px] ssm:w-[250px] sm:w-[335px] sm:h-[100px] object-cover rounded-2xl"
                            />
                            <Image
                                src={CareerPageImage6}
                                alt="career-page-img6"
                                className="w-[160px] h-[90px] ssm:w-[250px] sm:w-[335px] sm:h-[100px] object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}