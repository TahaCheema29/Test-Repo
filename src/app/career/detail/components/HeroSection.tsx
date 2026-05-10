import {
    CareerDetailImage1, CareerDetailImage2, CareerDetailImage3, CareerDetailImage4,
    CareerDetailImage5, CareerDetailImage6, CareerDetailImage7, CareerDetailImage8,
    CareerDetailImage9, CareerDetailImage10, CareerDetailImage11, CareerDetailImage12,
    CareerDetailImage13, CareerDetailImage14, CareerDetailImage15, CareerDetailImage16,
    CareerDetailImage17, CareerDetailImage18
} from "@/assets";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative space-y-6 overflow-hidden bg-white md:mb-4  text-black min-h-[30vh] mt-28 md:mt-32 w-11/12 xl:w-10/12 mx-auto flex flex-col gap-16 lg:gap-28">
            <div className="flex flex-col justify-between  ssm:gap-12 md:gap-16 lg:gap-20 w-full">
                <div className="flex flex-col items-center gap-3 lg:gap-5 w-full">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[68px] 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold break-words text-green-gradient leading-tight">
                        Careers at Verdant Soft
                    </h1>
                    <p className="text-md md:text-lg lg:text-xl xl:text-2xl max-w-3xl text-center">
                        Join a team where passion meets purpose. Discover a career where your contributions are valued and where you can truly make a difference.
                    </p>
                </div>

                <div className="flex-2/3 h-full min-h-[250px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] flex flex-col sm:flex-row justify-center items-center gap-6">
                    <div className="flex flex-col gap-2 md:gap-4 2xl:gap-6">
                        {/* First row */}
                        <div className=" flex items-center gap-2 md:gap-4 2xl:gap-6">
                            {[CareerDetailImage1, CareerDetailImage2].map((image, index) => (
                                <Image
                                    src={image}
                                    key={`row1-${index}`}
                                    alt="career-detail"
                                    className="lg:w-[280px] lg:h-[100px] 2xl:w-[340px] object-cover rounded-2xl opacity-50 grayscale transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0"
                                />
                            ))}
                        </div>

                        {/* Second row - pairs */}
                        <div className="  hidden ssm:flex items-center gap-2 md:gap-4 2xl:gap-6">
                            {[[CareerDetailImage3, CareerDetailImage4], [CareerDetailImage5, CareerDetailImage6]].map(
                                (imagePair, outerIndex) => (
                                    <div key={`row2-${outerIndex}`} className="flex items-center gap-2 md:gap-4 2xl:gap-6">
                                        {imagePair.map((image, innerIndex) => (
                                            <Image
                                                src={image}
                                                key={`row2-${outerIndex}-${innerIndex}`}
                                                alt="career-detail"
                                                className={`object-cover rounded-2xl opacity-50 grayscale transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 ${innerIndex === 0 ? "w-[140px] sm:w-[70px] md:w-[100px] 2xl:w-[129px] h-[75px] sm:h-[66px] lg:h-[100px]" : "w-[190px] sm:w-[110px] md:w-[164px] 2xl:w-[188px] h-[75px] sm:h-[66px] lg:h-[100px]"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                )
                            )}
                        </div>

                        {/* Third row */}
                        <div className="hidden lg:flex items-center gap-2 md:gap-4 2xl:gap-6 ">
                            {[CareerDetailImage8, CareerDetailImage9].map((image, index) => (
                                <Image
                                    src={image}
                                    key={`row3-${index}`}
                                    alt="career-detail"
                                    className="lg:w-[280px] lg:h-[100px] 2xl:w-[340px] object-cover rounded-2xl opacity-50 grayscale transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0"
                                />
                            ))}
                        </div>

                        {/* Single image */}
                        <Image
                            src={CareerDetailImage12}
                            alt="career-detail"
                            className="hidden sm:flex lg:w-[576px] lg:h-[200px] 2xl:w-[705px] 2xl:h-[220px] object-cover rounded-2xl opacity-50 grayscale transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0"
                        />
                    </div>

                    <div className="flex flex-col gap-2 md:gap-4 2xl:gap-6">
                        {/* Single image */}
                        <Image
                            src={CareerDetailImage7}
                            alt="career-detail"
                            className="hidden sm:flex lg:w-[576px] lg:h-[200px] 2xl:w-[705px] 2xl:h-[220px] object-cover rounded-2xl opacity-50 grayscale transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0"
                        />

                        {/* Pairs row */}
                        {[[CareerDetailImage10, CareerDetailImage11]].map((imagePair, outerIndex) => (
                            <div key={`row4-${outerIndex}`} className="hidden lg:flex items-center gap-2 md:gap-4 2xl:gap-6">
                                {imagePair.map((image, innerIndex) => (
                                    <Image
                                        src={image}
                                        key={`row4-${outerIndex}-${innerIndex}`}
                                        alt="career-detail"
                                        className="lg:w-[280px] lg:h-[100px] 2xl:w-[340px] object-cover rounded-2xl opacity-50 grayscale transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0"
                                    />
                                ))}
                            </div>
                        ))}

                        {/* Double pairs row */}
                        <div className="hidden ssm:flex items-center justify-between gap-2 md:gap-4 2xl:gap-6">
                            {[[CareerDetailImage13, CareerDetailImage14], [CareerDetailImage15, CareerDetailImage16]].map(
                                (imagePair, outerIndex) => (
                                    <div key={`row5-${outerIndex}`} className="flex items-center gap-2 md:gap-4 2xl:gap-6">
                                        {imagePair.map((image, innerIndex) => (
                                            <Image
                                                src={image}
                                                key={`row5-${outerIndex}-${innerIndex}`}
                                                alt="career-detail"
                                                className={`object-cover rounded-2xl opacity-50 grayscale transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 ${innerIndex === 0 ? "w-[140px] sm:w-[70px] md:w-[100px] 2xl:w-[129px] h-[75px] sm:h-[66px] lg:h-[100px]" : "w-[190px] sm:w-[110px] md:w-[164px] 2xl:w-[188px] h-[75px] sm:h-[66px] lg:h-[100px]"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                )
                            )}
                        </div>

                        {/* Last row */}
                        <div className="flex items-center gap-2 md:gap-4 2xl:gap-6">
                            {[CareerDetailImage17, CareerDetailImage18].map((image, index) => (
                                <Image
                                    src={image}
                                    key={`row6-${index}`}
                                    alt="career-detail"
                                    className="lg:w-[280px] lg:h-[100px] 2xl:w-[340px] object-cover rounded-2xl opacity-50 grayscale transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
