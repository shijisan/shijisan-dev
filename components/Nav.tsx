"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <nav className="flex items-center absolute top-0 left-0 w-full h-[8vh] z-50 px-[10vw]">
      <div className="w-1/2">
        <div className="rounded-full px-4 py-2 bg-background w-fit">
          <p className="text-foreground text-xs">
            <span className="inline-block size-2 rounded-full bg-green-500 animate-pulse"></span> Open to work
          </p>
        </div>
      </div>
      <ul className="w-1/2 text-background flex items-center gap-3 text-xs justify-end">
        <li><Link href="https://github.com/shijisan">Github</Link></li>
        |
        <li><Link href="https://www.linkedin.com/in/shijisan/">LinkedIn</Link></li>
        |
        <li><Link href="https://www.facebook.com/christian.james.santos.2024/">Facebook</Link></li>
      </ul>
    </nav>
  );
}
