import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import styles from '../Home.module.css';

async function getAnnouncements() {
  const filePath = path.join(process.cwd(), 'src/data/announcements.json');
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const announcements = await getAnnouncements();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>THE CODEVERSE HUB</p>
          <h1>
            A community crafted for <br />
            <span className={styles.highlight}>developer success</span> and <span>growth</span>
          </h1>
          <p className={styles.description}>
             Join the CodeVerse Hub to <span className={styles.underline}>collaborate, learn appropriate software practices,</span> and build the future together.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <Link href="/pages/join" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>
              Get started →
            </Link>
            <Link href="/pages/resources" className="btn" style={{ background: 'transparent', border: '1px solid var(--border)', padding: '0.8rem 2rem', fontSize: '1rem', color: 'var(--text-main)' }}>
              Read the docs →
            </Link>
          </div>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
               <span className={styles.featureIcon}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
               </span>
               <span>Community Driven</span>
            </div>
            <div className={styles.featureItem}>
               <span className={styles.featureIcon}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 9v6"/><path d="M16 12H8"/><path d="M12 3v1"/><path d="M3 12h1"/><path d="M12 20v1"/><path d="M20 12h1"/></svg>
               </span>
               <span>Open Source Focused</span>
            </div>
            <div className={styles.featureItem}>
               <span className={styles.featureIcon}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
               </span>
               <span>Rich Resources</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.statsSection}>
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', position: 'relative', display: 'inline-block' }}>
                Who We Are
                <span style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '3px', background: 'var(--primary)', borderRadius: '2px' }}></span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '600px' }}>
                CodeVerse Hub is more than just a Discord server. We are a collective of passionate developers, designers, and creators. 
                Whether you are a seasoned pro or just starting your coding journey, you will find a place here to share knowledge, 
                find mentorship, and work on open-source projects.
              </p>
            </div>
            
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>500+</div>
                <div className={styles.statLabel}>Active Members</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>50+</div>
                <div className={styles.statLabel}>Open Source Projects</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>100+</div>
                <div className={styles.statLabel}>Learning Resources</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>24/7</div>
                <div className={styles.statLabel}>Community Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Featured Projects</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 3v4"/><path d="M3 5h4"/><path d="M3 9h4"/></svg>
          </div>
          
          <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <div className={`card ${styles.projectCard}`}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                   <h3>CodeVerse-Bot</h3>
                   <span style={{ fontSize: '0.7rem', background: 'rgba(147, 51, 234, 0.15)', color: 'var(--primary-light)', padding: '0.15rem 0.5rem', borderRadius: '12px', fontWeight: 600 }}>Featured</span>
                </div>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>Our main customized Discord bot managing economy, moderation, and events.</p>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <Link href="https://github.com/TheCodeVerseHub/CodeVerse-Bot" target="_blank" className="btn" style={{ background: 'transparent', border: '1px solid var(--border)', width: '100%', justifyContent: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   View on GitHub
                </Link>
              </div>
            </div>
            <div className={`card ${styles.projectCard}`}>
              <div>
                <h3>Eigen-Bot</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>The heart of our community fun! Games, utilities, and engaging features.</p>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <Link href="https://github.com/TheCodeVerseHub/Eigen-Bot" target="_blank" className="btn" style={{ background: 'transparent', border: '1px solid var(--border)', width: '100%', justifyContent: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   View on GitHub
                </Link>
              </div>
            </div>
            <div className={`card ${styles.projectCard}`}>
              <div>
                <h3>ModMail-Bot</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>Ensuring smooth communication between members and staff.</p>
              </div>
              <div style={{ marginTop: '1rem' }}>
                 <Link href="https://github.com/TheCodeVerseHub/ModMail-Bot" target="_blank" className="btn" style={{ background: 'transparent', border: '1px solid var(--border)', width: '100%', justifyContent: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   View on GitHub
                </Link>
              </div>
            </div>
             <div className={`card ${styles.projectCard}`}>
               <div>
                  <h3>CodeBuddy</h3>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>Our legacy coding quiz bot, now integrated into Eigen.</p>
               </div>
              <div style={{ marginTop: '1rem' }}>
                 <Link href="https://github.com/TheCodeVerseHub/CodeBuddy" target="_blank" className="btn" style={{ background: 'transparent', border: '1px solid var(--border)', width: '100%', justifyContent: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   View on GitHub
                </Link>
              </div>
            </div>
            <div className={`card ${styles.projectCard}`}>
              <div>
                <h3>CodeVerse Linux Distro</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>A community-driven, Arch-based Linux distribution focused on Wayland.</p>
              </div>
              <div style={{ marginTop: '1rem' }}>
                 <Link href="https://github.com/TheCodeVerseHub/CodeVerseLinuxDistro" target="_blank" className="btn" style={{ background: 'transparent', border: '1px solid var(--border)', width: '100%', justifyContent: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   View on GitHub
                </Link>
              </div>
            </div>
            <div className={`card ${styles.projectCard}`}>
              <div>
                <h3>CodeVerse Site V2</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>The official website for CodeVerse Hub, built with Next.js.</p>
              </div>
              <div style={{ marginTop: '1rem' }}>
                 <Link href="https://github.com/TheCodeVerseHub/site-v2" target="_blank" className="btn" style={{ background: 'transparent', border: '1px solid var(--border)', width: '100%', justifyContent: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
             <h2 className={styles.sectionTitleWithBadge}>
                Recent Announcements
                <span className={styles.newBadge}>New</span>
             </h2>
          </div>
          <div className={styles.announcementsContainer}>
            {announcements.slice(0, 5).map((announcement: any) => (
              <div key={announcement.id} className={styles.announcementItem}>
                 <div className={styles.announcementHeader}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    <h3>{announcement.title}</h3>
                 </div>
                 <div className={styles.announcementDate}>
                    {announcement.date}
                 </div>
                 <p className={styles.announcementContent}>{announcement.content}</p>
              </div>
            ))}
            {announcements.length === 0 && <p style={{ textAlign: 'center' }}>No announcements yet.</p>}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
