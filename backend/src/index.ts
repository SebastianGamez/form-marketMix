// Descripción: Archivo principal de la aplicación

// Dotenv
import dotenv from 'dotenv';

// Config
dotenv.config();

// Express
import express from 'express';

// Routes
import UserController  from './routes/userRoute';

// Cors
import cors from 'cors';

// Set cors to every request from every origin
const corsOptions = {
    origin: '*'
};

// App
const app = express();

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/users', UserController);

const PORT = process.env.PORT || 4000;

// Server
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
