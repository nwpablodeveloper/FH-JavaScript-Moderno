const pc = [ 'Mohter', 'Micro', 'Ram', 'HHD', 'SSD', 'Refrigeración', 'Fuente' ];

console.log(' ')
console.warn('=== Ciclo For ===')
for (let i = 0; i < pc.length; i++) {    
    console.log( pc[i] );
}

console.log(' ')
console.warn('=== Ciclo For-in ===')

for ( let i in pc ) {    
    console.log( i );  
}

console.log(' ')
console.warn('=== Ciclo For-of ===')

for ( let componente of pc ) {    
    console.log( componente );      
}