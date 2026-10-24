const https = require('https');
const fs = require('fs');

const env = fs.readFileSync('.env.local', 'utf8');
const creds = env.split('\n').find(l => l.startsWith('HF_CREDENTIALS=')).split('=').slice(1).join('=').trim();
const [keyId, keySecret] = creds.split(':');

console.log('Testing with Key ID:', keyId.substring(0, 8) + '...');

const body = JSON.stringify({
  prompt: "a red car driving",
  duration: 5
});

const options = {
  hostname: 'api.higgsfield.ai',
  path: '/video/seedance/v1',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Key-ID': keyId,
    'X-Key-Secret': keySecret,
    'Content-Length': Buffer.byteLength(body)
  }
};

const req = https.request(options, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', data);
  });
});

req.on('error', e => console.error('Error:', e.message));
req.write(body);
req.end();
