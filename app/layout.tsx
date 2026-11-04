import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sharon Aman | DevOps Engineer",
  description:
    "Portfolio of Sharon Aman — DevOps Engineer working across Azure, AWS, CI/CD, Terraform, Docker and Kubernetes.",
  openGraph: {
    title: "Sharon Aman | DevOps Engineer",
    description: "Cloud infrastructure · Automation · Continuous delivery",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
