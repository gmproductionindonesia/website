const fs = require('fs');
const https = require('https');

const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Indonesia_location_map.svg/1024px-Indonesia_location_map.svg.png";
const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
  }
};

https.get(url, options, (res) => {
  const file = fs.createWriteStream('public/images/indonesia-map.png');
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log("Download complete");
  });
});
