'use client';

import { useState, useActionState } from 'react';
import { addAnnouncement, deleteAnnouncement, editAnnouncement, logout } from '../actions';
import styles from '../Home.module.css';

interface Announcement {
  id: number;
  title: string;
  date: string;
  content: string;
}

const initialState = {
  success: false,
  message: ''
};

export default function AdminContent({ initialAnnouncements }: { initialAnnouncements: Announcement[] }) {
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);
  
  // Forms state
  const [addState, formActionAdd] = useActionState(addAnnouncement, initialState);
  const [editState, formActionEdit] = useActionState(editAnnouncement, initialState);
  
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
      if (confirm('Are you sure you want to delete this?')) {
          const res = await deleteAnnouncement(id);
          if (res.success) {
               setAnnouncements(prev => prev.filter(a => a.id !== id));
          }
      }
  };

  return (
    <div className="container section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 className="section-title" style={{ margin: 0 }}>Admin Dashboard</h1>
        <button onClick={() => logout()} className="btn" style={{ background: 'var(--surface-hover)', border: '1px solid var(--border)' }}>
          Logout
        </button>
      </div>
      
      <div className="card" style={{ maxWidth: 800, margin: '0 auto 4rem auto' }}>
        <h3>Add New Announcement</h3>
        {addState.message && <p style={{ color: addState.success ? 'green' : 'red', marginBottom: '1rem' }}>{addState.message}</p>}
        <form action={formActionAdd} className={styles.contactForm}>
          <input name="title" type="text" placeholder="Announcement Title" className={styles.input} required />
          <textarea name="content" placeholder="Content" rows={5} className={styles.textarea} required></textarea>
          <button type="submit" className="btn btn-primary">Publish Announcement</button>
        </form>
      </div>

      <h2 className="section-title">Manage Announcements</h2>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {announcements.map(announcement => (
              <div key={announcement.id} className="card" style={{ marginBottom: '1rem' }}>
                  {editingId === announcement.id ? (
                       <form action={async (formData) => {
                           await formActionEdit(formData);
                           setEditingId(null);
                           // Simple cheat to refresh data without router refresh
                           window.location.reload(); 
                       }} className={styles.contactForm}>
                           <input type="hidden" name="id" value={announcement.id} />
                           <input name="title" defaultValue={announcement.title} className={styles.input} required />
                           <textarea name="content" defaultValue={announcement.content} className={styles.textarea} rows={4} required />
                           <div style={{ display: 'flex', gap: '1rem' }}>
                               <button type="submit" className="btn btn-primary">Save</button>
                               <button type="button" onClick={() => setEditingId(null)} className="btn" style={{ background: 'var(--border)' }}>Cancel</button>
                           </div>
                       </form>
                  ) : (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <h3 style={{ margin: 0, color: 'var(--primary)' }}>{announcement.title}</h3>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{announcement.date}</span>
                        </div>
                        <p style={{ whiteSpace: 'pre-wrap', marginBottom: '1rem' }}>{announcement.content}</p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button onClick={() => setEditingId(announcement.id)} className="btn" style={{ background: 'var(--secondary)', color: 'white', padding: '0.25rem 0.75rem', fontSize: '0.9rem' }}>Edit</button>
                            <button onClick={() => handleDelete(announcement.id)} className="btn" style={{ background: 'var(--danger)', color: 'white', padding: '0.25rem 0.75rem', fontSize: '0.9rem' }}>Delete</button>
                        </div>
                    </>
                  )}
              </div>
          ))}
      </div>
    </div>
  );
}
