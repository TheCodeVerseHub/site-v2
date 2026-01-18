import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import styles from './Home.module.css';

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
        <div className="container">
          <h1>The CodeVerse Hub</h1>
          <p>
            A community-driven platform for developers to collaborate, learn, and build appropriate software together.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="https://discord.gg/3xKFvKhuGR" target="_blank" className="btn btn-primary">
              Join Our Community
            </Link>
            <Link href="/pages/resources" className="btn" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              Browse Resources
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              CodeVerse Hub is more than just a Discord server. We are a collective of passionate developers, designers, and creators. 
              Whether you are a seasoned pro or just starting your coding journey, you will find a place here to share knowledge, 
              find mentorship, and work on open-source projects.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className={styles.grid}>
            <div className={`card ${styles.projectCard}`}>
              <h3>CodeVerse-Bot</h3>
              <p className="text-muted">Our main customized Discord bot managing economy, moderation, and events.</p>
              <div style={{ marginTop: '1rem' }}>
                <Link href="https://github.com/TheCodeVerseHub/CodeVerse-Bot" target="_blank" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                   View on GitHub
                </Link>
              </div>
            </div>
            <div className={`card ${styles.projectCard}`}>
              <h3>Eigen-Bot</h3>
              <p className="text-muted">The heart of our community fun! Games, utilities, and engaging features.</p>
              <div style={{ marginTop: '1rem' }}>
                <Link href="https://github.com/TheCodeVerseHub/Eigen-Bot" target="_blank" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                   View on GitHub
                </Link>
              </div>
            </div>
            <div className={`card ${styles.projectCard}`}>
              <h3>ModMail-Bot</h3>
              <p className="text-muted">Ensuring smooth communication between members and staff.</p>
              <div style={{ marginTop: '1rem' }}>
                 <Link href="https://github.com/TheCodeVerseHub/ModMail-Bot" target="_blank" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                   View on GitHub
                </Link>
              </div>
            </div>
             <div className={`card ${styles.projectCard}`}>
              <h3>CodeBuddy</h3>
              <p className="text-muted">Our legacy coding quiz bot, now integrated into Eigen.</p>
              <div style={{ marginTop: '1rem' }}>
                 <Link href="https://github.com/TheCodeVerseHub/CodeBuddy" target="_blank" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                   View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Recent Announcements</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {announcements.slice(0, 5).map((announcement: any) => (
              <div key={announcement.id} className={styles.announcementItem}>
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--primary)' }}>{announcement.title}</h3>
                        <span className={styles.announcementDate} style={{ fontSize: '0.8rem', opacity: 0.7 }}>{announcement.date}</span>
                    </div>
                    <p style={{ color: 'var(--text-main)', whiteSpace: 'pre-wrap' }}>{announcement.content}</p>
                </div>
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
