import React from 'react'
import { joinCommunityStyles as styles } from './joinCommunityStyles.tailwind'
import Image from 'next/image'
import join_community from '@/assets/images/leaderboard.png'
import JoinCommunityForm from './JoinCommunityForm/JoinCommunityForm'
import { BorderedContainer } from '../ui/moving-border'
import trophy from '@/assets/images/trophy.png'
import card from '@/assets/svgs/card.svg'

const JoinCommunity = () => {
  return (
    <div className={styles.outerContainer}>
      {/* Join Community Form */}
      <JoinCommunityForm />
      
      {/* Image Container */}
      <div className='w-full relative'>
      <div 
              className="absolute z-30 left-[-11px] bottom-[-50px]  w-[155px] h-[200px] bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${trophy.src})` }}
            ></div>
        <BorderedContainer as="div" duration={5000} borderClassName="bg-join-now-gradient" className='bg-transparent' containerClassName='bg-none h-[unset] w-[unset] !rounded-tr-[0px] !rounded-br-[0px] right-[-54px]'>
          {/* Add a wrapper div for the image with position relative */}
          {/* <div className="relative w-full"> */}
            {/* Trophy image using inline style */}
            
            
            {/* Card image using inline style */}
           
            
            {/* Main image */}
            <Image src={join_community} alt='Join TKN sports community' className='w-full h-auto rounded-tl-[10px] rounded-bl-[10px]'/>

            
          {/* </div> */}
        </BorderedContainer>
        <div 
              className="absolute z-30 right-[-34px] bottom-[-50px] md:w-[316px] md:h-[160px] animate-[bounce_2s_infinite]"
              // style={{ backgroundImage: `url(${card.src})` }}
            >
              <Image src={card} className='h-[auto] w-full' alt='join TKN Sports Testing Community' />
            </div>
      </div>
    </div>
  )
}

export default JoinCommunity
