var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

var dniNumber = 8043780;
var letterDni = "J";

//Proceso para saber a que letra corresponde el numero del DNI dado
if (dniNumber > 0 && dniNumber < 9999999) {
    // Sacamos el resto de la division entre el numero y 23
    var result = dniNumber % 23;
    // Con el resultado de la anterior operarcion buscamos la letra correspondiente en el array de letras y la almacenamos en una variable
    var letterDetected = letras[result];
} else {
    alert("El numero no es correcto");
}
console.log(letterDetected);

// Comprobamos si corresponden la letra con la letra que nos ha dado el numero de DNI que hemos puesto anteriormente 
if (letterDni == letterDetected) {
    alert("El numero y la letra son correctos");
} else {
    alert("La letra es incorrecta")
};