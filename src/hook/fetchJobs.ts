import axios from "axios";
import { Job } from "@/types/JobTypes";

export async function fetchJobs() {
  const MAX_RETRIES = 3;
  const TIMEOUT_MS = 5000;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await axios.get(process.env.CHEESY_HIRE_API_URL || "", {
        headers: {
          Authorization: `Bearer ${process.env.CHEESY_HIRE_API_KEY}`,
        },
        timeout: TIMEOUT_MS,
      });
      const jobs: Job[] = response.data.data.records;
      return jobs;
    } catch (error) {
      if (attempt === MAX_RETRIES) {
        console.error("Error fetching jobs:", error);
        return "Something when wrong. Please check back later" as string;;
      }
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
  return "Something went wrong. Please try again later";
}
