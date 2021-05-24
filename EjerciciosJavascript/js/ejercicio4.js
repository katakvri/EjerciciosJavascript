var valores = [true, 5, false, "hola", "adios", 2];

var valores_string = [];
var valores_bool = [];
var valores_numb = [];

for (let i = 0; i < valores.length; i++) {
    if (typeof(valores[i]) == "string") {
        valores_string.push(valores[i]);
    } else if (typeof(valores[i]) == "boolean") {
        valores_bool.push(valores[i]);
    } else if (typeof(valores[i]) == "number") {
        valores_numb.push(valores[i]);
    }
};

function bigger(a, b) {
    if (a > b) {
        console.log(`El numero ${a} es mayor que el numero ${b}`);
    } else {
        console.log(`El numero ${b} es mayor que el numero ${a}`);  
    }
};


console.log(valores_string, valores_numb, valores_bool);

bigger(valores_numb[0], valores_numb[1]);

valores_bool[0] = !valores_bool[0];
valores_bool[1] = !valores_bool[1];
console.log(valores_bool);

function allSums() {
    var a = valores_numb[0];
    var b = valores_numb[1];
    var operaciones = `${a} + ${b} es igual a ${a+b}\n${a} - ${b} es igual a ${a-b}\n${a} * ${b} es igual a ${a*b}\n${a} / ${b} es igual ${a/b}\nel resto de la division entre ${a} y ${b} es igual ${a%b}`;
    console.log(operaciones);
}

allSums();

