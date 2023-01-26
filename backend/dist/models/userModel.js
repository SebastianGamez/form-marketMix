"use strict";
// Descripción: Modelo de usuario
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importando el módulo de sequelize
const sequelize_1 = require("sequelize");
// Importando la conexión a la base de datos
const database_1 = __importDefault(require("../database/database"));
// Definiendo el modelo de usuario
const UserModel = database_1.default.define('User', {
    key: {
        type: sequelize_1.DataTypes.STRING,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
    },
    fullName: {
        type: sequelize_1.DataTypes.STRING,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
    }
}, { timestamps: false });
UserModel.sync();
exports.default = UserModel;
