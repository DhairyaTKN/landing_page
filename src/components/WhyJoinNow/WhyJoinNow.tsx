"use client";

import React from "react";
import Button from "../shared/Button/Button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import NFT from '@/assets/svgs/NFT.svg'
import Lock from '@/assets/svgs/Lock.svg'
import Airdrops from '@/assets/svgs/airDrops.svg'
import Image from "next/image";

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
  return (
    <div className="pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: Heading, Text, Button */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="font-[family-name:var(--font-bruno)] text-[30px] gradient-text">
            Why Join Now?
          </h2>
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
