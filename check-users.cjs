const {MongoClient} = require('./node_modules/mongodb/lib/index.js');
MongoClient.connect('mongodb://127.0.0.1:27017').then(async client => {
  const db = client.db('vireo-studio');
  const users = await db.collection('users').find({}).toArray();
  console.log('Total users:', users.length);
  users.forEach(u => console.log('Email:', u.email, '| Credits:', JSON.stringify(u.credits)));
  client.close();
}).catch(e => console.error('Error:', e.message));
