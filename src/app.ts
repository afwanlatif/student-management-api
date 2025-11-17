import express from 'express';
import cors from 'cors';
import { envConfig } from './config/env.config';
import { connectDB } from './config/db.config';
import setupRoutes from '../src/router/base.router';

const app = express();

app.use(express.json());
app.use(cors());

setupRoutes(app);

// Server Listen
app.listen(envConfig.port, () => {
    console.log(`Server is running on port ${envConfig.port}`);
});

// Database Connection
connectDB();
