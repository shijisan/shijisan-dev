"use client";
import { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "motion/react";
 
export default function Contacts() {
  const [buttonText, setButtonText] = useState("Send Email ➤");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      senderEmail: formData.get("senderEmail"),
      senderSubject: formData.get("senderSubject"),
      senderMessage: formData.get("senderMessage"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setButtonText("Email sent successfully ✔️");
        form.reset();

        setTimeout(() => {
          setButtonText("Send Email ➤");
        }, 3000);
      } else {
        setButtonText("Failed to send ❌");
        setTimeout(() => {
          setButtonText("Send Email ➤");
        }, 3000);
      }
    } catch (err) {
      console.error(err);
      setButtonText("Error sending ❌");
      setTimeout(() => {
        setButtonText("Send Email");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="Contact">
                <motion.div
            className="flex justify-center items-center flex-col min-h-screen"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
      <div className="md:max-w-xl w-full">
        <h2 className="text-xl ms-4">Contacts ✉️</h2>
        <form
          onSubmit={handleSubmit}
          className="contact-form w-full px-4 flex flex-col md:gap-6 gap-3 mt-4"
        >
          <div>
            <label>Your Email</label>
            <input
              name="senderEmail"
              type="email"
              placeholder="ben-dover@example.com"
              required
            />
          </div>
          <div>
            <label>Subject</label>
            <input
              name="senderSubject"
              type="text"
              placeholder="What's this about?"
              required
            />
          </div>
          <div>
            <label>Your Message</label>
            <textarea
              name="senderMessage"
              placeholder="Write your message here..."
              required
            />
          </div>
          <button
            className="py-2 md:rounded-lg rounded-sm text-xs bg-primary hover:brightness-110 active:opacity-90 hover:cursor-pointer mt-2 transition-all disabled:opacity-60"
            type="submit"
            disabled={isSubmitting}
          >
            {buttonText}
          </button>
        </form>
        <div className="mt-12 mb-4 flex gap-8 items-center justify-center text-lg">
          <Link href="http://linkedin.com/in/shijisan/">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/shijisan">
            <FaGithub />
          </Link>
          <Link href="https://www.facebook.com/christian.james.santos.2024">
            <FaFacebook />
          </Link>
        </div>
      </div>
      </motion.div>
    </section>
  );
}
