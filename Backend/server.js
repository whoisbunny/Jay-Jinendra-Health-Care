import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy test API
app.get('/api/test', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});