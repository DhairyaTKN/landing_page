"use client";
import { ParallaxScroll } from '@/components/ui/parallax-scroll';
import { testimonials } from '@/data/testimonials'

export function ParallaxScrollDemo() {
  return <ParallaxScroll cards={testimonials} />;
}

