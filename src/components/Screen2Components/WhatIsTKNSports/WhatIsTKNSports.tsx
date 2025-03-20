import React from 'react'
import { whatIsTKNSportsStyles as styles } from './whatIsTKNSportsStyles.tailwind'
import { HowItWorks } from './HowItWorks/HowItWorks'

const WhatIsTKNSports = () => {
  return (
    <div className={styles.outerContainer}>
        <span className={styles.heading}>What Is TKN Sports?</span>
        <p className={styles.description}>A revolutionary blockchain-powered sports fan engagement platform</p>
        <HowItWorks />
    </div>
  )
}

export default WhatIsTKNSports