import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import clsx from "clsx"; // Importing clsx utility for className merging

interface HoverBorderGradientButtonProps {
  children: React.ReactNode; // Accept any valid React children (text, components, etc.)
  className?: string;        // Custom class for the button itself
  containerClassName?: string; // Custom class for the container of the button
}

export const HoverBorderGradientButton: React.FC<HoverBorderGradientButtonProps> = ({
  children,
  className,
  containerClassName,
}) => {
  return (
    <div className="">
      <HoverBorderGradient
        // Merging default container class with the passed containerClassName using clsx
        containerClassName={clsx(
          "border-none border-borderColor rounded-[10px] overflow-hidden flex justigy-center items-center", 
          containerClassName // Allows users to pass in their custom containerClassName
        )}
        as="button"
        // Merging default button class with the passed className using clsx
        className={clsx(
          "dark:bg-[rgba(35,84,141,0.15)] bg-white text-black dark:text-white text-[14px] flex items-center space-x-2 rounded-0", 
          className // Allows users to pass in their custom className
        )}
      >
        {children} {/* This will render whatever content is passed */}
      </HoverBorderGradient>
    </div>
  );
};
