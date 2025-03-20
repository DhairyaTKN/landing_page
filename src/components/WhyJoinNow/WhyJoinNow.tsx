"use client";

import React, { useRef, useState } from "react";
import Button from "../shared/Button/Button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import NFT from '@/assets/svgs/NFT.svg'
import Lock from '@/assets/svgs/Lock.svg'
import Airdrops from '@/assets/svgs/airDrops.svg'
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import { whyJoinNowstyles as styles } from './whyJoinNowstyles.tailwind';

const cards = [
  {
    icon: <Image src={Lock} className="h-[30px] w-[30px] text-white" alt="Perks" />,
    title: "Early Access Perks",
    description: "Be among the first to own game field tokens!",
  },
  {
    icon: <Image src={Airdrops} className="h-[30px] w-[30px] text-white" alt="Exclusive Airdrops" />,
    title: "Exclusive Airdrops",
    description: "Earn $TSTRT rewards at the token launch!",
  },
  {
    icon: <Image src={NFT} className="h-[30px] w-[30px] text-white" alt="NFTs" />,
    title: "NFT Pre-Mint Access",
    description: "Test the first wave of digital collectibles.",
  },
];

const WhyJoinNow = () => {
  const [hasAnimated, setHasAnimated] = useState(false);  // State to track animation trigger
  const ref = useRef(null);  // Create a reference to track the element

  const isInView = useInView(ref, { once: false });  // Detect when the element is in view

  // Update the state to trigger the animation when the element is in view
  if (isInView && !hasAnimated) {
    setHasAnimated(true);  // Trigger the animation only once
  }

  return (
    <div className="pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: Heading, Text, Button */}
        <div className="flex flex-col justify-center space-y-4">
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
            Why Join Now?
          </motion.span>
          <p className="font-[300]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <Button variant="primary" className="max-w-[250px]">
            Get Started
          </Button>
        </div>

        {/* Right Section: First Card (Mapped Separately) */}
        <GlowingCard {...cards[0]} />
      </div>

      {/* Second Row: Two Cards Mapped */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {cards.slice(1).map((card, index) => (
          <GlowingCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

interface GlowingCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const GlowingCard = ({ icon, title, description }: GlowingCardProps) => {
  return (
    <div className="relative p-1 rounded-xl border border-borderColor">
      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} borderRadius={5} />
      <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-xl  p-4 ">
        <div className="flex flex-col gap-3">
          <div className="w-fit rounded-lg  p-2 border border-borderColor">{icon}</div>
          <h3 className="text-xl gradient-text font-[family-name:var(--font-bruno)]">{title}</h3>
          <p className="text-[#B6ABAB]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinNow;
