const readline = require('readline-sync');

// Demander à l'utilisateur de saisir un nombre entre 1 et 9
const nombre = readline.questionInt('Veuillez entrer un nombre entre 1 et 9 : ');

if (nombre >= 1 && nombre <= 9) {
    // Afficher les sommes pour le nombre saisi
    let somme = 0;
    for (let i = 1; i <= nombre; i++) {
        somme += i;
    }

    console.log(`La somme des nombres de 1 à ${nombre} est : ${somme}`);
} else {
    console.log('Nombre invalide. Veuillez entrer un nombre entre 1 et 9.');
}
