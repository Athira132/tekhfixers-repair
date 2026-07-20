const https = require('https');

const urls = [
  "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800"
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
