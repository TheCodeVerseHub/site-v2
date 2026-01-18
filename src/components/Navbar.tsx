'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logo.png" 
            alt="CodeVerse Hub Logo" 
            width={40} 
            height={40} 
            className={styles.logoImage} 
          />
          The CodeVerse Hub
        </Link>
        
        <ul className={styles.navLinks}>
          <li><Link href="/" className={styles.navLink}>Home</Link></li>
          <li><Link href="/timeline" className={styles.navLink}>Timeline</Link></li>
          <li><Link href="/pages/resources" className={styles.navLink}>Resources</Link></li>
          
          <li className={styles.dropdown}>
            <span className={styles.navLink} style={{ cursor: 'pointer', gap: '4px' }}>
              More <span style={{ fontSize: '0.8em', display: 'flex' }}>▼</span>
            </span>
            <div className={styles.dropdownContent}>
              <Link href="/pages/faq" className={styles.dropdownItem}>FAQ</Link>
              <Link href="/pages/moderation-guide" className={styles.dropdownItem}>Moderation</Link>
              <div style={{ height: '1px', background: 'var(--border)', margin: '0.5rem 0' }}></div>
              <Link href="/pages/rules" className={styles.dropdownItem}>Rules</Link>
              <Link href="/pages/server-info" className={styles.dropdownItem}>Server Info</Link>
              <Link href="/pages/code-of-conduct" className={styles.dropdownItem}>Code of Conduct</Link>
              <div style={{ height: '1px', background: 'var(--border)', margin: '0.5rem 0' }}></div>
              <Link href="/pages/guides" className={styles.dropdownItem}>Guides</Link>
              <Link href="/pages/tags" className={styles.dropdownItem}>Tags</Link>
              <div style={{ height: '1px', background: 'var(--border)', margin: '0.5rem 0' }}></div>
              <Link href="/pages/privacy-policy" className={styles.dropdownItem}>Privacy Policy</Link>
              <Link href="/pages/security-notice" className={styles.dropdownItem}>Security Notice</Link>
              <Link href="/pages/acknowledgements" className={styles.dropdownItem}>Acknowledgements</Link>
            </div>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a href="https://discord.gg/3xKFvKhuGR" target="_blank" rel="noopener noreferrer" className={`btn ${styles.discordBtn}`}>
            Join Discord
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
