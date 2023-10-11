

export const crearTodoHTML = ( todo ) => {
    
    if(  !todo ) throw new Error('El toto es requerido');
    
    const html = `<h5>${ todo.descripcion }</h5>`
    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    

    return liElement;

}