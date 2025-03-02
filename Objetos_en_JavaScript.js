class Libro {
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
        this.capitulos = []; // Lista de capítulos
    }

    describirLibro() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }

    agregarCapitulo(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado al libro "${this.titulo}".`);
    }

    eliminarCapitulo(capitulo) {
        const indice = this.capitulos.indexOf(capitulo);
        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log(`Capítulo "${capitulo}" eliminado del libro "${this.titulo}".`);
        } else {
            console.log(`El capítulo "${capitulo}" no se encontró en el libro "${this.titulo}".`);
        }
    }
}

// Para probar el codigo:
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "disponible");
libro1.describirLibro();
libro1.agregarCapitulo("Capítulo 1: 100 años son poco");
libro1.agregarCapitulo("Capítulo 2: 100 años más tarde");
libro1.eliminarCapitulo("Capítulo 1: 100 años son poco");
console.log(libro1.capitulos);
