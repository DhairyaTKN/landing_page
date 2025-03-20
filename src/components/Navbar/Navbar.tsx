import React from 'react'
import { navbarStyles as styles } from './navbarStyles.tailwind'
import Image from 'next/image'
import Logo  from '@/assets/images/TKN Sports Logo 1.png'

const Navbar = () => {
  return (
    <nav className={styles.outerContainer}>
        <div className={styles.imageContainer}>
            <Image src={Logo} alt='Logo' className={styles.logoImage}/>
        </div>
    </nav>
  )
}

export default Navbar