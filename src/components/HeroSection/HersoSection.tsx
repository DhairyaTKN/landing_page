import React from 'react'
import { heroSectionStyles as styles } from './hersoSectionStyles.tailwind'
import CountdownTimer from './Timer/Timer'
import JoinNow from './JoinNow/JoinNow'
// import video from  "../../assets/images/"

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
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>
      
      {/* Content container (positioned above video) */}
      <div className="relative z-20 w-full flex flex-col gap-[50px] pt-11 container">
        {/* timer section */}
        <div className='ml-auto pt-2'>
          {/* Timer Component */}
          <CountdownTimer />
        </div>
        
        {/* Join Now Component */}
        <JoinNow />
      </div>
    </div>
  )
}

export default HeroSection