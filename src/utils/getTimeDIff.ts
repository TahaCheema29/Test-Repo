export function getTimeAgo(date: Date | string): string {
  const now = new Date();
  const createdDate = new Date(date);
  const diffMs = now.getTime() - createdDate.getTime();

  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) {
    return `${seconds} sec ago`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} min ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hrs ago`;
  }

  const days = Math.floor(hours / 24);
  return `${days} days ago`;
}
