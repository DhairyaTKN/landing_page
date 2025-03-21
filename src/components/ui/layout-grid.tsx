"use client";
import React, { useState } from "react";
import {  motion } from "motion/react";
import { cn } from "@/lib/utils";
// import Image from "next/image";
import type { JSX } from "react";


type Card = {
  id: number;
  content?: JSX.Element | React.ReactNode | string;
  className?: string;
  thumbnail?: string;
  description?: string;
  title?: string;
  backgroundComponent?: JSX.Element;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected] = useState<Card | null>(null);
  const [lastSelected] = useState<Card | null>(null);

  // const handleClick = (card: Card) => {
  //   setLastSelected(selected);
  //   setSelected(card);
  // };

  // const handleOutsideClick = () => {
  //   setLastSelected(selected);
  //   setSelected(null);
  // };

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-[1fr_0.15fr_1fr] mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            // onClick={() => handleClick(card)}
            className={cn(
              
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40  rounded-xl h-full w-full"
                : " rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        // onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <div className="relative w-full h-full">
      {card.backgroundComponent ? (
        // Render background component dynamically
        <div className="relative w-full h-full rounded-lg overflow-hidden ">
          {card.backgroundComponent}
        </div>
      ) : (
        // Default behavior for other cards
        <motion.img
          layoutId={`image-${card.id}-image`}
          src={card.thumbnail}
          height="500"
          width="500"
          className="object-cover object-top absolute inset-0 h-full w-full transition duration-200 rounded-lg "
          alt="thumbnail"
        />
      )}
      <div className="absolute top-0 left-0 right-0 text-white py-5 px-3 rounded-b-lg">
        {card.title}
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-white p-2 rounded-b-lg">
        {card.description}
      </div>
    </div>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
