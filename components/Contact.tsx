"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function ContactPage() {
   const [formData, setFormData] = useState({
      senderEmail: "",
      senderSubject: "",
      senderMessage: "",
   });

   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState("");
   const [error, setError] = useState("");

   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
   };

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setSuccess("");
      setError("");

      try {
         const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
         });

         const data = await response.json();
         if (!response.ok) throw new Error(data.error);

         setSuccess("Email sent successfully!");
         setFormData({
            senderEmail: "",
            senderSubject: "",
            senderMessage: "",
         });
      } catch (error) {
         console.error(error);
         setError("Failed to send email. Please try again.");
      } finally {
         setLoading(false);
      }
   };

   return (
      <main>
         <h1 className="text-3xl">Send me an Email</h1>
         <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>

            <div className="flex flex-row gap-8">
               <div className="flex flex-col">
                  <input
                     type="email"
                     id="senderEmail"
                     value={formData.senderEmail}
                     onChange={handleChange}
                     placeholder="Your Email"
                     required
                     className="border-2 rounded-xl px-4 py-2 bg-white"
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
                     className="border-2 rounded-xl px-4 py-2 bg-white"

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
                  rows={4}
                     className="border-2 rounded-xl px-4 py-2 bg-white"

               ></textarea>
            </div>

            <div>
               <button className="btn bg-blue-500 mt-8" type="submit" disabled={loading}>
                  {loading ? "Sending Email..." : "Send Email"}
               </button>
            </div>

            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
         </form>
      </main>
   );
}
