'use client'
import React from 'react'
import { communityEngagementStyles as styles } from './communityEngagementStyles.tailwind'
import { FloatingDock } from '@/components/ui/floating-dock'
import { socialMediaLinksData } from '@/data/socialMediaLinksData'
import { ParallaxScrollDemo } from '../ParallaxScrollDemo/ParallaxScrollDemo'

const CommunityEngagement = () => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.heading}>Join the Conversation</span>
        <div className='flex gap-4 justify-center items-center'>
            <FloatingDock items={socialMediaLinksData} mobileClassName="translate-y-20" desktopClassName='dark:bg-transparent'/>
        </div>
        <ParallaxScrollDemo />

    </div>
  )
}

export default CommunityEngagement