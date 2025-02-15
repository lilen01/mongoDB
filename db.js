const { MongoClient } = require('mongodb');
require('dotenv').config();

let uri;

try {
	uri = process.env.MONGODB_URI;
	if (!uri) {
		throw new Error('MongoDB URI is not defined');
	}
} catch (err) {
	console.error('Error loading MongoDB URI:', err);
	process.exit(1);
}

const client = new MongoClient(uri);

const connectToDatabase = async () => {
	try {
		// await client.connect();
		console.log('Connected to database successfully: ' + client.db('userdb').databaseName);
		const db = client.db('userdb');
		return db;
	} catch (err) {
		console.error("Error connecting to the database", err);
	}
};

// const main  = async () => {
// 	try {
// 		await connectToDatabase();
// 	} catch (error) {
// 		console.error("Error connecting to the database", error);
// 	} finally {
// 		// await client.close();
// 		// console.log('Disconnected from database');
// 	}
// };

// main();

module.exports = { connectToDatabase };