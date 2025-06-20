"use client";

import Image from "next/image";
import Link from "next/link";
import Notes from "@/components/Notes";
import SwiperSection from "@/components/SwiperSection";
import ContactPage from "@/components/Contact";

export default function Landing() {
	return (
		<>
			<main>
				<header className="md:rounded-b-[5rem] rounded-b-4xl h-[80vh] bg-gradient-to-r from-foreground to-foreground/85 flex items-center justify-center">
					<div className="flex items-center justify-center w-full h-full flex-col md:max-w-[455px]">
						<div className="md:h-auto h-64">
							<div className="rounded-full w-fit p-2 bg-background text-center relative top-2/5 -right-3/5 -rotate-12">
								<h1 className="text-xs">Christian James Santos 👨‍💻</h1>
							</div>
							<Image className="rounded-full mb-8 border-4 border-background/10" width={200} height={200} src="/profile.avif" alt="" />
						</div>
						<h1 className="text-4xl text-background font-satoshi text-center font-medium">Building the future<br />one line at a time.</h1>

						<Link href="/" className="mt-8 rounded-full px-8 text-sm btn bg-blue-500">Let&apos;s Talk 🤝</Link>
					</div>
				</header>
				<section className="bg-gradient-to-r from-foreground to-foreground/85 border-no-ne">
					<div className="md:rounded-b-[5rem] rounded-b-4xl bg-background">

						<div className="items-center justify-evenly text-foreground/50 text-7xl grid md:grid-cols-5 grid-cols-3 justify-items-center py-16 max-w-7xl mx-auto gap-4">
							<i className="devicon-nextjs-original-wordmark h-24"></i>
							<i className="devicon-nodejs-plain-wordmark h-24"></i>
							<i className="devicon-typescript-plain text-4xl h-24"></i>
							<i className="devicon-javascript-plain text-4xl h-24"></i>
							<i className="devicon-react-original-wordmark text-5xl h-24"></i>
							<i className="devicon-postgresql-plain-wordmark text-5xl h-24"></i>
							<i className="devicon-prisma-original-wordmark h-24"></i>
							<i className="devicon-python-plain-wordmark text-5xl h-24"></i>
							<i className="devicon-fastapi-plain-wordmark h-24"></i>
							<i className="devicon-tensorflow-original-wordmark h-24"></i>

						</div>
					</div>
				</section>
				<section className="bg-gradient-to-r from-foreground to-foreground/85 min-h-[150vh] flex items-center justify-center flex-col py-[5vh]">

					<div className="md:max-w-7xl max-w-screen flex flex-col gap-8">
						<div className="flex lg:flex-row flex-col w-full items-center justify-between gap-8">
							<div className="md:max-w-xl max-w-screen h-[50vh] bg-background rounded-3xl md:w-full w-[99%]">
								<Notes />
							</div>
							<div className="text-foreground md:max-w-xl max-w-screen bg-background h-[50vh] rounded-3xl py-8 relative md:w-full w-[99%]">
								<div>
									<svg className="absolute size-24 -right-0.5 -bottom-0.5 z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 3 3">
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

						<div className="md:max-w-7xl text-foreground w-full bg-background rounded-3xl items-center p-8 justify-center space-y-4">
							<h2 className="text-3xl font-satoshi font-medium">Work Experience</h2>
							<ol className="grid md:grid-rows-2 grid-rows-3 w-full md:gap-16 gap-8 h-full grid-flow-col">
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
					<div className="md:rounded-t-[5rem] rounded-4xl bg-background w-full h-full flex items-center justify-center">
						<ContactPage />
					</div>
				</footer>

			</main>
		</>
	)
}