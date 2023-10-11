
import { v4 as uuidv4 } from 'uuid';

export class Todo {

    /**
     * 
     * @param {String} descripcion 
     */
    
    constructor( descripcion ) {
        this.id             = uuidv4();
        this.descripcion    = descripcion;
        this.done           = false;            // por defecto la terea esta incompleta
        this.creatAt        = new Date();

    }

}