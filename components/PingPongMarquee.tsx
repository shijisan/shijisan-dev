import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function PingPongMarquee({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const controls = useAnimation();
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;

    const checkOverflow = () => {
      if (container && textEl) {
        const overflow = textEl.scrollWidth > container.offsetWidth;
        setShouldScroll(overflow);

        if (overflow) {
          const distance = textEl.scrollWidth - container.offsetWidth;
          controls.start({
            x: [0, -distance, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
            }
          });
        } else {
          controls.set({ x: 0 });
        }
      }
    };

    checkOverflow(); // Run immediately

    window.addEventListener("resize", checkOverflow); // 👈 Re-run on resize
    return () => window.removeEventListener("resize", checkOverflow);
  }, [text, controls]);

  return (
    <div ref={containerRef} className="relative md:w-60 min-w-0 w-full h-6 overflow-hidden">
      <motion.span
        ref={textRef}
        className="absolute whitespace-nowrap"
        animate={controls}
      >
        {text}
      </motion.span>
    </div>
  );
}
