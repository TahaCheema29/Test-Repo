export enum JobType {
  FULL_TIME = "FULL_TIME",
  PART_TIME = "PART_TIME",
  CONTRACT = "CONTRACT",
  INTERNSHIP = "INTERNSHIP",
}

interface CompanyInfo {
  name: string;
}

export interface Job {
  title: string;
  description: string;
  applicationLink: string;
  salary: { from: number, to: number, currency: string };
  createdAt: Date
  type: string;
  workMode: string
  status: string
  company: CompanyInfo;
  location: string
}

export type roleType = "OPEN_ROLE" | "CLOSED_ROLE"
