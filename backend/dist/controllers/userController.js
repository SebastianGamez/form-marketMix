"use strict";
// Descripción: Controlador de usuario
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
// Importando el servicio de usuario
const userService_1 = __importDefault(require("../services/userService"));
// Definiendo el controlador de usuario
class UserController {
    constructor() {
        // Definiendo el servicio de usuario
        this.userService = new userService_1.default();
        // Este método crea un usuario y retorna una respuesta personalizada
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // Se crea el usuario y se guarda la respuesta en dos variables
            const { successful: userSaved, message } = yield this.userService.createUser(req.body.user);
            // Se verifica la variable result y se envía la respuesta
            if (userSaved)
                return res.status(200).json({
                    status: 200,
                    res: message
                });
            res.status(400).json({
                status: 400,
                res: message
            });
        });
        // Este método retorna todos los usuarios
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // Se obtienen los usuarios y se guarda la respuesta en dos variables
            const { successful: beUsers, message } = yield this.userService.getUsers();
            // Se verifica la variable result y se envía la respuesta
            if (beUsers)
                return res.status(200).json({
                    status: 200,
                    res: message
                });
            res.status(200).json({
                status: 200,
                res: message
            });
        });
    }
}
// Exportando el controlador de usuario
exports.default = UserController;
