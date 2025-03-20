'use client'
import React, { useRef, useState } from "react";
import { learnMoreStyles as styles } from "./learnMoreStyles.tailwind";
import { learnMoreData } from '@/data/learnMoreData';
import Globe from "../shared/Globe/Globe";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useInView , motion } from "framer-motion";
import { Boxes } from "../ui/background-boxes";

const LearnMore = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div className={`${styles.wrapper}`}>
      {/* Heading */}
      <motion.span
        ref={ref}
        className={styles.heading}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 50 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        Want To Learn More
      </motion.span>

      {/* Card Container */}
      <div className={styles.cardContainer}>
        {learnMoreData.map((card, index) => {
          if (index === learnMoreData.length - 1) {
            return (
              <div key={index} className={styles.lastCardContainer}>
                {/* Last card with button */}
                <div className={`${styles.lastCard} relative overflow-hidden `}>
                  <Globe className="absolute right-[-10%] top-[20%] w-[500px] h-[500px] scale-125" />
                  <span className={`${styles.cardText} py-5 relative z-10`}>
                    {card.title}
                  </span>
                </div>
                <Button variant="primary" className={styles.button}>
                  Read the Initial Whitepaper
                </Button>
              </div>
            );
          }

          return (
            <div
              key={index}
              className={cn(
                styles.cards,
                index === 0 && "relative overflow-hidden"
              )}
              style={
                index !== 0
                  ? {
                      backgroundImage: `url(${card.bgImage.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : {}
              }
            >
              {/*  Boxes component as background for the first card */}
              {index === 0 && (
                <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
                  <Boxes />
                </div>
              )}
              <span className={styles.cardText}>{card.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearnMore;
