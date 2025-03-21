"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  let colors = [
    "#93c5fd",
    "#f9a8d4",
    "#86efac",
    "#fde047",
    "#fca5a5",
    "#d8b4fe",
    "#93c5fd",
    "#a5b4fc",
    "#c4b5fd",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const highlightedPositions = [
    { i: 10, j: 13, color: "#f9a8d4" },
    { i: 10, j: 14, color: "#f9a8d4" },
    { i: 10, j: 15, color: "#f9a8d4" },
    { i: 10, j: 16, color: "#d8b4fe" },
    { i: 10, j: 17, color: "#d8b4fe" },
    { i: 14, j: 18, color: "#a5b4fc" },
    { i: 15, j: 18, color: "#a5b4fc" },
    { i: 16, j: 18, color: "#c4b5fd" },
    { i: 17, j: 18, color: "#c4b5fd" },
    { i: 6, j: 14, color: "#fde047" },
    { i: 12, j: 18, color: "#fde047" },
    { i: 20, j: 7, color: "#fde047" },
  ]; // Replace this with the indices you want to highlight

  const isHighlighted = (i: number, j: number) => {
    return highlightedPositions.find(pos => pos.i === i && pos.j === j);
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative h-8 w-16 border-l border-slate-700"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: isHighlighted(i, j) ? isHighlighted(i, j)?.color : `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                backgroundColor: isHighlighted(i, j) ? isHighlighted(i, j)?.color : "", // Apply the color when i === 14
                transition: { duration: 2 },
              }}
              style={{
                backgroundColor: isHighlighted(i, j) ? `${isHighlighted(i, j)?.color} !important` : "",
              }}
              key={`col` + j}
              className="relative h-8 w-16 border-t border-r border-slate-700"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
