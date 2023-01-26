"use strict";
// Descripción: Conexión a la base de datos
Object.defineProperty(exports, "__esModule", { value: true });
// Importando el módulo de sequelize
const sequelize_1 = require("sequelize");
// Importando las variables de entorno
const DB_URL = process.env.DB_URL;
// Creando la conexión a la base de datos
const sequelize = new sequelize_1.Sequelize(DB_URL);
// Exportando la conexión
exports.default = sequelize;
