const readline = require('readline-sync');

// Demander un entier N à l'utilisateur
var n = parseInt(readline.questionInt("Entrez un entier N :"));

// Vérifier si l'entrée est un nombre valide
if (isNaN(n) || n <= 0) {
    alert("Veuillez entrer un nombre entier positif.");
} else {
    // Boucle pour chaque ligne de 1 à N
    for (var i = 1; i <= n; i++) {
        // Afficher les nombres de 1 à i pour chaque ligne
        var ligne = "";
        for (var j = 1; j <= i; j++) {
            ligne += j + " ";
        }
        console.log(ligne);
    }
}