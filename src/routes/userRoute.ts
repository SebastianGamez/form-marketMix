// Descripción: rutas de usuario

// Importaciones de express
import express, { Router } from "express";

// Importando el controlador de usuario
import UserController from "../controllers/userController";

// Instanciando el controlador de usuario
const { createUser, getUsers } = new UserController();

// Instanciando el router de express
const userRoute: Router = express.Router();

// Definiendo las rutas
userRoute.post('/register', createUser);

userRoute.get('/users', getUsers);

// Exporting the route
export default userRoute;