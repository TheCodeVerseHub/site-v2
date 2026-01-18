'use client';

import { useActionState } from 'react';
import { login } from '../actions';
import styles from '../Home.module.css';

const initialState = {
  success: false,
  message: ''
};

export default function LoginForm() {
  const [state, formAction] = useActionState(login, initialState);

  return (
    <div className="container section">
      <h1 className="section-title">Admin Security</h1>
      <form action={formAction} className={styles.contactForm} style={{ maxWidth: 350, margin: '2rem auto' }}>
        {state?.message && (
          <div style={{ 
            color: 'var(--danger)', 
            background: 'rgba(239, 68, 68, 0.1)', 
            padding: '0.75rem', 
            borderRadius: 'var(--radius)',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            {state.message}
          </div>
        )}
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Username</label>
          <input 
            type="text" 
            name="username"
            placeholder="Enter Username" 
            className={styles.input}
            required
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Password</label>
          <input 
            type="password" 
            name="password"
            placeholder="Enter Password" 
            className={styles.input}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
          Secure Login
        </button>
      </form>
    </div>
  );
}
