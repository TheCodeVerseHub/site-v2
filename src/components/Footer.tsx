import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3>CodeVerse Hub</h3>
            <p>A community for developers to learn, share, and grow together. Join us to build the future.</p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Community</h4>
              <ul>
                <li><Link href="/pages/rules">Rules</Link></li>
                <li><Link href="/pages/code-of-conduct">Code of Conduct</Link></li>
                <li><Link href="/pages/server-info">Server Info</Link></li>
                <li><Link href="/pages/moderation-guide">Moderation</Link></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Resources</h4>
              <ul>
                <li><Link href="/pages/guides">Guides</Link></li>
                <li><Link href="/pages/tags">Tags</Link></li>
                <li><Link href="/pages/resources">Learning</Link></li>
                <li><Link href="/pages/faq">FAQ</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Legal</h4>
              <ul>
                <li><Link href="/pages/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/pages/security-notice">Security Notice</Link></li>
                <li><Link href="/pages/acknowledgements">Acknowledgements</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Connect</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><a href="https://github.com/TheCodeVerseHub/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://discord.gg/3xKFvKhuGR" target="_blank" rel="noopener noreferrer">Discord</a></li>
                <li><a href="https://instagram.com/thecodeversehub" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="mailto:thecodeversedev@gmail.com">Email Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} CodeVerse Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
