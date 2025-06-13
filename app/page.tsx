"use client";

import Image from "next/image";
import Link from "next/link";
import Notes from "@/components/Notes";

export default function Landing() {
	return (
		<>
			<main>
				<header className="rounded-b-[5rem] md:h-[80vh] bg-gradient-to-r from-foreground to-foreground/85 flex items-center justify-center">
					<div className="flex items-center justify-center w-full h-full flex-col max-w-[455px]">
						<div>
							<div className="rounded-full w-fit p-2 bg-background text-center relative top-2/5 -right-4/5 -rotate-12">
								<h1 className="text-xs">Web Developer 🧑‍💻</h1>
							</div>
							<Image className="rounded-full mb-8 border-4 border-background/10" width={200} height={200} src="/profile.avif" alt="" />
						</div>
						<h1 className="text-4xl text-background font-satoshi text-center font-medium">Building the future<br />one line at a time.</h1>

						<Link href="/" className="mt-8 rounded-full px-8 text-sm btn bg-blue-500">Let's Talk 🤝</Link>
					</div>
				</header>
				<section className="bg-foreground">
					<div className="rounded-b-[5rem] bg-background">

						<div className="items-center justify-evenly text-foreground/50 text-7xl grid grid-cols-5 justify-items-center py-16 max-w-7xl mx-auto gap-4">
							<i className="devicon-nextjs-original-wordmark"></i>
							<i className="devicon-nodejs-plain-wordmark"></i>
							<i className="devicon-typescript-plain text-4xl"></i>
							<i className="devicon-javascript-plain text-4xl"></i>
							<i className="devicon-react-original-wordmark text-5xl"></i>
							<i className="devicon-postgresql-plain-wordmark text-5xl"></i>
							<i className="devicon-prisma-original-wordmark"></i>
							<i className="devicon-python-plain-wordmark text-5xl"></i>
							<i className="devicon-fastapi-plain-wordmark"></i>
							<i className="devicon-tensorflow-original-wordmark"></i>

						</div>
					</div>
				</section>
				<section className="bg-foreground h-screen flex items-center justify-center">
					<div className="max-w-7xl h-[75vh] bg-background rounded-3xl w-full">
						<Notes />
					</div>
				</section>
			</main>
		</>
	)
}