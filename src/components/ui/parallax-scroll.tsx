"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { StaticImageData } from "next/image";

export const ParallaxScroll = ({
  cards,
  className,
  columns = 3,
  fastSpeed = 10,
  slowSpeed = 20,
}: {
  cards: { id: number; name: string; text: string; image?: string | StaticImageData }[];
  className?: string;
  columns?: number;
  fastSpeed?: number;
  slowSpeed?: number;
}) => {
  const splitCards = Array.from({ length: columns }, (_, colIdx) =>
    cards.filter((_, cardIdx) => cardIdx % columns === colIdx)
  );

  return (
    <div className={cn("relative min-h-[500px] max-h-[600px] w-full overflow-hidden ", className)} style={{
      boxShadow: "0px 0px 72px 46px rgba(0, 0, 0, 0.84)",
    }}>
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Parallax Scrolling Cards */}
      <div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(250px, 1fr))`,
          gap: "20px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
        }}
      >
        {splitCards.map((columnCards, colIdx) => {
          const speed = colIdx % 2 === 0 ? fastSpeed : slowSpeed;

          return (
            <motion.div
              key={`col-${colIdx}`}
              className="grid gap-10"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            >
              {[...columnCards, ...columnCards].map((card, idx) => (
                <div
                  key={`card-${colIdx}-${idx}`}
                  className="border-[1px] border-borderColor text-white p-6 rounded-lg shadow-lg flex flex-col gap-4"
                >
                  <div className="flex gap-4 items-center">
                  {/* Conditionally render the image */}
                  {card.image && (
                      <div className="h-10 w-10 rounded-full border-[1px] border-borderColor overflow-hidden">
                        <Image
                          src={card.image}
                          alt={card.name}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover rounded-full"
                        />
                      </div>
                    )}
                  <h3 className="text-[15px] font-[600]">{card.name}</h3>
                  </div>
                  <p className="text-[14px] leading-[26px] text-gray-300">{card.text}</p>
                </div>
              ))}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
