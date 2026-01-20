import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}>
        <h1 style={{ 
          fontSize: '6rem', 
          fontWeight: 'bold', 
          color: 'var(--primary)',
          marginBottom: '0',
          lineHeight: '1'
        }}>
          404
        </h1>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '1rem',
          color: 'var(--text-main)'
        }}>
          Page Not Found
        </h2>
        <p style={{ 
          color: 'var(--text-muted)', 
          marginBottom: '2rem', 
          maxWidth: '500px',
          fontSize: '1.1rem'
        }}>
          Orbit error! The destination you are trying to reach seems to be lost in the void.
          Check your instruments (URL) or return to base.
        </p>
        <Link 
          href="/" 
          style={{
            backgroundColor: 'var(--primary)',
            color: '#fff',
            padding: '0.75rem 2rem',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontWeight: 600,
            transition: 'background-color 0.2s'
          }}
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </>
  )
}
