const https = require('https');
const creds = require('fs').readFileSync('.env.local','utf8')
  .split('\n').find(l=>l.startsWith('HF_CREDENTIALS=')).split('=').slice(1).join('=').trim();
const [keyId, keySecret] = creds.split(':');
console.log('Key ID:', keyId);
console.log('Key Secret length:', keySecret?.length);
