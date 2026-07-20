const https = require('https');

function getDirectUrl(pageUrl) {
  return new Promise((resolve, reject) => {
    https.get(pageUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
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
            reject(new Error("Could not find image link in " + pageUrl));
          }
        }
      });
    }).on('error', reject);
  });
}

getDirectUrl("https://ibb.co/YFSVt785")
  .then(directUrl => {
    console.log("Direct link extracted successfully:", directUrl);
  })
  .catch(err => {
    console.error("Error extracting link:", err.message);
  });
