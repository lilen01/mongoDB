//import mongoose module
const mongoose = require('mongoose');

// import dotenv module
require('dotenv').config();

// Connection URL
const url = process.env.MONGO;  // add your mongoDB URL here, in my case it is stored in .env file

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
const UserModel = mongoose.model('users', userSchema);

// Insert a record using save function
const newUser = new UserModel({
    name: 'Krishna Salampuriya',
    password: 'password123',
    age: 24
});

newUser.save()
    .then(user => console.log('User saved:', user))
    .catch(err => console.error('Error saving user', err));

// Insert a record using create function
UserModel.create({
    name: 'Shubham Potdukhe',
    password: 'password456',
    age: 25
})
    .then(user => console.log('User created:', user))
    .catch(err => console.error('Error creating user', err));


// Insert a record using insertOne function
UserModel.insertOne({
    name: 'Rahul C R',
    password: 'password456', 
    age: 27
})
    .then(user => console.log('User inserted:', user))
    .catch(err => console.error('Error inserting user', err));

// Insert multiple records using insertMany function
UserModel.insertMany([
    {
        name: 'Kanishka Mankar',
        password: 'password789',
        age: 28
    }, {
        name: 'Prasanna Rathi',
        password: 'password101',
        age : 23
    }
]).then(users => console.log('Users inserted:', users))
    .catch(err => console.error('Error inserting users', err));


// ++++= Read Records =+++++

// read all records
UserModel.find({}).then(users => console.log("All users:", users));

// // read records with conditions
UserModel.findOne({name: 'Krishna Salampuriya'}).then(user => console.log("User with name Krishna Salampuriya:", user));

// // read records with conditions
UserModel.find({age: {$lt: 25}}).then(users => console.log("Users with age less than 25:", users));

// // read record by Id
UserModel.findById('67b0dbda08b5df0210cadd7e').then(user => console.log("User with Id 67b0dbda08b5df0210cadd7e:", user));

// // Count Documents
UserModel.countDocuments().then(count => console.log("Total number of users:", count));

// Model.exists()
UserModel.exists({name: 'Krishna Salampuriya'}).then(exists => console.log("User with name Krishna Salampuriya exists:", exists));


// ++++++++ Update Records +++++++

// update one record
UserModel.updateOne({name: 'Krishna Salampuriya'}, {age: 25}).then(result => console.log("User updated:", result));

// update many records
UserModel.updateMany({age: 25}, {age: 26}).then(result => console.log("Users updated:", result));

// update one record by Id
UserModel.findByIdAndUpdate('67b0dbda08b5df0210cadd7e', {age: 27}).then(result => console.log("User updated by Id:", result));

// update findOneAndUpdate
// return the updated document instead of the original document
// using option {new: true}
UserModel.findOneAndUpdate({name: 'Krishna Salampuriya'}, {age: 33}, {new : true}).then(result => console.log("User updated:", result));


// ++++++++ Delete Records +++++++

// delete one record
UserModel.deleteOne({name: 'Krishna Salampuriya'}).then(result => console.log("User deleted:", result));

// delete many records
UserModel.deleteMany({name : "Prasanna Rathi"}).then(result => console.log("Users deleted:", result));

// delete findByIdAndDelete
UserModel.findByIdAndDelete('67b0dbda08b5df0210cadd7e').then(result => console.log("User deleted by Id:", result));

// delete findOneAndDelete
UserModel.findOneAndDelete({name: 'Kanishka Mankar'}).then(result => console.log("User deleted:", result));


// +++++++ Useing Sort, Limit and Skip ++++++

// sort records ascending
UserModel.find({}).sort({name : 1}).then(users => console.log("Users sorted by name (ascending):", users));

// // sort records descending
UserModel.find({}).sort({name : -1}).then(users => console.log("Users sorted by name (descending):", users));

// // limit the number of records
UserModel.find({}).limit(3).then(users => console.log("Users limited to 3:", users));

// // skip the number of records
UserModel.find({}).skip(2).then(users => console.log("Users skipped 2:", users));

// // select specific fields
UserModel.find({}).select({name: 1}).then(users => console.log("Users with only name field:", users));

// Convert to plain JS objects
UserModel.find({}).lean().then(users => console.log("Users as plain JS objects:", users));


// +++++++ Close Connection ++++++
mongoose.connection.close();