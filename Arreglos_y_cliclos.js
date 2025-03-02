// Arreglo con diferentes tipos de frutas
let frutas = ["manzana", "banana", "manzana", "cereza", "banana", "manzana", "pera", "cereza", "pera", "pera"];

// Objeto para almacenar la cantidad de cada tipo de fruta
let conteoFrutas = {};

// Usando un ciclo for para recorrer el arreglo de frutas
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];  // Obtener la fruta en la posición i
    
    // Si la fruta ya existe en el objeto, incrementar su contador
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        // Si no existe, agregarla al objeto con valor 1
        conteoFrutas[fruta] = 1;
    }
}

// Imprimir el conteo de cada fruta usando el ciclo for
console.log("Conteo de frutas (usando for):");
for (let fruta in conteoFrutas) {
    console.log(`${fruta}: ${conteoFrutas[fruta]}`);
}

// Usando un ciclo while para recorrer el arreglo de frutas
let i = 0;
let conteoFrutasWhile = {};

// Ciclo while para contar las frutas
while (i < frutas.length) {
    let fruta = frutas[i];  // Obtener la fruta en la posición i
    
    // Si la fruta ya existe en el objeto, incrementar su contador
    if (conteoFrutasWhile[fruta]) {
        conteoFrutasWhile[fruta]++;
    } else {
        // Si no existe, agregarla al objeto con valor 1
        conteoFrutasWhile[fruta] = 1;
    }
    
    i++;
}

// Imprimir el conteo de cada fruta usando el ciclo while
console.log("\nConteo de frutas (usando while):");
for (let fruta in conteoFrutasWhile) {
    console.log(`${fruta}: ${conteoFrutasWhile[fruta]}`);
}
