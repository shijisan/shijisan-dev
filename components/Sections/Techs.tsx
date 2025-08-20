"use client";

import { useState } from "react";
import ReploLogo from "../ReploLogo";
import { ReactElement } from "react";
import { motion } from "motion/react";

type Tech = {
  name: string;
  icon: string;
  jsx?: ReactElement;
};


const languages: Tech[] = [
  { name: "HTML5", icon: "devicon-html5-plain" },
  { name: "CSS3", icon: "devicon-css3-plain" },
  { name: "Javascript", icon: "devicon-javascript-plain" },
  { name: "Typescript", icon: "devicon-typescript-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-original" },
  { name: "Python", icon: "devicon-python-plain" },
  { name: "PHP", icon: "devicon-php-plain" },
  { name: "Node JS", icon: "devicon-nodejs-plain" },
];

const frameworks: Tech[] = [
  { name: "Next JS", icon: "devicon-nextjs-plain" },
  { name: "React / Native", icon: "devicon-react-original" },
  { name: "Laravel", icon: "devicon-laravel-original" },
];

const databases: Tech[] = [
  { name: "Postgres", icon: "devicon-postgresql-plain" },
  { name: "MySQL", icon: "devicon-mysql-original" },
  { name: "MariaDB", icon: "devicon-mariadb-original" },
  { name: "Firebase", icon: "devicon-firebase-plain" },
  { name: "Supabase", icon: "devicon-supabase-plain" },
];

const others: Tech[] = [
  { name: "Arch Linux", icon: "devicon-archlinux-plain" },
  { name: "ESlint", icon: "devicon-eslint-plain" },
  { name: "FastAPI", icon: "devicon-fastapi-plain" },
  { name: "Axios", icon: "devicon-axios-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "Github", icon: "devicon-github-original" },
  { name: "Vercel", icon: "devicon-vercel-original" },
  { name: "Linux", icon: "devicon-linux-plain" },
  { name: "Prisma", icon: "devicon-prisma-original" },
  { name: "OAuth", icon: "devicon-oauth-plain" },
  { name: "Replo", icon: "custom", jsx: <ReploLogo /> },
];

export default function Techs() {
  const [query, setQuery] = useState("");

  const filterList = (list: Tech[]) =>
    list.filter((tech) =>
      tech.name.toLowerCase().includes(query.toLowerCase())
    );

  const filteredLanguages = filterList(languages);
  const filteredFrameworks = filterList(frameworks);
  const filteredDatabases = filterList(databases);
  const filteredOthers = filterList(others);

  return (
    <section id="Techs" className="min-h-screen techs md:scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      >
        <div className="mx-auto max-w-7xl md:px-0 px-4">
          <div className="flex items-center w-full justify-between mb-8">
            <h1 className="md:text-xl font-semibold font-poppins">Technologies 🧑‍💻</h1>
            <input
              onChange={(e) => setQuery(e.target.value)}
              className="py-2 px-6 min-w-xs rounded-full bg-neutral-800 focus-visible:outline-0 md:block hidden"
              type="text"
              placeholder="Find a tech..."
            />
          </div>

          <ul className="flex flex-col gap-6">
            <div className="grid md:grid-cols-3 size-full gap-6">
              <div className="text-center border-2 border-primary rounded-xl p-6 size-full md:aspect-square bg-primary/5">
                <h2>Languages and Environments</h2>
                <br />
                <li className="rounded-lg grid md:grid-cols-3 grid-cols-2 gap-6">
                  {filteredLanguages.map((tech) => (
                    <span key={tech.name}>
                      <i className={tech.icon}></i>
                      <p>{tech.name}</p>
                    </span>
                  ))}
                </li>
              </div>

              <div className="border-2 border-primary text-center rounded-xl p-6 size-full md:aspect-square bg-primary/5 gap-6">
                <h2>Frameworks</h2>
                <br />
                <li className="rounded-lg grid md:grid-cols-3 grid-cols-2 gap-6">
                  {filteredFrameworks.map((tech) => (
                    <span key={tech.name}>
                      <i className={tech.icon}></i>
                      <p>{tech.name}</p>
                    </span>
                  ))}
                </li>
              </div>

              <div className="border-2 border-primary text-center rounded-xl p-6 size-full md:aspect-square bg-primary/5 gap-6">
                <h2>Databases</h2>
                <br />
                <li className="rounded-lg grid md:grid-cols-3 grid-cols-2 gap-6">
                  {filteredDatabases.map((tech) => (
                    <span key={tech.name}>
                      <i className={tech.icon}></i>
                      <p>{tech.name}</p>
                    </span>
                  ))}
                </li>
              </div>
            </div>

            <div className="border-2 border-primary text-center rounded-xl p-6 size-full bg-primary/5 gap-6">
              <h2>Others</h2>
              <br />
              <li className="rounded-lg grid md:grid-cols-11 grid-cols-2 gap-6">
                {filteredOthers.map((tech) => (
                  <span key={tech.name} className="md:aspect-square">
                    {tech.icon === "custom" ? (
                      <span className="text-white text-5xl flex items-center justify-center">
                        {tech.jsx}
                      </span>
                    ) : (
                      <i className={tech.icon}></i>
                    )}
                    <p>{tech.name}</p>
                  </span>
                ))}
              </li>
            </div>
          </ul>

          <p className="text-center mt-8 text-gray-400">
            ...and more tools being learned along the way! 🚀
          </p>
        </div>
      </motion.div>
    </section>
  );
}
