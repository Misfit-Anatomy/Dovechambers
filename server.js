import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

// Explicit assets router with URL decoding support
app.use('/assets', (req, res, next) => {
  try {
    const decodedPath = decodeURIComponent(req.path);
    const assetPath = path.join(__dirname, 'assets', decodedPath);
    res.sendFile(assetPath, (err) => {
      if (err) {
        // Fallback to dist/assets if needed
        const distAssetPath = path.join(__dirname, 'dist', 'assets', decodedPath);
        res.sendFile(distAssetPath, (err2) => {
          if (err2) next();
        });
      }
    });
  } catch {
    next();
  }
});

app.use(express.static(__dirname, { etag: false, maxAge: 0 }));
app.use(express.static(path.join(__dirname, 'dist'), { etag: false, maxAge: 0 }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});

