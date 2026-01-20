import fs from 'fs';
import path from 'path';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import AdminContent from './AdminContent';
import LoginForm from './LoginForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

async function getAnnouncements() {
  const filePath = path.join(process.cwd(), 'src/data/announcements.json');
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return [];
  }
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  
  let isAuthenticated = false;
  if (session?.value) {
    try {
      const secret = new TextEncoder().encode(
         process.env.ADMIN_SESSION_SECRET || 'secret'
      );
      await jwtVerify(session.value, secret);
      isAuthenticated = true;
    } catch (e) {
      isAuthenticated = false;
    }
  }

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  const announcements = await getAnnouncements();
  return (
    <>
      <Navbar />
      <AdminContent initialAnnouncements={announcements} />
      <Footer />
    </>
  );
}
