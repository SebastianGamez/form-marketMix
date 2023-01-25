// Descripción: Archivo principal de la aplicación

// Dotenv
import dotenv from 'dotenv';

// Config
dotenv.config();

// Express
import express from 'express';

// Routes
import UserController  from './routes/userRoute';

// App
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api/users', UserController);

const PORT = process.env.PORT || 3000;

// Server
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
