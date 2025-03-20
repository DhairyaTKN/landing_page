import React from 'react'
import {joinNowStyles as styles } from './joinNowStyles.tailwind'
import Button from '@/components/shared/Button/Button'

// const heading = `Get Ready to Experience Sports Like Never Before!`;
const JoinNow = () => {
  return (
    <div className={styles.container}>
        <span className={styles.heading}>Get Ready to Experience Sports Like Never Before!</span>
        {/* Description */}
        <span className={styles.description}>Own Digital Zones , earn rewards, and engage in real-time sports action with $TSPRT!</span>
        <Button variant='primary' className={styles.button}>Join Now</Button>
    </div>
  )
}

export default JoinNow