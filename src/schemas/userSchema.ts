// Descripción: Esquema de usuario

// Importando el módulo de Joi
import Joi from 'joi';


// Definiendo el esquema de usuario
const userSchema = Joi.object({
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
    birthDate: Joi.string()
        .min(3)
        .max(30)
        .required(),

});

// Exportando el esquema
export default userSchema;