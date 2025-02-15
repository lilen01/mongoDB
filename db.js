// import { MongoClient } from 'mongodb';
const { MongoClient } = require('mongodb');

// import dotenv module
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

// Create a new MongoClient
const client = new MongoClient(uri);

// Function to connect to the database
const connectToDatabase = async () => {
	try {
		await client.connect();	// Connect to the client
		console.log('Connected to database successfully: ' + client.db('userdb').databaseName); // Print the database name
		const db = client.db('userdb');	// Connect to the database
		return db; // Return the database object
	} catch (err) {
		console.error("Error connecting to the database", err);
	}
};

module.exports = { connectToDatabase };