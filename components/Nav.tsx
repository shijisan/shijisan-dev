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
    <nav className="flex items-center absolute top-0 left-0 w-full h-[8vh] z-50 md:px-[10vw] px-4 max-w-screen">

      <div className="md:hidden max-w-screen w-full flex justify-center">
        <div className="rounded-full px-4 py-2 bg-background w-fit flex gap-4">
          <p className="text-black text-xs font-medium">
            <span className="inline-block size-2 rounded-full bg-green-500 animate-pulse me-1"></span> {dashboardData?.status || "Loading..."}
          </p>
          <p className="text-black text-xs font-medium">
            <span className="inline text-green-500 animate-pulse me-1">Working at</span>{dashboardData?.work || "Loading..."}
          </p>
        </div>
      </div>

      <div className="md:w-1/2 w-full md:flex hidden gap-4">
        <div className="inline-flex justify-center text-center my-auto md:me-8">
          <p className="font-satoshi text-white">Christian James Santos</p>
        </div>
        <div className="rounded-full px-4 py-2 bg-background size-fit my-auto">
          <p className="text-foreground text-xs font-medium">
            <span className="inline-block size-2 rounded-full bg-green-500 animate-pulse me-1"></span> {dashboardData?.status || "Loading..."}
          </p>
        </div>
        <div className="rounded-full px-4 py-2 bg-background size-fit my-auto">
          <p className="text-foreground text-xs font-medium">
            <span className="inline text-green-500 animate-pulse me-1">Working at</span>{dashboardData?.work || "Loading..."}
          </p>
        </div>
      </div>

      <ul className="w-1/2 md:flex text-background hidden items-center gap-3 text-xs justify-end">
        <li><Link className="hover:underline" href="https://github.com/shijisan">Github</Link></li>
        /
        <li><Link className="hover:underline" href="https://www.linkedin.com/in/shijisan/">LinkedIn</Link></li>
        /
        <li><Link className="hover:underline" href="https://www.facebook.com/christian.james.santos.2024/">Facebook</Link></li>
      </ul>
    </nav>
  );
}
