// ¡Escribe tu código debajo de esta línea!
function FriendsList(arregloNombres){
    this.nombres = arregloNombres;
}

const cantidad = process.argv[3];

let listaNombres = []
    for (let i = 4; i < process.argv.length; i++){
        listaNombres.push(process.argv[i])
    }

const misAmigos = new FriendsList(listaNombres)
console.log(misAmigos.nombres)
// ¡Escribe tu código encima de esta línea!