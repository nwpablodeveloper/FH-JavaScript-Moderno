/*  Un local abre de lunes a viernes a las 11 horas
 pero los fines de semana abre a las 9
 indicar al usuario si la hora que entra a la web esta abierte */

 const diaUsuario = 0;
 const horaUsuario = 8;

//  if ( diaUsuario === 0 || diaUsuario === 6 ) {
//     console.log('Fin de semana');
//     horaApertura = 9;
//  } else {
//     console.log('Día de semana');
//     horaApertura = 11
//  }

//  console.log({ horaApertura });

//  if ( horaUsuario >= horaApertura ) {
//     mensaje = 'Esta Abierto'
//  } else {
//     mensaje = 'Esta Cerrado'
//  }


horaApertura = ( [0,6].includes( diaUsuario ) ) ? 9 : 11;
mensaje = ( horaUsuario >= horaApertura ) ? 'Esta Abiertno' : 'Esta Cerrado';

console.log({ horaApertura, mensaje });

