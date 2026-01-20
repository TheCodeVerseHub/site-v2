'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SignJWT } from 'jose';

const filePath = path.join(process.cwd(), 'src/data/announcements.json');

export async function login(prevState: any, formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  // Basic timing attack mitigation
  await new Promise(resolve => setTimeout(resolve, 500));

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const secret = new TextEncoder().encode(
      process.env.ADMIN_SESSION_SECRET || 'secret'
    );
    const alg = 'HS256';
  
    const jwt = await new SignJWT({ admin: true })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(secret);

    const cookieStore = await cookies();
    cookieStore.set('admin_session', jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });
    // Redirect to trigger a fresh request which will pass the cookie check
    // We can't redirect inside a try/catch if we had one wrapping this
    redirect('/admin');
  } else {
      return { success: false, message: 'Invalid credentials' };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
  redirect('/admin');
}

function getAnnouncements() {
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    } catch {
        return [];
    }
}

function saveAnnouncements(announcements: any[]) {
    fs.writeFileSync(filePath, JSON.stringify(announcements, null, 2));
}

export async function addAnnouncement(prevState: any, formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  
  if (!title || !content) {
    return { success: false, message: 'Title and content are required' };
  }

  try {
    const announcements = getAnnouncements();
    
    const newAnnouncement = {
      id: Date.now(),
      title,
      date: new Date().toISOString().split('T')[0],
      content
    };
    
    announcements.unshift(newAnnouncement);
    saveAnnouncements(announcements);
    
    revalidatePath('/');
    return { success: true, message: 'Announcement added successfully!' };
  } catch (error) {
    return { success: false, message: 'Failed to save announcement' };
  }
}

export async function deleteAnnouncement(id: number) {
    try {
        let announcements = getAnnouncements();
        announcements = announcements.filter((a: any) => a.id !== id);
        saveAnnouncements(announcements);
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        return { success: false, message: 'Failed to delete announcement' };
    }
}

export async function editAnnouncement(prevState: any, formData: FormData) {
    const id = parseInt(formData.get('id') as string);
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    if (!id || !title || !content) {
        return { success: false, message: 'Missing fields' };
    }

    try {
        const announcements = getAnnouncements();
        const index = announcements.findIndex((a: any) => a.id === id);
        
        if (index !== -1) {
            announcements[index] = { ...announcements[index], title, content };
            saveAnnouncements(announcements);
            revalidatePath('/');
            return { success: true, message: 'Announcement updated successfully!' };
        }
        return { success: false, message: 'Announcement not found' };
    } catch (error) {
        return { success: false, message: 'Failed to update announcement' };
    }
}
