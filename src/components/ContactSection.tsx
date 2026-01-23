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
                <div className={styles.headerWrapper}>
                    <h2 className={styles.sectionTitle}>Contact Us</h2>
                </div>
                
                <div className={styles.grid}>
                    {/* Left Side Info */}
                    <div className={styles.infoContent}>
                        <div>
                            <span className={styles.preTitle}>Get in Touch</span>
                            <h2 className={styles.title}>
                                Let's Build Something<br />
                                <span className={styles.highlight}>Amazing Together</span>
                            </h2>
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
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1892.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.1023.2462.1922.3718.2914a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.699.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
                                    </svg>
                                </div>
                                <div className={styles.methodInfo}>
                                    <h4>Join Community</h4>
                                    <p>The CodeVerse Hub Discord</p>
                                </div>
                            </Link>

                            <Link href="https://github.com/TheCodeVerseHub" target="_blank" className={styles.method}>
                                <div className={styles.iconBox}>
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
