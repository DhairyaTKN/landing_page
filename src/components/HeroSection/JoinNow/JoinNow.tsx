import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';  // Import useInView and motion
import { joinNowStyles as styles } from './joinNowStyles.tailwind';
// import { Button } from '@/components/ui/button'
import { HoverBorderGradientButton } from '@/components/shared/Button/HoverEffectButton';
// import Button from '@/components/shared/Button/Button';

const JoinNow = () => {
  const [hasAnimated, setHasAnimated] = useState(false);  // State to track animation trigger
  const ref = useRef(null);  // Create a reference to track the element

  const isInView = useInView(ref, { once: false });  // Detect when the element is in view

  // Update the state to trigger the animation when the element is in view
  if (isInView && !hasAnimated) {
    setHasAnimated(true);  // Trigger the animation only once
  }

  return (
    <div className={styles.container}>
      {/* Motion span for heading with scroll-triggered animation */}
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
        Get Ready to Experience Sports Like Never Before!
      </motion.span>

      {/* Description */}
      <span className={styles.description}>
        Own Digital Zones, earn rewards, and engage in real-time sports action with $TSPRT!
      </span>

      {/* Button */}
      {/* <Button variant="primary" className={styles.button}>
        Join Now
      </Button> */}
      <HoverBorderGradientButton>Join Now</HoverBorderGradientButton>
    </div>
  );
};

export default JoinNow;
