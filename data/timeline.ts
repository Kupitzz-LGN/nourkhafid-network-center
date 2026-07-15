export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  status: "completed" | "learning" | "current";
}

export const timeline: TimelineItem[] = [
  {
    id: 1,
    year: "2026",
    title: "Internship",
    company: "Desnet",
    description:
      "Started internship focusing on ISP infrastructure, Linux servers and MikroTik.",
    status: "current",
  },
  {
    id: 2,
    year: "2026",
    title: "Linux",
    company: "CachyOS, Debian, Ubuntu, kali Linux, Arch",
    description:
      "Daily operating system for networking, development and automation.",
    status: "current",
  },
  {
    id: 3,
    year: "2026",
    title: "AWS Cloud",
    company: "Amazon Web Services",
    description:
      "Learning EC2, VPC, Route53 and cloud networking, S3 Bucket.",
    status: "learning",
  },
  {
    id: 4,
    year: "2026",
    title: "Portfolio",
    company: "NourKhafid Network Center",
    description:
      "Building a modern networking portfolio with Next.js.",
    status: "completed",
  },
];