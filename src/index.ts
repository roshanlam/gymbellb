// src/index.ts
import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3000;

// MongoDB connection string
const mongoUrl = 'your_mongodb_connection_string_here';

// Connect to MongoDB
/*const client = new MongoClient(mongoUrl);
client.connect().then(() => {
  console.log('Connected to MongoDB');
}).catch(err => console.error(err));*/

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express and MongoDB!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
