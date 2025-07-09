"use client";

import Image from "next/image";
import Notes from "@/components/Notes";
import SwiperSection from "@/components/SwiperSection";
import Footer from "@/components/Footer";

export default function Landing() {
	return (
		<>
			<main>



				<header className="md:rounded-b-[5rem] rounded-b-4xl h-[80vh] bg-gradient-to-r from-foreground to-foreground/85 flex items-center justify-center">
					<div className="flex items-center justify-center w-full h-full flex-col md:max-w-[455px]">
						<div className="md:h-auto h-64">
							<div className="rounded-full w-fit p-2 bg-background text-center relative top-2/5 -right-3/5 -rotate-12">
								<h1 className="text-xs">Self-taught Web Dev 👨‍💻</h1>
							</div>
							<Image className="rounded-full mb-8 border-4 border-background/10" width={200} height={200} src="/profile.avif" alt="" />
						</div>
						<h1 className="text-4xl text-background font-satoshi text-center font-medium">Building the future<br />one line at a time.</h1>

						<button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="mt-8 py-3	 rounded-full px-8 text-sm btn bg-background text-foreground border-2 border-foreground">Let&apos;s Talk 🤝</button>
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



				<section className="bg-gradient-to-r from-foreground to-foreground/85 min-h-[150vh] flex items-center justify-center flex-col md:py-8 py-16">

					<div className="md:max-w-7xl max-w-screen flex flex-col md:gap-8 gap-16">
						<div className="flex lg:flex-row flex-col w-full items-center justify-between md:gap-8 gap-16">
							<div className="max-w-screen h-[50vh] bg-background rounded-3xl md:w-full w-[99%]">
								<Notes />
							</div>
							<div className="text-foreground md:max-w-xl max-w-screen bg-background md:h-[50vh] h-[60vh] rounded-3xl flex justify-center items-center relative md:w-full w-[99%]">
								<div>
									<svg className="absolute size-24 md:-right-1 -right-0.5 md:-bottom-1 -bottom-0.5 z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 3 3">
										<path className="relative" d="M 0 0 L 3 -3 L 3 -1 C 3 -1 3 0 2 0 L 0 0" fill="#212842" />
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

						<div className="md:max-w-7xl text-foreground w-full bg-background rounded-3xl items-center p-8 justify-center space-y-6">
							<h2 className="text-3xl font-satoshi font-medium">Work Experience</h2>
							<ol className="grid md:grid-rows-2 grid-rows-3 w-full gap-8 h-full grid-flow-col text-black">
								<li className="h-full flex justify-center flex-col border-s-4 border-foreground/50 ps-3 py-2">
									<h1 className="font-semibold text-green-500">The VA BAR</h1>
									<h3 className="text-xs text-neutral-500">Web Development Instructor &amp; Freelancer</h3>
									<p className="text-sm mt-1 text-neutral-800">&rsaquo; I have taught two batches of students at The VA BAR, focusing on Front-End Web Development for beginners. As well have done freelance sites for them.</p>
								</li>
								<li className="h-full flex justify-center flex-col border-s-4 border-foreground/50 ps-3 py-2">
									<h1 className="font-semibold text-green-500">VAMEPLEASE</h1>
									<h3 className="text-xs text-neutral-500">System Automation Intern</h3>
									<p className="text-sm mt-1 text-neutral-800">&rsaquo; As an intern, I exposed to building a software-as-a-service modelled project which was an business management hub.</p>
								</li>
								<li className="h-full flex justify-center flex-col border-s-4 border-foreground/50 ps-3 py-2">
									<h1 className="font-semibold text-green-500">Hambi Media</h1>
									<h3 className="text-xs text-neutral-500">Landing Page Developer</h3>
									<p className="text-sm mt-1 text-neutral-800">&rsaquo; I was assigned to build Shopify landing pages by following a design and utilizing Replo to create them.</p>
								</li>
							</ol>
						</div>
					</div>

				</section>



				<footer className="bg-gradient-to-r from-foreground to-foreground/85 ">
					<div className="md:rounded-t-[5rem] rounded-t-4xl bg-background w-full h-full justify-center flex pt-16">
						<Footer />
					</div>
				</footer>

			</main>
		</>
	)
}