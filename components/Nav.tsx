"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DashboardData } from "@/types/dashboardData";

export default function Nav() {
  const pathname = usePathname();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);


  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await fetch("/api/dashboard");
        const data = await res.json();
        setDashboardData(data);
        console.log(data);
      }
      catch (err) {
        console.error("Failed to fetch dashboard data", err);
      }
    }

    fetchDashboardData();
  }, []);


  if (pathname !== "/") return null;

  return (
    <nav className="flex items-center absolute top-0 left-0 w-full h-[8vh] z-50 px-[10vw]">
      <div className="w-1/2 flex gap-4">
        <div className="rounded-full px-4 py-2 bg-background w-fit">
          <p className="text-foreground text-xs font-medium">
            <span className="inline-block size-2 rounded-full bg-green-500 animate-pulse"></span> {dashboardData?.status}
          </p>
        </div>
        <div className="rounded-full px-4 py-2 bg-background w-fit">
          <p className="text-foreground text-xs font-medium">
            <span className="inline text-green-500 animate-pulse me-1">Working at</span>{dashboardData?.work}
          </p>
        </div>
      </div>
      <ul className="w-1/2 text-background flex items-center gap-3 text-xs justify-end">
        <li><Link className="hover:underline" href="https://github.com/shijisan">Github</Link></li>
        |
        <li><Link className="hover:underline" href="https://www.linkedin.com/in/shijisan/">LinkedIn</Link></li>
        |
        <li><Link className="hover:underline" href="https://www.facebook.com/christian.james.santos.2024/">Facebook</Link></li>
      </ul>
    </nav>
  );
}
