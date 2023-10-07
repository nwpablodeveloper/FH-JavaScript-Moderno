console.log('')
console.warn('============ CLASES EJEMPLO 2 ============')
console.warn(' <script src="vehiculo.js"></script>')
console.log('')

class Vehiculo {

    marca;
    tipo;
    color;

    constructor( marca = 'Vacio', tipo = 'Vacio', color = 'Vacio') {

        this.marca = marca;
        this.tipo = tipo;
        this.color = color;

    }

    utilidad( funcionalidad ) {
        console.log( `Este vehiculo se utiliza para: ${ funcionalidad }` )
    }

}

const familiar = new Vehiculo();
console.log(familiar)
familiar.tipo = 'Auto';
familiar.marca = 'Fiat';
familiar.color = 'Blanco';

familiar.utilidad( 'Para ir a la escuela, al trabajo y pasear' );

console.log(familiar);


console.log('')
console.warn('============ SUB-CLASE EJEMPLO 2 ============')


class TransportePublico extends Vehiculo {

    ruta = '';

    constructor( marca, tipo, color ){
        super( marca, tipo, color );
    }

    utilidad( funcionalidad ){
        console.log(`Llevar pasajeros volando`);
        super.utilidad( funcionalidad );
    }
}

const avion = new TransportePublico();
avion.color = 'Rojo';
avion.marca = 'Boing';
avion.tipo = 'Avion';
avion.ruta = 'Aereo'

console.log(avion)
avion.utilidad( `Llevar muchos pasajeros` );

