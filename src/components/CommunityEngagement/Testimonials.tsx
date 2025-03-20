"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonials } from "../../data/testimonialsData"; 
import { communityEngagementStyles as styles } from "./communityEngagementStyles.tailwind";

export function Testimonials() {
  return (
    <div className={styles.testimonialCardsContainer}>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
