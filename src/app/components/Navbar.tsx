import React from 'react';
import Link from 'next/link';
import styles from '@/app/styles/Navbar.module.css'; 

const Navbar = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles.logo}>Travel Explore</div> {/* Changed logo text */}
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" className={styles.link}>Home</Link>
        </li>
        <li>
          <Link href="/distination" className={styles.link}>Destinations</Link> {/* New section */}
        </li>
        <li>
          <Link href="/tour" className={styles.link}>Tours</Link> {/* New section */}
        </li>
        <li>
          <Link href="/booking" className={styles.link}>Booking</Link> {/* New section */}
        </li>
        <li>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
