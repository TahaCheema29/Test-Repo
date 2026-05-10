"use client";
import { DotIcon, LocationPinIcon } from "@/assets";
import { roleType } from "@/types/JobTypes";
import Image from "next/image";

interface IJobRoleCard {
  index: number
  roleType: roleType
  postedAt: string
  role: string;
  type: string;
  city: string;
  salaryRange: string
  onViewClick: () => void
}


export default function JobRoleCard({ ...props }: IJobRoleCard) {

  return (
    <div className="p-8 lg:px-4 xl:px-8 bg-[#F3F3F3] flex flex-col gap-4 rounded-2xl h-fit">
      <div className="flex gap-4 items-center">
        <p
          className=" text-lg text-green-gradient "
        >
          {props.roleType === "OPEN_ROLE" ? "OPEN ROLE" : "CLOSED ROLE"}
        </p>
        <div className="flex items-center gap-2">
          <Image src={DotIcon} alt="dot-icon" width={6} />
          <p className="text-[#666666]">{props.postedAt}</p>
        </div>
      </div>
      <p className="text-xl font-medium text-pure-black md:whitespace-nowrap">
        {props.role}
      </p>
      <div className="grid grid-cols-2 ssm:grid-cols-5 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-3 xl:grid-cols-5  gap-2 items-center text-[#666666]">
        <p className="xl:col-span-2 2xl:col-span-1">Full Time</p>
        <div className="flex items-center gap-2 ssm:col-span-2 md:col-span-1 xlg:col-span-2 xl:col-span-3 3xl:col-span-2">
          <Image src={DotIcon} alt="dot-icon" width={6} />
          <p className="text-nowrap lg:text-wrap xl:text-nowrap">{props.salaryRange}</p>
        </div>
        <div className="flex items-center gap-2 ssm:col-span-2 md:col-span-1 xl:col-span-2">
          <Image src={LocationPinIcon} alt="location-pin-icon" width={15} />
          <p>{props.city}</p>
        </div>
      </div>

      <button className="text-green-gradient underline-span cursor-pointer w-fit flex text-lg hover:underline" onClick={props.onViewClick}>View & Apply</button>
    </div >
  );
}
