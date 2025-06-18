"use client";

import Image from "next/image";
import Link from "next/link";
import Notes from "@/components/Notes";
import SwiperSection from "@/components/SwiperSection";

export default function Landing() {
	return (
		<>
			<main>
				<header className="rounded-b-[5rem] md:h-[80vh] bg-gradient-to-r from-foreground to-foreground/85 flex items-center justify-center">
					<div className="flex items-center justify-center w-full h-full flex-col max-w-[455px]">
						<div>
							<div className="rounded-full w-fit p-2 bg-background text-center relative top-2/5 -right-3/5 -rotate-12">
								<h1 className="text-xs">Christian James Santos 🧑‍💻</h1>
							</div>
							<Image className="rounded-full mb-8 border-4 border-background/10" width={200} height={200} src="/profile.avif" alt="" />
						</div>
						<h1 className="text-4xl text-background font-satoshi text-center font-medium">Building the future<br />one line at a time.</h1>

						<Link href="/" className="mt-8 rounded-full px-8 text-sm btn bg-blue-500">Let&apos;s Talk 🤝</Link>
					</div>
				</header>
				<section className="bg-gradient-to-r from-foreground to-foreground/85">
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
				<section className="bg-gradient-to-r from-foreground to-foreground/85 min-h-[150vh] flex items-center justify-center flex-col py-[5vh]">

					<div className="max-w-7xl flex flex-col gap-8">
						<div className="flex w-full items-center justify-between gap-8">
							<div className="max-w-xl h-[50vh] bg-background rounded-3xl w-full">
								<Notes />
							</div>
							<div className="text-foreground max-w-xl bg-background h-[50vh] rounded-3xl py-8 relative">
								<div>
									<svg className="absolute size-24 -right-0.5 -bottom-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 3 3">
										<path className="relative" d="M 0 0 L 3 -3 L 3 -1 C 3 -1 3 0 2 0 L 0 0" fill="oklch(72.3% 0.219 149.579)" />
										<text className="-rotate-45 text-[0.30px] " x="1.40" y="0.50" fill="white" >
											Personal
										</text>
										<text className="text-[0.30px] -rotate-45" x="1.45" y="0.85" fill="white">
											Projects
										</text>
									</svg>
								</div>
								<SwiperSection />
							</div>
						</div>

						<div className="max-w-7xl text-foreground w-full bg-background rounded-3xl items-center p-8 justify-center space-y-4">
							<h2 className="text-3xl font-satoshi font-medium">Work Experience</h2>
							<ol className="grid md:grid-rows-2 w-full gap-8 h-full grid-flow-col">
								<li className="h-full flex justify-center flex-col">
									<h1 className="font-medium">The VA BAR</h1>
									<h3 className="text-xs text-blue-500">Web Development Instructor &amp; Freelancer</h3>
									<p className="text-sm">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
								</li>
								<li className="h-full flex justify-center flex-col">
									<h1 className="font-medium">VAMEPLEASE</h1>
									<h3 className="text-xs text-blue-500">System Automation Intern</h3>
									<p className="text-sm">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
								</li>
								<li className="h-full flex justify-center flex-col">
									<h1 className="font-medium">Hambi Media</h1>
									<h3 className="text-xs text-blue-500">Shopify Replo Developer</h3>
									<p className="text-sm">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
								</li>
							</ol>
						</div>
					</div>

				</section>

				<footer className="h-[50vh] bg-gradient-to-r from-foreground to-foreground/85 ">
					<div className="rounded-t-[5rem] bg-background w-full h-full flex items-center justify-center">
						<h1>Contact Section, finish this bruh</h1>
					</div>
				</footer>

			</main>
		</>
	)
}