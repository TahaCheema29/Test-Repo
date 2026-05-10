import { JobLocation, JobTypeIcon, RoleIcon, TypeIcon } from "@/assets";
import Image from "next/image";

interface VacancySideBarProps {
    title: string
    type: string
    shareableLink: string;
    workMode: string
    location: string
}
export default function VacancySideBar({ title, type, shareableLink, workMode, location }: VacancySideBarProps) {
    const DATA_ARRAY = [
        {
            icon: RoleIcon,
            text: title
        },
        {
            icon: TypeIcon,
            text: type
        },
        {
            icon: JobTypeIcon,
            text: workMode.charAt(0).toUpperCase() + workMode.slice(1)
        }, {
            icon: JobLocation,
            text: location
        }
    ]
    return (
        <div className="flex flex-col gap-4 md:gap-6 2xl:gap-8 w-full items-start">
            <p className="text-footer-black text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">Vacancy details</p>
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 2xl:gap-5">
                {DATA_ARRAY.map((data, index) => (
                    <div className="flex items-center gap-2" key={index}>
                        <Image src={data.icon} alt="role-icon" className="w-4 xl:w-6" />
                        <p className="xl:text-lg">{data.text}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                <a
                    href={shareableLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer w-fit bg-footer-black hover:bg-green-gradient text-white  px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 font-medium mt-4 text-xl btn-3"
                    style={{ "--clr": "#16a34a" } as React.CSSProperties}
                >
                    <span>Apply Now</span>

                    <span className="button__icon-wrapper">
                        <svg
                            width="10"
                            className="button__icon-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 15"
                        >
                            <path
                                fill="currentColor"
                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            />
                        </svg>
                        <svg
                            width="10"
                            className="button__icon-svg button__icon-svg--copy"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 15"
                        >
                            <path
                                fill="currentColor"
                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    )
}