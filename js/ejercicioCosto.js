"use strict"

var costoInicial = 99000;
var costofinal = 0;
var primerDes = 5;
var segundoDes = 10;
var descuent = 0;


if (costoInicial < 30000) {
     console.log ('Estimado usuario su total a pagar es de' + costoInicial)
}
else if (costoInicial >= 30000 && costoInicial < 100000) {
        console.log("Holis");
        descuent = (costoInicial * primerDes)/100
        costofinal= costoInicial - descuent
        console.log('Apreciado usuario su pago inicial es de ' + costoInicial +' pero su total a pagar es de ' + costofinal + ' adquiriendo un 5% en su compra equivalente a $' + descuent)
}
else if (costoInicial >= 100000) {
    descuent = (costoInicial * segundoDes)/100
    costofinal = costoInicial- descuent                
    console.log('Apreciado usuario su pago inicial es de  $' + costoInicial +' pero su total a pagar es de $' + costofinal + ' adquiriendo un 10% en su compra equivalente a $' + descuent)
}
        
