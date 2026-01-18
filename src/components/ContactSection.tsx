'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import styles from './ContactSection.module.css';

export default function ContactSection() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [charCount, setCharCount] = useState(0);
    const maxChars = 1200;
    const warnChars = 900;
    const dangerChars = 1100;

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');
        
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        try {
            const response = await fetch("https://formspree.io/f/mqakbkrz", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                setCharCount(0);
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    }
    
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCharCount(e.target.value.length);
    };

    const getCounterClass = () => {
        if (charCount > dangerChars) return styles.charDanger;
        if (charCount > warnChars) return styles.charWarning;
        return '';
    };

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Contact Us</h2>
                <div className={styles.grid}>
                    {/* Left Side Info */}
                    <div className={styles.infoContent}>
                        <div>
                            <span className={styles.heading}>Get in Touch</span>
                            <h2 className={styles.title}>Let's Build Something<br />Amazing Together</h2>
                            <p className={styles.description}>
                                Whether you have a question about our projects, want to collaborate, 
                                or just want to say hi, our inbox is always open. Join our community 
                                on Discord for the fastest response!
                            </p>
                        </div>

                        <div className={styles.contactMethods}>
                            <a href="mailto:thecodeversedev@gmail.com" className={styles.method}>
                                <div className={styles.iconBox}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                    </svg>
                                </div>
                                <div className={styles.methodInfo}>
                                    <h4>Email Us</h4>
                                    <p>thecodeversedev@gmail.com</p>
                                </div>
                            </a>

                            <Link href="https://discord.gg/3xKFvKhuGR" target="_blank" className={styles.method}>
                                <div className={styles.iconBox}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <circle cx="12" cy="12" r="2"/>
                                        <path d="M4.93 4.93 19.07 19.07"/>
                                    </svg>
                                </div>
                                <div className={styles.methodInfo}>
                                    <h4>Join Community</h4>
                                    <p>The CodeVerse Hub Discord</p>
                                </div>
                            </Link>

                            <Link href="https://github.com/TheCodeVerseHub" target="_blank" className={styles.method}>
                                <div className={styles.iconBox}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                                    </svg>
                                </div>
                                <div className={styles.methodInfo}>
                                    <h4>Follow Development</h4>
                                    <p>@TheCodeVerseHub</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className={styles.formCard}>
                        {status === 'success' && (
                            <div className={styles.successMessage}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <path d="m9 11 3 3L22 4"/>
                                </svg>
                                Message sent successfully! We'll get back to you soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className={styles.errorMessage}>
                                Failed to send message. Please try again later.
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input 
                                    id="name"
                                    name="name"
                                    type="text" 
                                    required
                                    placeholder="Your full name"
                                    className={styles.input}
                                />
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input 
                                    id="email"
                                    name="email"
                                    type="email" 
                                    required
                                    placeholder="your@email.com"
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject" className={styles.label}>Subject</label>
                                <input 
                                    id="subject"
                                    name="subject"
                                    type="text" 
                                    required
                                    placeholder="What is this about?"
                                    className={styles.input}
                                />
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="How can we help you?"
                                    className={styles.textarea}
                                    onChange={handleMessageChange}
                                    maxLength={maxChars}
                                ></textarea>
                                <span className={`${styles.charCounter} ${getCounterClass()}`}>
                                    {charCount} / {maxChars} chars
                                </span>
                            </div>

                            <button 
                                type="submit" 
                                className={styles.submitBtn}
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <svg className={styles.spinAnimation} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="22" x2="11" y1="2" y2="13"/>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
