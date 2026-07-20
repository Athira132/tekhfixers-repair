const https = require('https');

const urls = [
  // Gallery first section images
  "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1574756587643-f54856c5476c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=800",

  // extraWorkshopPhotos
  "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",

  // customerRepairs
  "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=800",

  // ImgBB direct images
  "https://i.ibb.co/rLg9D5h/image.png",
  "https://i.ibb.co/DgjsCj8n/image.png",
  "https://i.ibb.co/MyPYqZ3j/image.png",
  "https://i.ibb.co/QRwLj07/image.png",
  "https://i.ibb.co/Q7JSyDRz/image.png",
  "https://i.ibb.co/KxmBknMz/image.png",
  "https://i.ibb.co/bMG8Nnqr/image.png",
  "https://i.ibb.co/whhVng3x/image.png"
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
