"use strict";
// Descripción: rutas de usuario
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importaciones de express
const express_1 = __importDefault(require("express"));
// Importando el controlador de usuario
const userController_1 = __importDefault(require("../controllers/userController"));
// Instanciando el controlador de usuario
const { createUser, getUsers } = new userController_1.default();
// Instanciando el router de express
const userRoute = express_1.default.Router();
// Definiendo las rutas
userRoute.post('/register', createUser);
userRoute.get('/users', getUsers);
// Exporting the route
exports.default = userRoute;
