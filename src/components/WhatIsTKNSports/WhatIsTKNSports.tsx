import React, { useRef, useState } from 'react'
import { whatIsTKNSportsStyles as styles } from './whatIsTKNSportsStyles.tailwind'
import {HowItWorksCarousel} from '@/components/WhatIsTKNSports/HowItWorksCarousel/HowItWorksCarousel'
import { useInView, motion } from 'framer-motion';

const WhatIsTKNSports = () => {
  const [hasAnimated, setHasAnimated] = useState(false);  // State to track animation trigger
  const ref = useRef(null);  // Create a reference to track the element

  const isInView = useInView(ref, { once: false });  // Detect when the element is in view

  // Update the state to trigger the animation when the element is in view
  if (isInView && !hasAnimated) {
    setHasAnimated(true);  // Trigger the animation only once
  }

  return (
    <div className={styles.outerContainer}>
        <div className={styles.wrapper}>
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
            What is TKN Sports?
          </motion.span>

          <span className={styles.description}>A revolutionary blockchain-powered sports fan engagement platform</span>
          {/* How it works carousel */}
          <HowItWorksCarousel />
        </div>
    </div>
  )
}

export default WhatIsTKNSports