import React from 'react'
import { whatIsTKNSportsStyles as styles } from './whatIsTKNSportsStyles.tailwind'
import {HowItWorksCarousel} from '@/components/WhatIsTKNSports/HowItWorksCarousel/HowItWorksCarousel'

const WhatIsTKNSports = () => {
  return (
    <div className={styles.outerContainer}>
        <div className={styles.wrapper}>
            <span className={styles.heading}>What is TKN Sports?</span>
            <span className={styles.description}>A revolutionary blockchain-powered sports fan engagement platform</span>
            {/* How it works carousel */}
            <HowItWorksCarousel />
        </div>
    </div>
  )
}

export default WhatIsTKNSports