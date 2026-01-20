import styles from './Timeline.module.css';

const journey = [
  {
    date: 'JAN 07, 2026',
    title: '900 Members Milestone',
    description: 'Reached 900 members! The road to 1000 is almost complete.',
    tag: 'Milestone'
  },
  {
    date: 'JAN 03, 2026',
    title: 'Top.gg Award Results',
    description: 'Unfortunately lost the award for "Most Welcoming Server 2025" but we are looking forward to a great year ahead.',
    tag: 'Community'
  },
  {
    date: 'DEC 15, 2025',
    title: '800 Members Milestone',
    description: 'The community grew to 800 members, ending the year on a high note.',
    tag: 'Milestone'
  },
  {
    date: 'DEC 15, 2025',
    title: 'Top.gg Nomination',
    description: 'Got nominated for "Top 4 Most Welcoming Server 2025" by Top.gg! A huge honor for our community.',
    tag: 'Recognition'
  },
  {
    date: 'NOV 21, 2025',
    title: '700 Members Milestone',
    description: 'Hit 700 members milestone.',
    tag: 'Milestone'
  },
  {
    date: 'OCT 13, 2025',
    title: '500 Members Milestone',
    description: 'Halfway to a thousand! Reached 500 active members.',
    tag: 'Milestone'
  },
  {
    date: 'SEP 15, 2025',
    title: '400 Members Milestone',
    description: 'Celebrated reaching 400 members! The community continues to thrive and attract passionate programmers.',
    tag: 'Milestone'
  },
  {
    date: 'AUG 25, 2025',
    title: 'Official Server Logo Released',
    description: 'Unveiled the official CodeVerseHub server logo, giving the community a unique and recognizable identity.',
    tag: 'Identity'
  },
  {
    date: 'AUG 23, 2025',
    title: '300 Members Milestone',
    description: 'Community reached 300 members, continuing the rapid growth and engagement.',
    tag: 'Milestone'
  },
  {
    date: 'AUG 01, 2025',
    title: 'Official Bot Launched',
    description: 'Launched our official server bot "Codeverse" to automate tasks, manage contests, and enhance the community experience.',
    tag: 'Automation'
  },
  {
    date: 'JUL 28, 2025',
    title: '200 Members Milestone',
    description: 'Community doubled to 200 members, showing the growing interest in CodeVerseHub.',
    tag: 'Milestone'
  },
  {
    date: 'JUL 06, 2025',
    title: '100 Members Milestone',
    description: 'Our community reached its first 100 members, marking the beginning of a rapidly growing journey.',
    tag: 'Milestone'
  },
  {
    date: 'JUN 01, 2025',
    title: 'CodeVerseHub Activation',
    description: 'Decision made to actively develop and grow CodeVerseHub. The community started gaining new members daily and the vision became a reality.',
    tag: 'Growth'
  },
  {
    date: 'JUL 17, 2024',
    title: 'CodeVerseHub Founded (Inactive)',
    description: 'Founded with the vision to build a vibrant programming community, remained inactive for several months as the idea matured.',
    tag: 'Vision'
  }
];

const roadmap = [
  {
    date: 'Q1 2026',
    title: '1000 Members Milestone',
    description: 'Scale community to 1000+ active members.'
  }
];

export default function Timeline() {
  return (
    <div className="container section">
      <div style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="section-title" style={{ left: 'auto', transform: 'none' }}>The Journey of CodeVerseHub</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            From a simple idea in 2024 to a thriving community. Explore our milestones and see what's next on our roadmap.
        </p>
      </div>

      <div className={styles.timeline}>
        {journey.map((item, index) => (
          <div key={index} className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <div className={styles.content}>
              <span className={styles.date}>{item.date}</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3>{item.title}</h3>
                  {item.tag && (
                      <span style={{ 
                          fontSize: '0.75rem', 
                          padding: '0.2rem 0.6rem', 
                          borderRadius: '99px', 
                          background: 'rgba(99, 102, 241, 0.1)', 
                          color: 'var(--primary)',
                          border: '1px solid rgba(99, 102, 241, 0.2)'
                      }}>
                          {item.tag}
                      </span>
                  )}
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '6rem', marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>Our Roadmap</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
            What we're building next to empower the community.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {roadmap.map((item, index) => (
                  <div key={index} className="card" style={{ borderTop: '4px solid var(--secondary)' }}>
                      <span style={{ 
                          color: 'var(--secondary)', 
                          fontWeight: 'bold', 
                          fontSize: '0.9rem', 
                          display: 'block', 
                          marginBottom: '0.5rem' 
                      }}>
                          {item.date}
                      </span>
                      <h3 style={{ marginBottom: '0.75rem' }}>{item.title}</h3>
                      <p style={{ color: 'var(--text-muted)' }}>{item.description}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
}
