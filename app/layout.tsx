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
	description: "Web Developer, Node JS, Next JS, Typescript, Tailwind CSS, etc... | shijisan | shijisan-dev",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="google-site-verification" content="FMMTfhdKmZr7yBKlspeXnGJL0jvyh5_FB4BiNcANN3Y" />
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
