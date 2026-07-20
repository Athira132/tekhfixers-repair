const https = require('https');

const urls = [
  "https://ibb.co/HDYwf23H",
  "https://ibb.co/VcBFVLRF",
  "https://ibb.co/yFsLzc4z",
  "https://ibb.co/M5jsVbZv",
  "https://ibb.co/bgzPZnmn"
];

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

async function fetchWithRetry(url, retries = 5, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await getDirectUrl(url);
      return res;
    } catch (err) {
      console.log(`Failed fetch for ${url} (attempt ${i+1}/${retries}): ${err.message}`);
      if (i === retries - 1) throw err;
      await new Promise(r => setTimeout(r, delay * (i + 1)));
    }
  }
}

async function run() {
  const results = [];
  for (const url of urls) {
    console.log("Fetching", url, "...");
    try {
      const direct = await fetchWithRetry(url);
      results.push({ page: url, direct });
      await new Promise(r => setTimeout(r, 1500));
    } catch (err) {
      console.error("Failed completely for", url, err.message);
    }
  }
  console.log("Results:", JSON.stringify(results, null, 2));
}

run();
