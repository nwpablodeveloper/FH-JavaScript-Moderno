
/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */

import { User } from "../models/users";

export const localhostUserToModel = ( localhostUser ) => {


    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name
    } = localhostUser;


    return new User ({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name
    })

}