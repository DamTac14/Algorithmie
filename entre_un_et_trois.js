const readline = require('readline-sync');

let nombre;

while (isNaN(nombre) || nombre < 1 || nombre > 3) {
    nombre = parseInt(readline.question('Veuillez entrer un nombre entre 1 et 3 : '));
}

console.log('Vous avez saisi :', nombre);
