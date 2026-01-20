import { MetadataRoute } from 'next'
import pagesData from '@/data/pages.json'

// Ensure we have a valid base URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codeversehub.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static Routes
  const routes = [
    '',
    '/timeline',
    '/admin', // Included but can be omitted if private
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic Routes from pages.json
  const pageRoutes = Object.keys(pagesData).map((slug) => ({
    url: `${baseUrl}/pages/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...routes, ...pageRoutes]
}
