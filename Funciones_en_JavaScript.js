// Array que almacenará los libros leídos
let librosLeidos = [];

// Función para agregar un libro al array
function agregarLibro(titulo) {
    librosLeidos.push(titulo); // Añadir el título del libro al array
    console.log(`Libro agregado: ${titulo}`);
}

// Función para mostrar los libros leídos
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("No has leído ningún libro aún.");
    } else {
        console.log("Libros que has leído:");
        for (let i = 0; i < librosLeidos.length; i++) {
            console.log(`${i + 1}. ${librosLeidos[i]}`);
        }
    }
}

// Agregar libros
agregarLibro("Cien años de soledad");
agregarLibro("Don Quijote de la Mancha");
agregarLibro("Matar a un ruiseñor");

mostrarLibrosLeidos();
