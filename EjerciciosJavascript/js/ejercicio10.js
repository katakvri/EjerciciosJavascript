function palindrome(string) {
    // Se quitan los espacios
    const replacedSpaces = string.replace(/\s/g, ""); 
    // Se quitan los simbolos
    const replacedSymbols = replacedSpaces.replace(/[\W_]/g, ""); 
    // Se convierte en minusculas
    const lowered = replacedSymbols.toLowerCase(); 
    // Y aqui se crea una variable que almacena la palabra invertida
    const splitted = lowered.split("");
    const reversed = splitted.reverse();
    const joined = reversed.join("");    

    if (lowered == joined) {
        return `La palabra ${joined} es un palindromo`
    } else { 
        return `La palabra ${lowered} no es un palindromo`
    }
  }

console.log(palindrome("ojo"));

console.log(palindrome("Amor a Roma"));

console.log(palindrome("La ruta nos aporto otro paso natural"));