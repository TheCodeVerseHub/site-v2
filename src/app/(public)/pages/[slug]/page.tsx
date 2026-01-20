import fs from 'fs';
import path from 'path';
import styles from './Page.module.css';

async function getPageData(slug: string) {
  const filePath = path.join(process.cwd(), 'src/data/pages.json');
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return data[slug] || null;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getPageData(slug);
    if (!data) return { title: 'Not Found' };
    return { title: `${data.title} - CodeVerse Hub` };
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getPageData(slug);

  if (!data) {
    return (
      <div className="container section">
        <h1>Page Not Found</h1>
        <p>The requested page could not be found.</p>
      </div>
    );
  }

  // Basic formatter for newlines and bold text
  const formatContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Handle Headers
      if (line.startsWith('### ')) {
        return <h3 key={i} className={styles.heading3}>{line.replace('### ', '')}</h3>;
      }
      
      // Handle List Items
      if (line.trim().startsWith('* ')) {
         const content = line.trim().substring(2);
         // Split by bold patterns
         const parts = content.split(/(\*\*.*?\*\*)/g);
         return (
             <div key={i} className={styles.listItem}>
                 <span className={styles.bullet}>•</span>
                 <span>
                    {parts.map((part, j) => {
                        // Handle Bold Text
                        if (part.startsWith('**') && part.endsWith('**')) {
                            const innerText = part.slice(2, -2);
                            // Check for links inside bold
                            const linkedText = innerText.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="color: var(--primary)">$1</a>');
                            return <strong key={j} dangerouslySetInnerHTML={{ __html: linkedText }} />;
                        }
                        
                        // Handle Links outside bold
                        const linkedPart = part.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="color: var(--primary)">$1</a>');
                        if (linkedPart !== part) {
                             return <span key={j} dangerouslySetInnerHTML={{ __html: linkedPart }} />;
                        }
                        
                        return part;
                    })}
                 </span>
             </div>
         )
      }

      // Paragraph parsing
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className={styles.paragraph}>
          {parts.map((part, j) => {
            // Handle Bold Text
            if (part.startsWith('**') && part.endsWith('**')) {
                const innerText = part.slice(2, -2);
                // Check for links inside bold
                const linkedText = innerText.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="color: var(--primary)">$1</a>');
                return <strong key={j} dangerouslySetInnerHTML={{ __html: linkedText }} />;
            }
            
            // Handle Links outside bold
            const linkedPart = part.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="color: var(--primary)">$1</a>');
            if (linkedPart !== part) {
                 return <span key={j} dangerouslySetInnerHTML={{ __html: linkedPart }} />;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="container section">
      <div className={styles.pageContent}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.body}>{formatContent(data.content)}</div>
      </div>
    </div>
  );
}
