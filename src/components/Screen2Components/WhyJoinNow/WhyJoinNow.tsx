'use client'
import React from 'react'
import { whyJoinNowStyles as styles } from './whyJoinNowStyles.tailwind'
// import Button from '@/components/shared/Button/Button'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import  {whyJoinData}  from '@/data/perksData'
import { Button } from '@/components/ui/button'

const WhyJoinNow = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <span className={styles.heading}>Why Join Now?</span>
            <Button variant='primary' className='px-7 text-[14px] md:text-[17px] font-[500] md:leading-[22px] font-[family-name:var(--font-prompt)]'>Get Started</Button>
        </div>
        {/* perks list */}
        <HoverEffect items={whyJoinData}/>
    </div>
  )
}

export default WhyJoinNow