const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();

app.use(cors());

const port = 3000;

const mongoURI = 'mongodb://127.0.0.1:27017/person';

const connectToMongoDB = async () => {
  try {
    const client = await MongoClient.connect(mongoURI);
    const db =client.db('person');
    console.log('Connected to MongoDB database Person.');

    //try
    const collectionName = 'person_data';
    const collectionExists = await db.listCollections({ name: collectionName }).hasNext();

    if (collectionExists) {
      console.log(`The collection '${collectionName}' exists in the 'person' database.`);
      
      const collection = db.collection('person_data');
    
    // CRUD on MongoDB

    // // Create data

    //   // Single document insertion
    //   const document = { name: 'John Doe', age: 30 };
    //   const result = await collection.insertOne(document);
    //   console.log('Inserted document ID:', result.insertedId);

    //   // Multiple document insertion
    //   var documents = [
    //     { name: 'Jane Smith', age: 25 },
    //     { name: 'Mike Johnson', age: 35 },
    //   ];
    //   const results = await collection.insertMany(documents);
    //   console.log('Inserted document IDs:', results.insertedIds);

    //Reading Part
      var documents = await collection.find().toArray();
      // console.log('\nAll documents:',documents.length,'\n');

      // //Get keys for index 0, as other keys gonna be same too for other indixes
      // const keys = Object.keys(documents[0]);
      // // Iterate through the object properties
      // for (let i=0;i<documents.length;i++){
      //   console.log(`Data ID: ${i}`);
      //   for (x in keys){
      //     key=keys[x];
      //     console.log(`==> ${key} : ${documents[i][key]}`);
      //   }
      // };

    // Update
      // const documentToUpdate = { _id: documents[0][keys[0]] };
      // const updateFields = { $set: { age: 40 } };
      // const updateResult = await collection.updateOne(documentToUpdate, updateFields);
      // console.log('\nUpdated document count:', updateResult.modifiedCount,'\n');

      // console.log('Updated Data:');

      // //Get data again from DB
      // documents = await collection.find().toArray();
      // for (x in keys){
      //   key=keys[x];
      //   console.log(`==> ${key} : ${documents[0][key]}`);
      // }

    // // Delete
    //   const documentToDelete = { _id: documents[0][keys[0]] }; // Replace <documentId> with the actual document ID
    //   const deleteResult = await collection.deleteOne(documentToDelete);
    //   console.log('\nDeleted document count:', deleteResult.deletedCount,'\n');

    //   console.log('Data after deletion:');

    //   //Get data again from DB
    //   documents = await collection.find().toArray();
    //   for (let i=0;i<documents.length;i++){
    //     console.log(`Data ID: ${i}`);
    //     for (x in keys){
    //       key=keys[x];
    //       console.log(`==> ${key} : ${documents[i][key]}`);
    //     }
    //   };

    //Query
      // const query = { age: { $gte: 35 } }; // Example query to find documents with age greater than or equal to 30
      // const documentsMatching = await collection.find(query).toArray();
      // if (documentsMatching.length > 0) {
      //   console.log('\nMatching documents:',documentsMatching.length,'\n');
      //   for (let i=0;i<documentsMatching.length;i++){
      //     console.log(`Matching ID: ${i}`);
      //     for (x in keys){
      //       key=keys[x];
      //       console.log(`==> ${key} : ${documentsMatching[i][key]}`);
      //     }
      //   };
      // } else {
      //   console.log('No matching documents found.');
      // }
    } 
    else {
      console.log(`The collection '${collectionName}' does not exist in the 'person' database.`);
    }

    // Middleware to parse JSON bodies
    app.use(express.json());

    // Sample data
    // let users = [
    //   { id: 1, name: 'John Doe', age: 17 },
    //   { id: 2, name: 'Jane Smith', age: 26 }
    // ];

    const collection = db.collection('person_data');
    var documents = await collection.find().toArray();

    // Route handler for GET /person
    app.get('/person', (req, res) => {
      res.json(documents);
    });

    // Route handler for POST /person
    app.post('/person', async(req, res)  => {
      var id = documents.length + 1;
      const { name, age, gender, mob } = req.body; // Extracting data from the request body
    
      const newPerson = { id, name, age, gender, mob }; // Creating a new person object
    
      const result = await collection.insertOne(newPerson);
      console.log('Inserted document ID:', result.insertedId);
      users.push(newPerson); // Adding the new person to the users array
      res.json('Success.');
      // res.redirect('/person'); // Redirecting to the '/person' route
    });


    // GET /person/:id - Display a form to edit a person with a specified ID
    app.get('/person/:id', (req, res) => {
      const id = parseInt(req.params.id);
      const person = documents.find(p => p.id === id);
      if (!person) {
        res.status(404).json({ error: 'Person not found' });
        return;
      }
      res.json(person);
    });

    // PUT /person/:id - Update a person with a specified ID
    app.put('/person/:id', (req, res) => {
      const id = parseInt(req.params.id);
      const { name, age, gender, mob } = req.body;
      const personIndex = documents.findIndex(p => p.id === id);
      if (personIndex === -1) {
        res.status(404).json({ error: 'Person not found' });
        return;
      }
      documents[personIndex] = { ...documents[personIndex], name, age, gender, mob };
      res.json({ message: `Person updated successfully ` });
    });


    // DELETE /person/:id
    app.delete('/person/:id', (req, res) => {
      const id = parseInt(req.params.id);
      const personIndex = documents.findIndex(p => p.id === id);
      if (personIndex === -1) {
        res.status(404).json({ error: 'Person not found' });
        return;
      }
      const deletedPerson = documents.splice(personIndex, 1);
      res.json({ message: 'Person deleted', deletedPerson });
    });

    app.get('/', (req, res) => {
      res.send('Welcome to the API');
      console.log('GET Empty request....');
    });

    // POST /users - Create a new user
    app.post('/users', (req, res) => {
      console.log('POST User request....');

      const name='Deepak';
      const email = 'deepak@gmail.com';
      // Generate a unique ID for the new user
      const id = users.length + 1;

      // Create the new user object
      const newUser = { id, name, email };

      // Add the new user to the list
      users.push(newUser);
      console.log('User created....');

      res.status(201).json(newUser);
    });

    // Start the server
    const server = app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });

    // // Stop the server
    // server.close(() => {
    //   // CLose the MongoDB
    //   client.close((err) => {
    //     if (err) {
    //       console.error('Error closing MongoDB connection:', err);
    //       return;
    //     }
    
    //     console.log('MongoDB connection closed');
    //   });
    
    //   console.log('Server and Database have been stopped');
    // });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

connectToMongoDB();
