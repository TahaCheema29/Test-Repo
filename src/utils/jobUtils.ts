
export function getJobTypeLabel(type: string): string {
  switch (type.toLowerCase()) {
    case "full-time":
      return "Full Time";
    case "part-time":
      return "Part Time";
    case "contract":
      return "Contract";
    case "internship":
      return "Internship";
    default:
      return type;
  }
}
