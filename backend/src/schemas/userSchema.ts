// Descripción: Esquema de usuario

// Importando el módulo de Joi
import Joi from 'joi';


// Definiendo el esquema de usuario
const userSchema = Joi.object({
    key: Joi.string()
            .min(3)
            .max(30)
            .alphanum()
            .required(),
    name: Joi.string()
            .min(3)
            .max(30)
            .required(),
    lastName: Joi.string()
        .min(3)
        .max(30)
        .required(),    
    fullName: Joi.string()
        .min(3)
        .max(30)
        .required(),
    username: Joi.string()
        .min(3)
        .max(30)
        .required(),
    age: Joi.number()
        .required(),

});

// Exportando el esquema
export default userSchema;