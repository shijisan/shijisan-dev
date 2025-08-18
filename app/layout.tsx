import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "devicon/devicon.min.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "shijisan | Christian James Santos",
  description:
    "Web Developer specializing in Node Js, Next JS, Typescript, React, Tailwind, and Postgres.",
  openGraph: {
    title: "shijisan | Christian James Santos",
    description:
      "Web Developer specializing in Node Js, Next JS, Typescript, React, Tailwind, and Postgres.",
    url: "https://shijisan-dev.vercel.app", 
    siteName: "shijisan.dev",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/115002067?v=4",
        width: 400,
        height: 400,
        alt: "shijisan avatar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "shijisan | Christian James Santos",
    description:
      "Web Developer specializing in Node Js, Next JS, Typescript, React, Tailwind, and Postgres.",
    images: ["https://avatars.githubusercontent.com/u/115002067?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
