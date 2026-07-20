const https = require('https');

const urls = [
  "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1581092916357-5896ebc48073?auto=format&fit=crop&q=80&w=800"
];

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve({ url, statusCode: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, statusCode: 'ERROR', error: err.message });
    });
  });
}

Promise.all(urls.map(checkUrl)).then((results) => {
  console.log(JSON.stringify(results, null, 2));
});
