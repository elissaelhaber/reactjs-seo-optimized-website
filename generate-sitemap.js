const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Your base URL
const baseUrl = 'https://hamsterpos.com';

// List your important URLs (you should replace this with actual routes if they are dynamic)
const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/why-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/partners', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 }
];

(async () => {
  const sitemap = new SitemapStream({ hostname: baseUrl });

  // Write the sitemap to an XML file in the public directory
  const writeStream = createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));

  sitemap.pipe(writeStream);

  links.forEach(link => sitemap.write(link));

  sitemap.end();

  await streamToPromise(sitemap);

  console.log('Sitemap created successfully!');
})();
