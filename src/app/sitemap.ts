import { MetadataRoute } from 'next';
import { cruisesData } from '@/data/cruisesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://iphonix.in';
  
  // Static pages
  const staticPages = ['', '/about', '/contact', '/book', '/gallery', '/privacy', '/terms'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic cruise pages
  const cruisePages = Object.keys(cruisesData).map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...cruisePages];
}
