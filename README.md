# mongoDB

## Introduction

This project demonstrates the use of MongoDB, a NoSQL database, for storing and managing data. It also utilizes Mongoose, an ODM (Object Data Modeling) library for MongoDB and Node.js, to provide a straightforward, schema-based solution to model your application data.

## Prerequisites

- MongoDB installed on your machine
- Node.js installed on your machine

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/lilen01/mongoDB.git
    ```
2. Navigate to the project directory:
    ```bash
    cd mongoDB
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the MongoDB server:
    ```bash
    mongod
    ```
2. Run the application:
    ```bash
    npm start
    ```

## MongoDB and Mongoose

### MongoDB

MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. Here are some key features:
- **Flexible Schema**: Unlike SQL databases, MongoDB does not require a predefined schema.
- **Scalability**: MongoDB can handle large volumes of data and can be scaled horizontally.
- **High Performance**: MongoDB provides high performance for read and write operations.

### Mongoose

Mongoose is an ODM library for MongoDB and Node.js. It provides a schema-based solution to model your application data. Some of its features include:
- **Schema Definitions**: Define the structure and data types of your documents.
- **Validation**: Built-in validation for schema fields.
- **Middleware**: Support for pre and post hooks for various operations.

### CRUD Operations

CRUD stands for Create, Read, Update, and Delete. These are the basic operations you can perform on a database.

#### Create

To create a new document in MongoDB using Mongoose:
```javascript
const newDocument = new Model({
  field1: 'value1',
  field2: 'value2'
});
newDocument.save((err) => {
  if (err) return handleError(err);
  // Document saved successfully
});
```

#### Read

To read documents from MongoDB using Mongoose:
```javascript
Model.find({}, (err, documents) => {
  if (err) return handleError(err);
  // documents contains the list of retrieved documents
});
```

#### Update

To update a document in MongoDB using Mongoose:
```javascript
Model.updateOne({ _id: id }, { field1: 'newValue' }, (err, res) => {
  if (err) return handleError(err);
  // Document updated successfully
});
```

#### Delete

To delete a document from MongoDB using Mongoose:
```javascript
Model.deleteOne({ _id: id }, (err) => {
  if (err) return handleError(err);
  // Document deleted successfully
});
```

## Features

- Connect to MongoDB
- Perform CRUD operations
- Query the database

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.