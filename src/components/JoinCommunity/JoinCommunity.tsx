import React from 'react'
import { joinCommunityStyles as styles } from './joinCommunityStyles.tailwind'
import Image from 'next/image'
import join_community from '@/assets/images/join_community.png'
import JoinCommunityForm from './JoinCommunityForm/JoinCommunityForm'
import { BorderedContainer } from '../ui/moving-border'
import trophy from '@/assets/images/trophy.png'
import card from '@/assets/images/card.png'

const JoinCommunity = () => {
  return (
    <div className={styles.outerContainer}>
      {/* Join Community Form */}
      <JoinCommunityForm />
      
      {/* Image Container */}
      <div className='w-full flex relative'>
      <div 
              className="absolute z-30 left-[-50px] bottom-[-50px]  w-[200px] h-[200px] bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${trophy.src})` }}
            ></div>
        <BorderedContainer as="div" duration={5000} className='bg-transparent border-r-0 !rounded-r-none ' containerClassName='bg-none h-[unset] w-[unset]'>
          {/* Add a wrapper div for the image with position relative */}
          {/* <div className="relative w-full"> */}
            {/* Trophy image using inline style */}
            
            
            {/* Card image using inline style */}
           
            
            {/* Main image */}
            <Image src={join_community} alt='Join TKN sports community' className='object-cover w-full h-auto p-3 pr-0'/>

            
          {/* </div> */}
        </BorderedContainer>
        <div 
              className="absolute z-30 right-[-50px] bottom-[-50px] md:w-[300px] md:h-[160px] bg-contain bg-no-repeat animate-[bounce_2s_infinite]"
              // style={{ backgroundImage: `url(${card.src})` }}
            >
              <Image src={card} className='object-cover h-[auto] w-full' alt='join TKN Sports Testing Community' />
            </div>
      </div>
    </div>
  )
}

export default JoinCommunity
