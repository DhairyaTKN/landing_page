'use client'
import React, { useRef, useState } from "react";
import { learnMoreStyles as styles } from "./learnMoreStyles.tailwind";
import { learnMoreData } from '@/data/learnMoreData';
import Globe from "../shared/Globe/Globe";
import { cn } from "@/lib/utils";
// import { Button } from "../ui/button";
import { useInView, motion } from "framer-motion";
import { Boxes } from "../ui/background-boxes";
import { FollowerPointerCard } from "../ui/following-pointer";
import { HoverBorderGradientButton } from "../shared/Button/HoverEffectButton";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const LearnMore = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  const chatMessages = [
    { text: "Fan Experience", isUser: true },
    { text: "Engagement", isUser: false },
    // { text: "How are tokens distributed?", isUser: true },
    // { text: "40% community, 30% team, 20% treasury, 10% investors", isUser: false },
    { text: "Enhancing Experiences", isUser: true },
    // { text: "Q2 2025 with initial price of $0.05", isUser: false },
  ];

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div className={`${styles.wrapper}`}>
      <motion.span
        ref={ref}
        className={styles.heading}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 50 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        Want To Learn More
      </motion.span>

      <div className={styles.cardContainer}>
        {learnMoreData.map((card, index) => {
          if (index === learnMoreData.length - 1) {
            return (
              <div key={index} className={styles.lastCardContainer}>
                <div className={`${styles.lastCard} relative overflow-hidden `}>
                  <Globe className="absolute right-[-10%] top-[20%] w-[500px] h-[500px] scale-125" />
                  <span className={`${styles.cardText} py-5 relative z-10`}>
                    {card.title}
                  </span>
                </div>
                {/* <Button variant="primary" className={styles.button}>
                  Read the Initial Whitepaper
                </Button> */}
                <HoverBorderGradientButton containerClassName="w-full" className="w-full">Read the Initial Whitepaper</HoverBorderGradientButton>
              </div>
            );
          }

          return (
            <div
              key={index}
              className={cn(
                styles.cards,
                index === 0 &&
                "flex flex-col gap-8 relative bg-white dark:bg-black [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
              )}
              style={index === 0 ? {} : { backgroundSize: "cover", backgroundPosition: "center" }}
            >
              {index === 1 && (
                <div className="absolute w-full h-full flex items-center justify-center overflow-hidden left-0 top-0 bg-slate-900 z-20 [mask-image:radial-gradient(white)]">
                  {/* Infinite Moving Cards on Top */}
                  <div className="absolute  left-0 z-30 flex flex-col gap-3">
                    <InfiniteMovingCards
                      items={[
                        { quote: "Blockchain Innovation" },
                        { quote: "NFTs are the future" },
                        { quote: "Smart Contracts" },
                      ]}
                      direction="left"
                      speed="slow"
                      pauseOnHover
                    />
                    <InfiniteMovingCards
                      items={[
                        { quote: "Blockchain Innovation" },
                        { quote: "NFTs are the future" },
                        { quote: "Smart Contracts" },
                      ]}
                      direction="right"
                      speed="normal"
                      pauseOnHover
                    />
                    <InfiniteMovingCards
                      items={[
                        { quote: "Blockchain Innovation" },
                        { quote: "NFTs are the future" },
                        { quote: "Smart Contracts" },
                      ]}
                      direction="left"
                      speed="slow"
                      pauseOnHover
                    />
                  </div>

                  {/* Existing Boxes component */}
                  <Boxes />
                </div>
              )}


              {index === 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              )}

              <span className={`${styles.cardText} relative z-10`}>
                {card.title}
              </span>
              {index === 0 && (
                <div key={index} className={cn("py-4 flex flex-col gap-7 justify-between w-full ")}>
                  {chatMessages.map((message, msgIndex) => (
                    <div
                      key={msgIndex}
                      className={`flex w-full ${message.isUser ? 'justify-start' : 'justify-end'}`}
                    >
                      <FollowerPointerCard
                        title={message.text}
                        className={cn(
                          "max-w-[90%] ",
                          // message.isUser ? "bg-transparent" : "bg-transparent"
                        )}
                      >
                        <div
                          className={cn(
                            "rounded-xl py-2 px-2 bg-[rgba(217, 217, 217, 0.07)] border border-borderColor text-[#B6ABAB]",
                          )}
                        >
                          <span className="text-sm font-medium px-2">{message.text}</span>
                        </div>
                      </FollowerPointerCard>
                    </div>
                  ))}

                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearnMore;
