import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mesum Ali - Full Stack Developer | AI Developer | GIAIC Trainee",
  description:
    "I am a Full Stack Developer & Agentic AI Developer with over 1 year of experience. Passionate about creating dynamic websites & scalable AI-powered applications. GIAIC Trainee (2023–Present).",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "AI Developer",
    "Agentic AI Developer",
    "Python Developer",
    "Artificial Intelligence",
    "Web Development",
    "React Developer",
    "Node.js",
    "JavaScript",
    "UI/UX Design",
    "Machine Learning",
    "Next.js Developer",
    "GIAIC Trainee",
    "Tech Innovation",
  ],
  authors: [{ name: "Mesum Ali", url: "https://mesumdev.vercel.app" }],
  creator: "Mesum Ali",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://mesumdev.vercel.app/",
    title: "Mesum Ali - Full Stack Developer | AI Developer | GIAIC Trainee",
    description:
      "Passionate about building dynamic websites and AI-powered applications. Software Engineering student and Agentic AI Developer with hands-on experience.",
    images: [
      {
        url: "https://mesumdev.vercel.app/",
        width: 1200,
        height: 630,
        alt: "Mesum Ali Portfolio",
      },
    ],
    siteName: "Mesum Ali - Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@syedmesumjaffary",
    title: "Mesum Ali - Full Stack Developer | AI Developer | GIAIC Trainee",
    description:
      "Full Stack Developer & Agentic AI Developer with 1+ year experience, focused on web development and AI solutions.",
    images: ["https://mesumdev.vercel.app"],
  },
  icons: {
    icon: "public/Favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
