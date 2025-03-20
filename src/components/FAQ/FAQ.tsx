import React, { useRef, useState } from 'react'
import { faqStyles as styles } from './faqStyles.tailwind'
import FAQAccordion from './FAQAccordion/FAQAccordion'
import { faqData } from '@/data/faqData'
import { useInView , motion } from 'framer-motion'
const FAQ = () => {
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
        Frequently Asked Questions
      </motion.span>
        <div className='px-8 flex items-center justify-center'>
            <FAQAccordion data={faqData} questionStyle="gradient-text text-[16px] hover:text-gray-100 font-[family-name:var(--font-bruno)] no-underline hover:no-underline [&>svg]:w-[30px] [&>svg]:h-[30px] [&>svg]:text-[#fff]" answerStyle="text-[#B6ABAB]"/>
        </div>
        
    </div>
  )
}

export default FAQ