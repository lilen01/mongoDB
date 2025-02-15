//import mongoose module
const mongoose = require('mongoose');

// Connection URL
const url = require('./atlas_uri.js');

// Connect to MongoDB
mongoose.connect(url)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

    // Define a schema
    const userSchema = new mongoose.Schema({
        name: String,
        password: String,
        age: Number
    }, {
        timestamps: {
            createdAt: true,
            updatedAt: true
        }
    });

    // Create a model
    const User = mongoose.model('User', userSchema);

    // Get records from users collection
    User.find()
        .then(users => console.log(users))
        .catch(err => console.error('Error retrieving users', err));
    
    // insert a record
    const newUser = new User({
        name: 'John Doe',
        password: 'password123',
        age: 30
    });

    newUser.save()
        .then(user => console.log('User saved:', user))
        .catch(err => console.error('Error saving user', err));

    // Insert a record using create function
    // User.create({
    //     name: 'Jane Doe',
    //     password: 'password456',
    //     age: 25
    // })
    //     .then(user => console.log('User created:', user))
    //     .catch(err => console.error('Error creating user', err));