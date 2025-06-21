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
	title: "Christian James Santos",
	description: "Web Developer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>

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
