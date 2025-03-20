import React from 'react'
import { faqStyles as styles } from './faqStyles.tailwind'
import FAQAccordion from './FAQAccordion/FAQAccordion'
import { faqData } from '@/data/faqData'
const FAQ = () => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.heading}>Frequently Asked Questions</span>
        <div className='px-8 flex items-center justify-center'>
            <FAQAccordion data={faqData} questionStyle="gradient-text text-[16px] hover:text-gray-100 font-[family-name:var(--font-bruno)] no-underline hover:no-underline [&>svg]:w-[30px] [&>svg]:h-[30px] [&>svg]:text-[#fff]" answerStyle="text-[#B6ABAB]"/>
        </div>
        
    </div>
  )
}

export default FAQ