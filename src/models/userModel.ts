// Descripción: Modelo de usuario

// Importando el módulo de sequelize
import { DataTypes } from 'sequelize';

// Importando la conexión a la base de datos
import db from '../database/database';

// Definiendo el modelo de usuario
const UserModel = db.define('User', {
    key: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    username: {
        type: DataTypes.STRING,
    },
    fullName: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER,
    }

}, {timestamps: false});

UserModel.sync();

export default UserModel;