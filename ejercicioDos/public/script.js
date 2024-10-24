function calcularTotal(total, calidad) {
    let porcentajePropina;
    switch (calidad) {
        case 'Excelente servicio':
            porcentajePropina = 0.20;
            break;
        case 'Buen servicio':
            porcentajePropina = 0.15;
            break;
        case 'Servicio Regular':
            porcentajePropina = 0.10;
            break;
        default: console.log('No aplica');
        return;    
    }
}


const propina = total * porcentajePropina;


let descuento = 0;
if (total < 200000) {
    descuento = total * 0.20;
} else if (total > 100000) {
    descuento = total * 0.10;
}

const totalFinal = total + propina - descuento;

return {
    propina: propina.toFixed(2),
    descuento: descuento.toFixed(2),
    totalFinal: totalFinal.toFixed(2)
};

const total = 250000
const calidad = 'Excelente'

const resultado = calcularTotal(total, calidad);
console.log(`propina: $${resultado.propina}`);
console.log(`Descuento: $${resultado.descuento}`);
console.log(`Total a pagar: $${resultado.totalFinal}`);


// Fin :)




