'use client'
import React from 'react'
import { communityEngagementStyles as styles } from './communityEngagementStyles.tailwind'
import { FloatingDock } from '../ui/floating-dock'
import { socialMediaLinksData } from '../../data/socialMediaLinksData'
// import { Testimonials } from './Testimonials'
import { ParallaxScroll } from '../ui/parallax-scroll'
import { testimonials } from '@/data/testimonials'

const CommunityEngagement = () => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.heading}>Join the conversation</span>
        {/* Social Media Links (twitter, instagram , etc) */}
        <div className={styles.socialMediaLinks}>
            <FloatingDock items={socialMediaLinksData} mobileClassName="translate-y-20" desktopClassName='dark:bg-transparent'/>
        </div>
        {/* <Testimonials /> */}
        <ParallaxScroll cards={testimonials} />
    </div>
  )
}

export default CommunityEngagement