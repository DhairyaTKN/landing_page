'use client'
import React from "react";
import { learnMoreStyles as styles } from "./learnMoreStyles.tailwind";
// import Button from "../shared/Button/Button";
import { learnMoreData } from '@/data/learnMoreData';
import Globe from "../shared/Globe/Globe";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const LearnMore = () => {
  return (
    <div className={`${styles.wrapper}`}>
      {/* Heading */}
      <span className={styles.heading}>Want To Learn More</span>

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
                index === 0 &&
                  "relative bg-white dark:bg-black [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
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
              <span className={styles.cardText}>{card.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearnMore;
