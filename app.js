const { MongoClient } = require('mongodb');
let uri;

try {
	uri = require('./atlas_uri.js');
	if (!uri) {
		throw new Error('MongoDB URI is not defined');
	}
} catch (err) {
	console.error('Error loading MongoDB URI:', err);
	process.exit(1);
}

console.log(uri);

const client = new MongoClient(uri);
const dbName = 'userdb';

const connectToDatabase = async () => {
	try {
		await client.connect();
		console.log('Connected to database: ' + dbName);
	} catch (err) {
		console.error("Error connecting to the database", err);
	}
};

const main  = async () => {
	try {
		await connectToDatabase();

		const db = client.db(dbName);
		const collection = db.collection();

	} catch (error) {
		console.error("Error connecting to the database", error);
	} finally {
		await client.close();
		console.log('Disconnected from database');
	}
};

main();