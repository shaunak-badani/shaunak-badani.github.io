import type { MetadataRoute } from 'next';
import { domain } from "@/data/content";
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${domain.name}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${domain.name}/MDBlog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${domain.name}/Natours-React`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
}