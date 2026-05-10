import { CareerPageImage7, TickIcon } from "@/assets"
import Image from "next/image"

const WORK_WITH_US = [
    "We offer internal mobility opportunities",
    "We provide an inclusive environment where everyone can thrive",
    "You will discover a wide verity of industries and experiences",
    "Our strong collaborative teams place teamwork and sharing at the heart of their daily activities",
    "We integrate CSR guidelines into our projects to have a positive impact on society and the  environment"
]

export default function WorkWIthUs() {
    return (
        <section className="relative space-y-6 overflow-hidden mb-16 md:mb-20 lg:mb-24 xl:mb-28 bg-[#F7F7F7] min-h-[30vh] py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-26 xl:gap-30 3xl:gap-40 w-11/12 xl:w-9/12 mx-auto " >
                <div className=" flex justify-center items-center 3xl:items-end 5xl:items-center  overflow-hidden  ">
                    <Image
                        src={CareerPageImage7}
                        alt="career-page-img7"
                        className=" rounded-2xl w-[380px] h-[350px] sm:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] object-cover"
                    />
                </div>
                <div className="flex flex-col gap-12 justify-center">
                    <p className="text-green-gradient font-semibold text-2xl md:text-3xl lg:text-4xl 2xl:text-[40px]">Why work with us?</p>
                    <div className="flex flex-col gap-7">
                        {WORK_WITH_US.map((data, index) => (
                            <div className="flex gap-4" key={index}>
                                <Image src={TickIcon} width={24} alt={"tick-icon"} />
                                <p className="text-xl">{data}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}