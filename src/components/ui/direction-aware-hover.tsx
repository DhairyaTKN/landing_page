"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
  alwaysShowContent = false,
}: {
  imageUrl: string | StaticImageData;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
  alwaysShowContent?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right">("left");

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const dir = getDirection(event, ref.current);
    setDirection(["top", "right", "bottom", "left"][dir] as "top" | "bottom" | "right" | "left");
  };

  const handleMouseLeave = () => {
    setDirection("left");
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>, obj: HTMLElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "md:h-[32rem] w-60 h-[25rem] md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
          <motion.div
            variants={variants}
            className="h-full w-full relative bg-gray-50 dark:bg-black"
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <Image
              alt="image"
              className={cn("h-full w-full object-cover scale-[1.15]", imageClassName)}
              width="1000"
              height="1000"
              src={imageUrl}
            />
          </motion.div>

          {/* Content - always visible if alwaysShowContent = true */}
          <motion.div
            variants={textVariants}
            initial="initial"
            animate={alwaysShowContent ? "alwaysVisible" : direction}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn("text-white absolute bottom-4 left-4 z-40", childrenClassName)}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

// Image motion variants
const variants = {
  initial: { x: 0 },
  exit: { x: 0, y: 0 },
  top: { y: 20 },
  bottom: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
};

// Text motion variants
const textVariants = {
  initial: { opacity: 0, y: 0, x: 0 },
  exit: { opacity: 0, y: 0, x: 0 },
  alwaysVisible: { opacity: 1, y: 0, x: 0 },
  top: { opacity: 1, y: -20 },
  bottom: { opacity: 1, y: 2 },
  left: { opacity: 1, x: -2 },
  right: { opacity: 1, x: 20 },
};
