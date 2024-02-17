// src/index.ts
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

// MongoDB connection DBURL
const DB_URL = process.env.DBURL || 'mongodb+srv://gymbell:ItsSafeAndLit24@cluster0.yg4q8go.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(DB_URL);

client.connect().then(() => {
    console.log('Connected to MongoDB');
    }
).catch((error) => {    
    console.log('Error connecting to MongoDB', error);
    }
);

app.get('/', (req, res) => {
  res.send('Hello World! This is the Gymbell API.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
