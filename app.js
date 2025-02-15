const {connectToDatabase} = require('./db');

let database;

connectToDatabase().then((db) => {
	database = db;
	const collection = db.collection('users');
	collection.find().toArray()
		.then(users => console.log(users))
		.catch(err => console.error('Error retrieving users', err));
});



