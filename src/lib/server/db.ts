import { MONGODB_URL } from '$env/static/private';
import { MongoClient } from 'mongodb'

console.log('CONNECTING', MONGODB_URL);
// Connection URL
const client = new MongoClient(MONGODB_URL);

// Database Name
const dbName = 'ablysync_database';
const collectionName = 'ablysync_collection';

await client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const collection = db.collection(collectionName);

export default collection;
