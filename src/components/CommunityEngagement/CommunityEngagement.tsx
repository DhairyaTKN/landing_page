'use client'
import React, { useRef, useState } from 'react'
import { communityEngagementStyles as styles } from './communityEngagementStyles.tailwind'
import { FloatingDock } from '../ui/floating-dock'
import { socialMediaLinksData } from '../../data/socialMediaLinksData'
// import { Testimonials } from './Testimonials'
import { ParallaxScroll } from '../ui/parallax-scroll'
import { testimonials } from '@/data/testimonials'
import { useInView, motion } from 'framer-motion'

const CommunityEngagement = () => {
  const [hasAnimated, setHasAnimated] = useState(false);  // State to track animation trigger
  const ref = useRef(null);  // Create a reference to track the element

  const isInView = useInView(ref, { once: false });  // Detect when the element is in view

  // Update the state to trigger the animation when the element is in view
  if (isInView && !hasAnimated) {
    setHasAnimated(true);  // Trigger the animation only once
  }

  return (
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
          Join the conversation
        </motion.span>
        {/* Social Media Links (twitter, instagram , etc) */}
        <div className={styles.socialMediaLinks}>
            <FloatingDock items={socialMediaLinksData} mobileClassName="translate-y-20" desktopClassName='dark:bg-transparent'/>
        </div>
        {/* <Testimonials /> */}
        <ParallaxScroll cards={testimonials} />
    </div>
  )
}

export default CommunityEngagement