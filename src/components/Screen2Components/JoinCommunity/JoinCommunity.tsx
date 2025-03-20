import React from 'react'
import { joinCommunityStyles as styles } from './joinCommunityStyles.tailwind'
import JoinCommunityForm from './JoinCommunityForm/JoinCommunityForm'
import joinCommunityImage from '@/assets/images/join_community.png'
import card from '@/assets/images/card.png'
import Image from 'next/image'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { Badge } from '@/components/ui/badge'
import commentary from '@/assets/svgs/commentary.svg'

const JoinCommunity = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.heading}> Join the TKN Sports Testing Community</span>
      <JoinCommunityForm />
      <div className='flex relative'>
        {/* card with chip*/}
        <div className='flex flex-col gap-1 absolute left-[-100px] bottom-0 z-30'>
          <Badge  className='rounded-full px-3 flex gap-1 bg-green-600 max-w-[70px] h-[22px] !hover:bg-green-700'><div className='w-2 h-2 bg-white rounded-full animate-pulse'></div><span className='text-white text-[14px] leading-[18px] font-[200] '>Live</span></Badge>
          <Image src={card} className='object-cover h-[auto] w-[340px]' alt='join TKN Sports Testing Community' />
          

        </div>

        <ContainerScroll titleComponent="">
        <Image src={joinCommunityImage} className='object-cover h-full w-full' alt='join TKN Sports Testing Community' />
        </ContainerScroll>
        <div className='flex flex-col gap-2 absolute top-[10%] right-0 z-30'>
          <Image src={commentary} className='object-cover h-[40px] w-[40px]' alt='join TKN Sports Testing Community' />
          <Badge className='bg-green-600 max-w-[fit-content] rounded-full !hover:bg-green-700'><span className='text-white text-[14px] leading-[18px] font-[200]'>Commentary</span></Badge>
        </div>
      </div>
      
      

      
    </div>
  )
}

export default JoinCommunity