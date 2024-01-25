const readline = require('readline-sync');

let nombre;
let somme = 0;

while (true) {
    // Demander à l'utilisateur de choisir un algorithme
    var algo_choisi = parseInt(readline.questionInt("Choisissez un algo : Entre 1 & 3 (1), Compter jusqu'à taper -1 (2), Répéter la question (3)"));

    if (algo_choisi == 1) {
        nombre = NaN;
        while (isNaN(nombre) || nombre < 1 || nombre > 3) {
            nombre = parseInt(readline.question('Veuillez entrer un nombre entre 1 et 3 : '));
        }
        console.log('Vous avez saisi :', nombre);
        break; // Sortir de la boucle si le choix est valide
    } else if (algo_choisi == 2) {
        do {
            nombre = parseFloat(readline.question('Entrez un nombre (ou -1 pour terminer) : '));

            if (!isNaN(nombre) && nombre !== -1) {
                somme += nombre;
            } else if (nombre !== -1) {
                console.log('Veuillez entrer un nombre valide.');
            }
        } while (nombre !== -1);

        console.log('La somme des nombres entrés (sans inclure -1) est :', somme);
        break; // Sortir de la boucle si le choix est valide
    } else {
        console.log('Option non valide. Veuillez choisir à nouveau.');
    }
}
