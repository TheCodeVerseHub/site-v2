import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import styles from './PageIndex.module.css';

async function getPages() {
  const filePath = path.join(process.cwd(), 'src/data/pages.json');
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return {};
  }
}

// Map slug to some icon (emoji for simplicity or SVG)
const getIcon = (slug: string) => {
    return null;
}

const getDescription = (slug: string) => {
     switch(slug) {
        case 'rules': return 'View the rules that keep our community safe.';
        case 'faq': return 'Answers to common questions about CodeVerse Hub.';
        case 'resources': return 'A collection of helpful programming resources.';
        case 'join': return 'How to join our Discord server.';
        case 'tags': return 'Explanation of server roles and tags.';
        case 'moderation-guide': return 'Guidelines for our moderation team.';
        case 'code-of-conduct': return 'Our expectations for community behavior.';
        case 'how-to-ask': return 'Learn how to ask questions effectively.';
        case 'contributing': return 'How to contribute to our projects.';
        default: return 'More information.';
    }
}

export default async function PagesIndex() {
  const pagesData = await getPages();
  const pagesList = Object.keys(pagesData).map(slug => ({
    slug,
    title: pagesData[slug].title
  }));

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Server Information</h1>
      <div className={styles.hubGrid}>
        {pagesList.map((page) => (
          <Link href={`/pages/${page.slug}`} key={page.slug} className={styles.hubCard}>
            <div className={styles.cardContent}>
               <h3>{page.title}</h3>
               <p>{getDescription(page.slug)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
