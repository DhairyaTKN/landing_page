import React from 'react'
import { footerStyles as styles } from './footerStyles.tailwind'
import Image from 'next/image'
import logo from '@/assets/images/TKN Sports Logo 1.png'
import { footerLinks } from '@/data/footerData'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.disclaimerContainer}>
        <Image src={logo} alt='Logo' className={styles.logoImage}/>
        <fieldset className={styles.disclaimerBox}>
          <legend className={styles.disclaimerText}>Disclaimer</legend>
          <p className={styles.disclaimer}>
            $TSPRT is a fan engagement token and not a financial investment.
          </p>
        </fieldset>
      </div>
      {/* divider */}
      <hr className={styles.divider}/>
      <div className={styles.disclaimerContainer}>
        <p className={styles.copyright}>
          © 2025 TKN SPORTS. All rights reserved.
        </p>
        <div className={styles.linksContainer}>
          {footerLinks.map((link, index) => (
            <a key={index} href={link.href} className={styles.link}>
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer