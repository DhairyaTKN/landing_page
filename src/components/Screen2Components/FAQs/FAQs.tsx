import React from 'react'
import { faqsStyles as styles } from './faqsStyles.tailwind'
import FAQAccordion from '@/components/FAQ/FAQAccordion/FAQAccordion'
import { faqData } from '@/data/faqData'
const FAQs = () => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.heading}>Frequently Asked Questions</span>
        <div className='px-8 flex items-center justify-center'>
            {/* <FAQAccordion data={faqData}/> */}
            <FAQAccordion data={faqData} questionStyle="gradient-text text-[16px] font-[600] hover:text-gray-100 font-[family-name:var(--font-prompt)] no-underline hover:no-underline [&>svg]:w-[30px] [&>svg]:h-[30px] [&>svg]:text-[#fff]" answerStyle="text-[#fff] font-[400] leading-[26px] font-[family-name:var(--font-montserrat)]"/>
        </div>
        
    </div>
  )
}

export default FAQs