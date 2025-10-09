import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//define a route
app.get('/', (req:Request, res:Response) => {
  res.send('Hello, World');
});

//start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});