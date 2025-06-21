"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { FaArrowUp, FaEnvelope, FaHandshakeSimple } from "react-icons/fa6";
import { toast } from "react-toastify";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardData } from "@/types/dashboardData";



export default function Footer() {
   const [formData, setFormData] = useState({
      senderEmail: "",
      senderSubject: "",
      senderMessage: "",
   });

   const [loading, setLoading] = useState(false);
   const [isExpanded, setIsExpanded] = useState(false);

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


   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
   };

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);

      try {
         const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
         });

         const data = await response.json();
         if (!response.ok) throw new Error(data.error);

         toast.success("Email sent successfully!");
         setFormData({
            senderEmail: "",
            senderSubject: "",
            senderMessage: "",
         });
      } catch (err) {
         console.error(err);
         toast.error("Failed to send email. Please try again.");
      } finally {
         setLoading(false);
         setIsExpanded(false);
      }
   };

   return (
      <div className="w-full">
         <div className="flex flex-col items-center md:space-y-10 space-y-8">
            <div className="flex flex-col space-y-4 items-center">
               <FaHandshakeSimple className="size-20 rounded-full bg-gradient-to-b from-foreground/50 via-foreground/5 to-foreground/5 p-4" />
               <h1 className="md:text-4xl text-3xl font-satoshi font-medium">Tell me about your offer</h1>
            </div>
            <div className="flex md:gap-8 gap-4">
               <button className="btn bg-foreground rounded-full px-8 text-sm inline-flex items-center" onClick={() => setIsExpanded(!isExpanded)}><FaEnvelope className="me-1.5" /> Email Me</button>
               <button className="btn bg-white border-2 border-foreground text-foreground rounded-full px-8 text-sm inline-flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><FaArrowUp className="me-1.5" /> Back to top</button>
            </div>
         </div>

         <hr className="mx-[10vw] md:mt-20 mt-12" />

         <div className="px-[10vw] flex justify-between items-center h-[8vh]">

            <div className="md:hidden max-w-screen w-full flex justify-center">
               <div className="rounded-full px-4 py-2 bg-background w-fit flex gap-4">
                  <p className="text-foreground text-xs font-medium">
                     <span className="inline-block size-2 rounded-full bg-green-500 animate-pulse me-1"></span> {dashboardData?.status || "Loading..."}
                  </p>
                  <p className="text-foreground text-xs font-medium">
                     <span className="inline text-green-500 animate-pulse me-1">Working at</span>{dashboardData?.work || "Loading..."}
                  </p>
               </div>
            </div>

            <div className="md:w-1/2 w-full md:flex hidden gap-4">
               <div className="py-2 px-4 inline-flex justify-center text-center">
                  <p className="text-xs text-foreground">Web Developer</p>
               </div>
               <div className="rounded-full px-4 py-2 bg-foreground w-fit">
                  <p className="text-white text-xs font-medium">
                     <span className="inline-block size-2 rounded-full bg-green-500 animate-pulse me-1"></span> {dashboardData?.status || "Loading..."}
                  </p>
               </div>
               <div className="rounded-full px-4 py-2 bg-foreground w-fit">
                  <p className="text-white text-xs font-medium">
                     <span className="inline text-green-500 animate-pulse me-1">Working at</span>{dashboardData?.work || "Loading..."}
                  </p>
               </div>
            </div>

            <ul className="w-1/2 md:flex text-foreground hidden items-center gap-3 text-xs justify-end">
               <li><Link className="hover:underline" href="https://github.com/shijisan">Github</Link></li>
               /
               <li><Link className="hover:underline" href="https://www.linkedin.com/in/shijisan/">LinkedIn</Link></li>
               /
               <li><Link className="hover:underline" href="https://www.facebook.com/christian.james.santos.2024/">Facebook</Link></li>
            </ul>
         </div>


         {isExpanded &&
            <div className="h-screen w-full fixed bg-black/75 top-0 left-0 flex items-center justify-center z-30">
               <button className="text-white fixed top-8 right-8 btn bg-white/0 hover:bg-white/25 shadow-none" onClick={() => setIsExpanded(false)}>Close</button>
               <form className="flex flex-col space-y-4 px-4 w-full max-w-xl" onSubmit={handleSubmit}>

                  <div className="flex flex-row gap-4">
                     <div className="flex flex-col">
                        <input
                           type="email"
                           id="senderEmail"
                           value={formData.senderEmail}
                           onChange={handleChange}
                           placeholder="Your Email"
                           required
                           className="bg-white px-4 py-2 rounded-sm w-full"
                        />
                     </div>

                     <div className="flex flex-col">
                        <input
                           type="text"
                           id="senderSubject"
                           value={formData.senderSubject}
                           onChange={handleChange}
                           placeholder="Your Subject"
                           required
                           className="bg-white px-4 py-2 rounded-sm w-full"

                        />
                     </div>
                  </div>

                  <div className="flex flex-col">
                     <textarea
                        id="senderMessage"
                        value={formData.senderMessage}
                        onChange={handleChange}
                        placeholder="Your message goes here..."
                        required
                        rows={8}
                        className="bg-white px-4 py-2 rounded-sm w-full"

                     ></textarea>
                  </div>

                  <div>
                     <button className="btn bg-blue-500 mt-8 w-full" type="submit" disabled={loading}>
                        {loading ? "Sending Email..." : "Send Email"}
                     </button>
                  </div>
               </form>
            </div>
         }
      </div>
   );
}
