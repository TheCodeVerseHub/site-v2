import { MetadataRoute } from 'next'

// Ensure we have a valid base URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codeversehub.com'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
