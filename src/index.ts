import express from 'express';
import cors from 'cors';
import { connectDB } from './db';
import routes from './routes';
import {authenticate} from './auth';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! This is the Gymbell API.');
});

app.use('/api/auth', routes);

app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'You have accessed a protected route' });
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});