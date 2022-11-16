//CLASE CONSTRUCTORA
class User {
    constructor(name, lastName, books, pegs) {
        this.name = name
        this.lastName = lastName
        this.books = books
        this.pegs = pegs
    }
    getFullName() {
        return (`${this.name} ${this.lastName}`)
    }
    addPeg(peg) {
        this.pegs.push(peg)
    }
    countPegs() {
        return (this.pegs).length
    }
    addBook(Name, Autor) {
        this.books.push({ name: Name, autor: Autor })
    }
    getBookNames() {
        return this.books.map(book => book.name)
    }
}

// PRUEBA ALEATORIA
const client = new User('Elon', 'Musk', [{ name: 'El Señor de las Moscas', autor: 'Willian Golding' }, { name: 'Fundación', autor: 'Isaac Asimov' }], ['perro'])

console.log('Nombre del cliente: ', client.getFullName())
client.addPeg('gato')
console.log('Cantidad de Mascotas del Cliente: ', client.countPegs())
client.addBook('Viudas Negras', 'Desconocido')
console.log('Nombres de Libros del Cliente: ', client.getBookNames())
