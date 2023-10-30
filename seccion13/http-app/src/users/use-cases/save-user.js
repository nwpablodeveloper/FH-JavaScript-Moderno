import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/users";

/**
 * 
 * @param {like<User>} userLike 
 */
export const saveUser = async ( userLike ) => {
    

    const user = new User( userLike );

    if( !user.firstName || !user.lastName ) {
        throw 'Nombre y apellido requerido'
    }

    const userToSave = userModelToLocalhost( user );
    
    if( user.id ) {
        throw 'No implementada la actualización';
        return;
    }

    const updateUser = await createUser( userToSave );
    return updateUser;

}


/**
 * 
 * @param {like<User>} user 
 */
const createUser = async ( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    console.log(url);
    const res = await fetch( url, {
        method: 'POST',
        body: JSON.stringify( user ),
        headers: {
            'Content-Type': 'application/json'
        }
    } )

    const newUser = await res.json();
    return newUser;

}

