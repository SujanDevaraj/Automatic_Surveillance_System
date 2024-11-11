// src/api/proxy.js
import https from 'https';

export default async function handler(req, res) {
  const { ip, port } = req.query;
  const url = `http://${ip}:${port}/video_feed`; // Adjust path if needed

  https.get(url, (videoRes) => {
    res.writeHead(videoRes.statusCode, videoRes.headers);
    videoRes.pipe(res);
  }).on('error', (err) => {
    console.error(err);
    res.status(500).json({ error: 'Error fetching video feed' });
  });
}
