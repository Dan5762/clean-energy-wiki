/**
 * Generates a sitemap.xml for the site
 */

const SITE_URL = 'https://cleanenergy.wiki';

/**
 * Generate sitemap XML from the loaded content data
 * @param {Object} data - The loaded content data
 * @returns {string} - The sitemap XML string
 */
export function generateSitemap(data) {
  const today = new Date().toISOString().split('T')[0];

  const urls = [
    // Homepage - highest priority
    {
      loc: SITE_URL,
      lastmod: today,
      changefreq: 'weekly',
      priority: '1.0'
    },
    // About page
    {
      loc: `${SITE_URL}/about.html`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.7'
    }
  ];

  // Add approach pages
  for (const approach of data.approaches) {
    urls.push({
      loc: `${SITE_URL}/approaches/${approach.id}.html`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    });
  }

  // Add concept pages
  for (const concept of data.concepts) {
    urls.push({
      loc: `${SITE_URL}/concepts/${concept.id}.html`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.6'
    });
  }

  // Build XML
  const urlEntries = urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}
