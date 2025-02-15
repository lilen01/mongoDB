// Used to connect to the database and retrieve all users from the users collection

// import { connectToDatabase } from './db';
const {connectToDatabase} = require('./db');

let database;

// Connect to the database
connectToDatabase().then((db) => {
	database = db;
	const collection = db.collection('users');	// Get the users collection
	// Find all users in the collection and print them
	collection.find().toArray()
		.then(users => console.log(users))
		.catch(err => console.error('Error retrieving users', err));
});



