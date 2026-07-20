const https = require('https');

function fetchPage(url, retries = 3) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching ${url} (attempts left: ${retries})...`);
    const req = https.get(url, { 
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
      timeout: 10000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          // Follow redirect
          fetchPage(res.headers.location, retries).then(resolve).catch(reject);
          return;
        }
        resolve(data);
      });
    });

    req.on('error', (err) => {
      if (retries > 1) {
        setTimeout(() => {
          fetchPage(url, retries - 1).then(resolve).catch(reject);
        }, 2000);
      } else {
        reject(err);
      }
    });

    req.on('timeout', () => {
      req.destroy();
      if (retries > 1) {
        setTimeout(() => {
          fetchPage(url, retries - 1).then(resolve).catch(reject);
        }, 2000);
      } else {
        reject(new Error("Timeout reached"));
      }
    });
  });
}

async function extract() {
  try {
    const p1 = await fetchPage("https://ibb.co/F4jkP6vQ");
    const m1 = p1.match(/https:\/\/i\.ibb\.co\/[^\/]+\/[^"']+/i);
    const heroPhoneImage = m1 ? m1[0] : null;

    const p2 = await fetchPage("https://ibb.co/cjjsgGF");
    const m2 = p2.match(/https:\/\/i\.ibb\.co\/[^\/]+\/[^"']+/i);
    const microphoneRepairImage = m2 ? m2[0] : null;

    console.log("Extraction Result:");
    console.log(JSON.stringify({ heroPhoneImage, microphoneRepairImage }, null, 2));
  } catch (err) {
    console.error("Failed:", err.message);
  }
}

extract();
