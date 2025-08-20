"use client"
import { FaCode } from "react-icons/fa6"
import type { Routes } from "@/app/page"
import { useRouter } from "next/navigation"

export interface NavProps {
  currSect: Routes
  onChangeSect: (newSect: Routes) => void
}

const sections: Routes[] = ["About", "Techs", "Showcase", "Experience", "Projects", "Contact"]

export default function Nav({ currSect }: NavProps) {

  const router = useRouter();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 mt-4">
      <div className="flex items-center justify-between max-w-7xl w-full mx-auto lg:px-0 md:px-[10vw] px-4">
        <div>
          <h1 className="font-montserrat font-medium tracking-wider">
            <FaCode className="inline rotate-90 text-primary" /> shijisan
          </h1>
        </div>

        <div className="flex gap-3 items-center bg-primary rounded-full px-2 py-1 md:text-sm text-xs font-medium">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => router.push(`/#${section}`)}
              className={`p-2 ${
                currSect === section ? "bg-neutral-50 text-neutral-950 rounded-full" : "md:block hidden"
              }`}
              type="button"
            >
              {section === "Techs" ? "Technologies" : section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
