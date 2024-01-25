const readline = require('readline-sync');

// Demander à l'utilisateur de saisir un nombre entre 1 et 9
const nombre = readline.questionInt('Veuillez entrer un nombre entre 1 et 9 : ');

if (nombre >= 1 && nombre <= 9) {
    // Afficher la table de multiplication pour le nombre saisi
    for (let i = 1; i <= 10; i++) {
        console.log(`${nombre} * ${i} = ${nombre * i}`);
    }
} else {
    console.log('Nombre invalide. Veuillez entrer un nombre entre 1 et 9.');
}
