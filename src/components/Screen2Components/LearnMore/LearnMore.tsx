import React from 'react'
import { learnMoreStyles as styles } from './learnMoreStyles.tailwind'
import Button from '@/components/shared/Button/Button'
import Features from './Features/Features'

const LearnMore = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.heading}>Want to Learn More?</span>
      <Features />
      <Button variant='primary' className='max-w-[max-content] px-10 py-2 text-[17px] font-[500] leading-[22px] font-[family-name:var(--font-prompt)]'>Read the Initial Whitepaper</Button>
    </div>
  )
}

export default LearnMore