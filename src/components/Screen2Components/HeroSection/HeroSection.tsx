import React from 'react'
import { heroSectionStyles as styles } from './heroSectionStyles.tailwind'
// import Button from '@/components/shared/Button/Button'
import Image from 'next/image'
import logo from '@/assets/images/TKN Sports Logo 1.png'
import TimerComponent from './TimerComponent/TimerComponent'
// import { Button } from '@/components/ui/button'
import { HoverBorderGradientButton } from '@/components/shared/Button/HoverEffectButton'

const HeroSection = () => {
  return (
    <div className={styles.outerContainer}>
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full"
        >
          <source src='/demo_video.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay to make content more readable */}
        <div className="absolute inset-0 bg-black/75 z-10"></div>
      </div>
    <div className={styles.wrapper}>
      {/* Logo (Absolute Inside Wrapper) */}
      <div className={styles.logoWrapper}>
          <Image src={logo} alt="TKN Sports Logo" className={styles.logo} width={357} height={344} />
        </div>
      <div className='flex items-center justify-center mt-[-90px] z-20'>
        <span className={styles.heading}>Get Ready To Experience Sports Like Never Before!</span>
      </div>
        
      <p className={styles.description}>Own Digital Zones , earn rewards, and engage in real-time sports action with $TSPRT!</p>
      {/* <Button variant='primary' className={styles.joinButton}>Join Now</Button> */}
      <HoverBorderGradientButton><span>Join Now</span></HoverBorderGradientButton>
    </div>
    <TimerComponent />
    </div>
  )
}

export default HeroSection