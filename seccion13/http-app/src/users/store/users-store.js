import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {

    let users;
    try {        
        users = await loadUsersByPage( state.currentPage + 1  );
    } catch (error) {
        throw new Error('Concta la DB')
    }
    
    if ( users.length === 0) return ;

    state.currentPage += 1;
    state.users = users;

}

const loadPreviousPage = async () => {
    
    if( state.currentPage === 1 ) return; 

    let users;
    try {
        state.users = await loadUsersByPage( state.currentPage - 1 )

    } catch (error) {
        throw new Error('Error al cargar la data prev')
    }

    state.currentPage -=1;

}

const onUserChanged =  () => {
    throw new Error('No implementado');
}

const reloadPage = async () => {
    throw new Error('No implementado');
}


export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]}
     */
    
    getUsers: () => [ ...state.users ],
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage
}