"use strict";
// Descripción: Archivo principal de la aplicación
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dotenv
const dotenv_1 = __importDefault(require("dotenv"));
// Config
dotenv_1.default.config();
// Express
const express_1 = __importDefault(require("express"));
// Routes
const userRoute_1 = __importDefault(require("./routes/userRoute"));
// Cors
const cors_1 = __importDefault(require("cors"));
// Set cors to every request from every origin
const corsOptions = {
    origin: '*'
};
// App
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
// Routes
app.use('/api/users', userRoute_1.default);
const PORT = process.env.PORT || 4000;
// Server
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
