import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './Page.module.css';
import { getPageBySlug } from '@/lib/api';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = getPageBySlug(slug);
    if (!data) return { title: 'Not Found' };
    return { title: `${data.title} - CodeVerse Hub` };
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getPageBySlug(slug);

  if (!data) {
    return (
      <div className="container section">
        <h1>Page Not Found</h1>
        <p>The requested page could not be found.</p>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.content}>
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({node, ...props}) => {
                return <Link href={props.href || '#'} target="_blank" className={styles.link}>{props.children}</Link>
            },
            h1: ({node, ...props}) => <h1 className={styles.h1} {...props} />,
            h2: ({node, ...props}) => <h2 className={styles.h2} {...props} />,
            h3: ({node, ...props}) => <h3 className={styles.h3} {...props} />,
            ul: ({node, ...props}) => <ul className={styles.ul} {...props} />,
            ol: ({node, ...props}) => <ol className={styles.ol} {...props} />,
            li: ({node, ...props}) => <li className={styles.li} {...props} />,
            p: ({node, ...props}) => <p className={styles.p} {...props} />,
            code: ({node, className, children, ...props}) => {
                const match = /language-(\w+)/.exec(className || '');
                const isInline = !match && !String(children).includes('\n');
                return isInline ? (
                    <code className={styles.inlineCode} {...props}>{children}</code>
                ) : (
                    <pre className={styles.pre}>
                        <code className={className} {...props}>
                            {children}
                        </code>
                    </pre>
                );
            },
            blockquote: ({node, ...props}) => <blockquote className={styles.blockquote} {...props} />,
          }}
        >
          {data.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}