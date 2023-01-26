"use strict";
// Descripción: Servicio de usuario
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Models
const userModel_1 = __importDefault(require("../models/userModel"));
// Schemas
const userSchema_1 = __importDefault(require("../schemas/userSchema"));
// Definiendo el servicio de usuario
class UserService {
    constructor() {
        // Definiendo el modelo de usuario
        this.userModel = userModel_1.default;
        // Este método crea un usuario y retorna una respuesta personalizada
        this.createUser = (user) => __awaiter(this, void 0, void 0, function* () {
            // Creando una respuesta general
            let response;
            try {
                // Validando la información recibida
                const userValidated = yield userSchema_1.default.validateAsync(user);
                // Verificando si el email ya está registrado
                const userNameRegistered = yield this.userModel.findOne({ where: { username: userValidated.username } });
                // Definiendo el mensaje de respuesta
                let msg;
                if (userNameRegistered === null) {
                    // Creando el usuario
                    yield this.userModel.create(Object.assign({}, userValidated));
                    msg = 'Usuario creado con éxito';
                }
                else
                    msg = `El nombre de usuario ${userValidated.username} ya está registrado`;
                // Definiendo la respuesta
                response = {
                    successful: true,
                    message: msg
                };
            }
            catch (error) {
                // Definiendo la respuesta con el error
                response = {
                    successful: false,
                    message: `Error saving the user ${error}`
                };
            }
            // Retornando la respuesta
            return response;
        });
        // Este método retorna todos los usuarios
        this.getUsers = () => __awaiter(this, void 0, void 0, function* () {
            // Creando una respuesta general
            let response;
            try {
                const users = yield this.userModel.findAll();
                let msg;
                if (users !== null) {
                    msg = [...users];
                }
                else
                    msg = `No hay usuarios registrados`;
                // Definiendo la respuesta
                response = {
                    successful: true,
                    message: msg
                };
            }
            catch (error) {
                // Definiendo la respuesta con el error
                response = {
                    successful: false,
                    message: `Error obteniendo usuarios ${error}`
                };
            }
            // Retornando la respuesta
            return response;
        });
    }
}
// There's exporting the service
exports.default = UserService;
