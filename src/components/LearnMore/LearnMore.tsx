'use client'
import React, { useRef, useState } from "react";
import { learnMoreStyles as styles } from "./learnMoreStyles.tailwind";
// import Button from "../shared/Button/Button";
import { learnMoreData } from '@/data/learnMoreData';
import Globe from "../shared/Globe/Globe";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useInView , motion } from "framer-motion";

const LearnMore = () => {
  const [hasAnimated, setHasAnimated] = useState(false);  // State to track animation trigger
  const ref = useRef(null);  // Create a reference to track the element

  const isInView = useInView(ref, { once: false });  // Detect when the element is in view

  // Update the state to trigger the animation when the element is in view
  if (isInView && !hasAnimated) {
    setHasAnimated(true);  // Trigger the animation only once
  }

  return (
    <div className={`${styles.wrapper}`}>
      {/* Heading */}
      <motion.span
        ref={ref}  // Attach the ref to the motion element
        className={styles.heading}
        initial={{ opacity: 0, y: 50 }}  // Start position (invisible and 50px down)
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 50 }}  // Animate on scroll into view
        transition={{
          duration: 1,  // Duration of the animation
          ease: 'easeInOut',  // Smooth easing
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
              {/* Radial Gradient Overlay */}
              {index === 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
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
