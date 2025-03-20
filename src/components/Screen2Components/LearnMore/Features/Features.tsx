
import React from 'react'
import { LayoutGrid } from '@/components/ui/layout-grid'
import {featuresData} from '@/data/featuresData'

const Features = () => {
  return (
    <div className='h-screen w-full'>
        <LayoutGrid cards={featuresData}></LayoutGrid>
    </div>
        
  )
}

export default Features