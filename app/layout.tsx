import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

import Nav from "@/components/Nav";

const inter = Inter({
	weight: "variable",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Christian James Santos Portfolio",
	description: "Shijisan — Web Developer | Expert in Next.js, React, Tailwind CSS, and PostgreSQL. Self-taught and focused on building scalable full-stack apps with AI + security in mind.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="google-site-verification" content="5zkBbI09upRRtyvb-cP320Bdj5O56BwjfmiUWLmX0nE" />
				<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

			</head>
			<body
				className={`${inter.className} antialiased`}
			>
				<Nav />
				<ToastContainer />
				{children}
			</body>
		</html>
	);
}
