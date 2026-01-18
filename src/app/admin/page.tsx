import fs from 'fs';
import path from 'path';
import { cookies } from 'next/headers';
import AdminContent from './AdminContent';
import LoginForm from './LoginForm';

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
  const isAuthenticated = session?.value === (process.env.ADMIN_SESSION_SECRET || 'secret');

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  const announcements = await getAnnouncements();
  return <AdminContent initialAnnouncements={announcements} />;
}
