// Descripción: Servicio de usuario

// Types
import ResType from '../types/responseType';
import UserType from "../types/userType";

// Models
import UserModel from "../models/userModel";

// Schemas
import userSchema from '../schemas/userSchema';


// Definiendo el servicio de usuario
class UserService {

    // Definiendo el modelo de usuario
    private userModel = UserModel;

    // Este método crea un usuario y retorna una respuesta personalizada
    public createUser = async(user: UserType): Promise<ResType> => {

        // Creando una respuesta general
        let response: ResType;

        try{
             // Validando la información recibida
            const userValidated = await userSchema.validateAsync(user);

             // Verificando si el email ya está registrado
            const userNameRegistered = await this.userModel.findOne({ where: {username: userValidated.username} })
            
            // Definiendo el mensaje de respuesta
            let msg: string;
            if(userNameRegistered === null){

                // Creando el usuario
                await this.userModel.create( 
                    { 
                        ...userValidated,
                    } 
                );

                msg = 'Usuario creado con éxito';

            } else msg = `El nombre de usuario ${userValidated.username} ya está registrado`;
            
            // Definiendo la respuesta
            response = {
                successful: true,
                message: msg
            }

        } catch(error){

            // Definiendo la respuesta con el error
            response = {
                successful: false,
                message: `Error saving the user ${error}`
            }
        }

        // Retornando la respuesta
        return response;

    }
    
    // Este método retorna todos los usuarios
    public getUsers = async(): Promise<ResType> => {

        // Creando una respuesta general
        let response: ResType;

        try{
            
            const users = await this.userModel.findAll();
            
            let msg;
            if(users !== null){
                msg = [...users];

            }else msg = `No hay usuarios registrados`;
            
            
            // Definiendo la respuesta
            response = {
                successful: true,
                message: msg
            }

        } catch(error){

            // Definiendo la respuesta con el error
            response = {
                successful: false,
                message: `Error obteniendo usuarios ${error}`
            }
        }

        // Retornando la respuesta
        return response;

    }

}

// There's exporting the service
export default UserService;