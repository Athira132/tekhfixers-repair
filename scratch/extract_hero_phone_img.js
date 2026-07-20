const https = require('https');

const pageUrl = "https://ibb.co/5gLbp9Tr";

function getDirectUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i) 
                   || data.match(/<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i);
        if (match && match[1]) {
          resolve(match[1]);
        } else {
          const directMatch = data.match(/https:\/\/i\.ibb\.co\/[^\/]+\/[^"']+/i);
          if (directMatch) {
            resolve(directMatch[0]);
          } else {
            reject(new Error("Could not find image link in " + url));
          }
        }
      });
    }).on('error', reject);
  });
}

getDirectUrl(pageUrl)
  .then(direct => {
    console.log("Direct URL:", direct);
  })
  .catch(err => {
    console.error("Error:", err.message);
  });
