const {MongoClient} = require('./node_modules/mongodb/lib/index.js');
const op = '$set';
const update = {};
update[op] = {'credits.topup': 1000, 'credits.subscription': 0, role: 'admin'};
MongoClient.connect('mongodb://127.0.0.1:27017').then(async client => {
  const db = client.db('vireo-studio');
  const result = await db.collection('users').updateOne(
    {email: 'veganb67@gmail.com'},
    update
  );
  console.log('Updated:', result.modifiedCount, 'user(s)');
  client.close();
}).catch(e => console.error('Error:', e.message));
