"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";
 
export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });
 
 
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [svgWidth, setSvgWidth] = useState(0);
 
  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
      setSvgWidth(contentRef.current.offsetWidth);
    }
  }, []);
 
 
  // Path progress based on scroll
  const pathProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );
 
  // Use spring for smoother animation
  const smoothPathProgress = useSpring(pathProgress, {
    stiffness: 100,
    damping: 30
  });
 
  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full h-full", className)}
    >
      <div className="absolute inset-0">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-500)",
              borderColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-600)",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
       
        {/* SVG for the three-sided tracing beam */}
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          width={svgWidth}
          height={svgHeight}
          className="absolute top-0 left-0"
          aria-hidden="true"
        >
          {/* Fixed background path */}
          <path
            d={`M ${svgWidth - 20} 20 L 20 20 L 20 ${svgHeight - 20} L ${svgWidth - 20} ${svgHeight - 20}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            strokeWidth="1.25"
          />
         
          {/* Animated tracing path that moves with scroll */}
          <motion.path
            d={`M ${svgWidth - 20} 20 L 20 20 L 20 ${svgHeight - 20} L ${svgWidth - 20} ${svgHeight - 20}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="motion-reduce:hidden"
            pathLength="1"
            strokeDasharray="1"
            // Using dashoffset to control the visible portion of the path
            style={{
              strokeDashoffset: useTransform(
                smoothPathProgress,
                [0, 1],
                [1, 0]
              )
            }}
          />
         
          {/* Moving dot along the path */}
          <motion.circle
            r="4"
            fill="#6344F5"
            filter="drop-shadow(0 0 8px rgba(99, 68, 245, 0.5))"
            style={{
              offsetPath: `path("M ${svgWidth - 20} 20 L 20 20 L 20 ${svgHeight - 20} L ${svgWidth - 20} ${svgHeight - 20}")`,
              offdistance: useTransform(smoothPathProgress, [0, 1], ['0%', '100%'])
            }}
          />
         
          <defs>
            <linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1={svgWidth - 20}
              y1={20}
              x2={20}
              y2={svgHeight - 20}
            >
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.33" stopColor="#6344F5"></stop>
              <stop offset="0.66" stopColor="#AE48FF"></stop>
              <stop offset="1" stopColor="#18CCFC"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
     
      <div ref={contentRef} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};