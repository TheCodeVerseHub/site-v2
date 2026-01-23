import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const pagesDirectory = path.join(process.cwd(), 'src/content/pages');

export interface PageData {
  slug: string;
  title: string;
  content: string;
  [key: string]: any;
}

export function getPageSlugs() {
  return fs.readdirSync(pagesDirectory);
}

export function getPageBySlug(slug: string): PageData | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(pagesDirectory, `${realSlug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        title: data.title,
        content: content,
        ...data
    };
  } catch (e) {
    return null;
  }
}

export function getAllPages(): PageData[] {
  const slugs = getPageSlugs();
  const pages = slugs
    .map((slug) => getPageBySlug(slug))
    // filter out nulls
    .filter((page): page is PageData => page !== null);
  
  return pages;
}

// Deprecated-ish helper to match old structure if needed for quick refactor
export function getAllPagesAsObject(): Record<string, PageData> {
    const pages = getAllPages();
    const obj: Record<string, PageData> = {};
    pages.forEach(p => {
        obj[p.slug] = p;
    });
    return obj;
}
