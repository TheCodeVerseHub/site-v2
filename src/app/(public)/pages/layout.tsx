import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import styles from './PagesLayout.module.css';

// We need to read the pages data to generate the sidebar links
async function getPages() {
  const filePath = path.join(process.cwd(), 'src/data/pages.json');
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return {};
  }
}

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pagesData = await getPages();
  const pagesList = Object.keys(pagesData).map(slug => ({
    slug,
    title: pagesData[slug].title
  }));

  // Define some ordering or grouping if needed. For now, simple list.
  // We can group them logically based on the keys if we want to mimic the screenshot perfectly.
  // e.g. Information: Rules, Privacy. Community: Top Members.
  
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        Pages / Content
      </div>
      <div className={styles.contentWrapper}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarTitle}>Server Information</div>
          <ul className={styles.sidebarList}>
            {pagesList.map((page) => (
              <li key={page.slug} className={styles.sidebarItem}>
                <Link href={`/pages/${page.slug}`} className={styles.sidebarLink}>
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className={styles.mainContent}>
            {children}
        </div>
      </div>
    </div>
  );
}
