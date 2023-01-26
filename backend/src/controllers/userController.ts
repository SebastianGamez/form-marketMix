// Descripción: Controlador de usuario

// Importando los módulos de express
import { Request, Response } from "express";

// Importando el servicio de usuario
import UserService from "../services/userService";

// Importando el tipo de respuesta
import ResType from "../types/responseType";

// Definiendo el controlador de usuario
class UserController {

    // Definiendo el servicio de usuario
    private userService: UserService = new UserService();

    // Este método crea un usuario y retorna una respuesta personalizada
    public createUser = async(req: Request, res: Response) => {

        // Se crea el usuario y se guarda la respuesta en dos variables
        const {successful: userSaved, message}: ResType = await this.userService.createUser(req.body.user);

        // Se verifica la variable result y se envía la respuesta
        if(userSaved) return res.status(200).json({

            status: 200,
            res: message

        });
        res.status(400).json({

            status: 400,
            res: message

        });

    }

    // Este método retorna todos los usuarios
    public getUsers = async(req: Request, res: Response) => {

        // Se obtienen los usuarios y se guarda la respuesta en dos variables
        const {successful: beUsers, message}: ResType = await this.userService.getUsers();

        // Se verifica la variable result y se envía la respuesta
        if(beUsers) return res.status(200).json({

            status: 200,
            res: message

        });
        res.status(200).json({

            status: 200,
            res: message

        });

    }

}

// Exportando el controlador de usuario
export default UserController;