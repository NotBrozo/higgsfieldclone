const {MongoClient} = require('./node_modules/mongodb/lib/index.js');
MongoClient.connect('mongodb://127.0.0.1:27017').then(async client => {
  const dbs = await client.db().admin().listDatabases();
  dbs.databases.forEach(d => console.log('Database:', d.name));
  client.close();
}).catch(e => console.error('Error:', e.message));
