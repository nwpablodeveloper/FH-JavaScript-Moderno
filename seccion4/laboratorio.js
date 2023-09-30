const hoy = new Date();
let dia = hoy.getDay();
console.log(dia);

const semana = {
    0: 'Domingo',
    1: 'Lunes' ,
    2: 'Martes' ,
    3: 'Miércoles' ,
    4: 'Jueves' ,
    5: 'Viernes' ,
    6: 'Sábado' ,
}

console.log( semana[dia] );