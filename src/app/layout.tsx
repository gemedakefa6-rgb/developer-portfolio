
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Full-Stack Web Developer | Gemeda Kefa",
  description:
    "Explore the portfolio of a full-stack web developer with four years of experience in responsive web applications, frontend development, backend APIs, and database integration.",
  applicationName: "Developer Portfolio",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Full-Stack Web Developer | Gemeda Kefa",
    description:
      "Building responsive, user-focused web applications and reliable digital solutions.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080a10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
