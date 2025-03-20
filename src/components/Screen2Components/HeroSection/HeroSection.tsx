import React from 'react'
import { heroSectionStyles as styles } from './heroSectionStyles.tailwind'
import Button from '@/components/shared/Button/Button'
import Image from 'next/image'
import logo from '@/assets/images/TKN Sports Logo 1.png'
import TimerComponent from './TimerComponent/TimerComponent'

const HeroSection = () => {
  return (
    <div className={styles.outerContainer}>
    <div className={styles.wrapper}>
      {/* Logo (Absolute Inside Wrapper) */}
      <div className={styles.logoWrapper}>
          <Image src={logo} alt="TKN Sports Logo" className={styles.logo} width={357} height={344} />
        </div>
      <div className='flex items-center justify-center mt-[-90px]'>
        <span className={styles.heading}>Get Ready To Experience Sports Like Never Before!</span>
      </div>
        
      <p className={styles.description}>Own Digital Zones , earn rewards, and engage in real-time sports action with $TSPRT!</p>
      <Button variant='primary' className={styles.joinButton}>Join Now</Button>
    </div>
    <TimerComponent />
    </div>
  )
}

export default HeroSection