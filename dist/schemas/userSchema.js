"use strict";
// Descripción: Esquema de usuario
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importando el módulo de Joi
const joi_1 = __importDefault(require("joi"));
// Definiendo el esquema de usuario
const userSchema = joi_1.default.object({
    key: joi_1.default.string()
        .min(3)
        .max(30)
        .alphanum()
        .required(),
    name: joi_1.default.string()
        .min(3)
        .max(30)
        .required(),
    lastName: joi_1.default.string()
        .min(3)
        .max(30)
        .required(),
    fullName: joi_1.default.string()
        .min(3)
        .max(30)
        .required(),
    username: joi_1.default.string()
        .min(3)
        .max(30)
        .required(),
    age: joi_1.default.number()
        .required(),
});
// Exportando el esquema
exports.default = userSchema;
