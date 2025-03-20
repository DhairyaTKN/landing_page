import Image from "next/image";
import React from "react";
import Logo from '@/assets/images/TKN Sports Logo 1.png';
import { footerStyles as styles } from './footerStyles.tailwind';
import { footerLinks } from '@/data/footerData';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.wrapper}>
        {/* Disclaimer Box */}
        <fieldset className={styles.disclaimerBox}>
          <legend className={styles.disclaimerText}>Disclaimer</legend>
          <p className={styles.disclaimer}>
            $TSPRT is a fan engagement token and not a financial investment.
          </p>
        </fieldset>

        {/* Footer Links */}
        <div className={styles.linksContainer}>
          {footerLinks.map((link, index) => (
            <a key={index} href={link.href} className={styles.link}>
              {link.text}
            </a>
          ))}
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <Image
          src={Logo}
          alt="TKN Logo"
          className={styles.logo}
        />
        {/* Copyright */}
        <p className={styles.copyright}>
          © 2025 TKN SPORTS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
