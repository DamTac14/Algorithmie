const readline = require('readline-sync');

// Demander un entier N à l'utilisateur
var nombre_n_choisi = parseFloat(readline.questionInt("Entrez un nombre positif n : "));

calcul_factorielle(nombre_n_choisi)

function calcul_factorielle(n) {
    // Vérifier si n est un nombre entier positif
    if (n < 0 || Math.floor(n) !== n) {
        return "Erreur : Le nombre doit être un entier positif.";
    }

    // Cas de base : 0! et 1! sont égaux à 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Calcul de la factorielle en utilisant une boucle
    var resultat = 1;
    for (var i = 2; i <= n; i++) {
        resultat *= i;
    }

    console.log(resultat);
}