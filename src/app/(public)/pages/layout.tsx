import Link from 'next/link';
import styles from './PagesLayout.module.css';
import { getAllPages } from '@/lib/api';

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pagesList = getAllPages();

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
