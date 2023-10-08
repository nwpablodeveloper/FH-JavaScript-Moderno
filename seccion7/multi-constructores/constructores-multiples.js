class Persona {

    static porObjeto( obj ) {
        return new Persona( obj.nombre, obj.apellido, obj.edad, obj.pais, obj.viveEn )
    }
    
    constructor( nombre, apellido, edad, pais, viveEn ) {

        this.nombre     = nombre;
        this.apellido     = apellido;
        this.edad     = edad;
        this.pais     = pais;
        this.viveEn     = viveEn;

    }

    mostrarDatos() {
        console.log(`${ this.nombre } ${ this.apellido } tiene ${ this.edad }, nacido en ${ this.pais } y vive en ${ this.viveEn }`)
    }
}

const   nombre      = 'Pablo',
        apellido    = 'Veiga',
        edad        = 35,
        pais        = 'Argentina',
        viveEn      = 'Barcelona';

const sophi = {
    nombre:     'Sophia',
    apellido:   'Veiga',
    edad:       8,
    pais:       'Argentina',
    viveEn:     'Barcelona'
}

const persona1 = new Persona( nombre, apellido, edad, pais, viveEn );
const persona2 = Persona.porObjeto( sophi );

persona1.mostrarDatos();
persona2.mostrarDatos();

