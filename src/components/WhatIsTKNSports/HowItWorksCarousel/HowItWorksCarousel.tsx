"use client";
import React from "react";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import { carouselData } from "../../../data/howItWorksData"; 
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function HowItWorksCarousel() {
  const cards = carouselData.map((card, index) => (
    <DirectionAwareHover key={index} imageUrl={card.src} childrenClassName=" top-4 left-2 py-2" alwaysShowContent={true}>
      {/* <Card key={index} card={card} index={index} /> */}
      <p>{card.title}</p>
    </DirectionAwareHover>
    
  ));

  return (
    <div>
      <Carousel items={cards} />
    </div>
  );
}
