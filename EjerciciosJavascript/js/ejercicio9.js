function letterDiscover (string) {
    if (string == string.toUpperCase()) {
        console.log("La palabra "+ string + " esta en mayusculas");
    } if (string == string.toLowerCase()) {
        console.log("La palabra "+ string + " esta en minusculas");
    } else if (string != string.toUpperCase() && string != string.toLowerCase() ) {
        console.log("La palabra "+ string + " tiene tanto mayusculas como minusculas");
    }
}

letterDiscover("holamundo");

letterDiscover("HolaMundo");

letterDiscover("HOLAMUNDO");