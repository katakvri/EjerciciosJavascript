var numero1 = 5;
var numero2 = 8; 

    if (numero1 < numero2) {
    console.log("numero1 no es mayor que numero 2");
}
    if (Number.isInteger(numero2)) {
        console.log("numero2 es positivo");
} 
    if (!Number.isInteger(numero1)) {
        console.log("numero1 es negativo o distinto de cero");
}
    if (numero1++ & numero1 <= numero2) {
        console.log("Incrementar en 1 unidad el valor del numero1 no lo hace mayor o igual que numero 2");
}
