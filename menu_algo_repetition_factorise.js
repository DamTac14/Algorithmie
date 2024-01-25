const readline = require('readline-sync');

let nombre;
let somme = 0;

function saisirNombreEntre1et3() {
    let saisie;
    while (isNaN(saisie) || saisie < 1 || saisie > 3) {
        saisie = parseInt(readline.question('Veuillez entrer un nombre entre 1 et 3 : '));
    }
    return saisie;
}

function compterJusquaTaperNegatif1() {
    let saisie;
    do {
        saisie = parseFloat(readline.question('Entrez un nombre (ou -1 pour terminer) : '));

        if (!isNaN(saisie) && saisie !== -1) {
            somme += saisie;
        } else if (saisie !== -1) {
            console.log('Veuillez entrer un nombre valide.');
        }
    } while (saisie !== -1);

    console.log('La somme des nombres entrés (sans inclure -1) est :', somme);
}

while (true) {
    let algoChoisi = parseInt(readline.questionInt("Choisissez un algo : Entre 1 & 3 (1), Compter jusqu'à taper -1 (2), Répéter la question (3)"));

    switch (algoChoisi) {
        case 1:
            nombre = saisirNombreEntre1et3();
            console.log('Vous avez saisi :', nombre);
            break;
        case 2:
            somme = 0;
            compterJusquaTaperNegatif1();
            break;
        case 3:
            // Répéter la question
            break;
        default:
            console.log('Option non valide. Veuillez choisir à nouveau.');
            continue;
    }

    // Si l'algorithme ne nécessite pas de répétition, sortir de la boucle
    if (algoChoisi !== 3) {
        break;
    }
}
