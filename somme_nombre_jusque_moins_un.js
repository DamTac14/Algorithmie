const readlineSync = require('readline-sync');

let somme = 0;
let nombre;

do {
    nombre = parseFloat(readlineSync.question('Entrez un nombre (ou -1 pour terminer) : '));

    if (!isNaN(nombre) && nombre !== -1) {
        somme += nombre;
    } else if (nombre !== -1) {
        console.log('Veuillez entrer un nombre valide.');
    }
} while (nombre !== -1);

console.log('La somme des nombres entrés (sans inclure -1) est :', somme);
