// Descripción: Conexión a la base de datos

// Importando el módulo de sequelize
import { Sequelize } from 'sequelize';

// Importando las variables de entorno
const DB_URL: string = process.env.DB_URL!;

// Creando la conexión a la base de datos
const sequelize = new Sequelize(DB_URL);

// Exportando la conexión
export default sequelize;