import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json';
const fontPath = path.join(__dirname, '../public/fonts/helvetiker_regular.typeface.json');

const file = fs.createWriteStream(fontPath);
https.get(fontUrl, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Font downloaded successfully');
  });
}).on('error', (err) => {
  fs.unlink(fontPath);
  console.error('Error downloading font:', err.message);
}); 