const readlineSync = require('readline-sync');

// Fonction pour saisir une note entre 0 et 20
function saisirNote(message) {
    let note;
    do {
        note = readlineSync.question(message);
        note = parseFloat(note);
    } while (isNaN(note) || note < 0 || note > 20);
    return note;
}

// Initialisation du tableau
let notes = [];

// Saisie des 10 notes dans le tableau
for (let i = 0; i < 10; i++) {
    let note = saisirNote(`Veuillez saisir la note ${i + 1} (entre 0 et 20) : `);
    notes.push(note);
}

// Demander à l'utilisateur l'index de la note souhaitée
const indexNoteDemande = readlineSync.questionInt('Veuillez entrer l\'index de la note que vous souhaitez afficher : ');

// Vérifier si l'index est valide
if (indexNoteDemande >= 0 && indexNoteDemande < notes.length) {
    // Afficher la note correspondante
    console.log(`La note à l'index ${indexNoteDemande} est : ${notes[indexNoteDemande]}`);
} else {
    console.log('Index invalide. Veuillez entrer un index valide.');
}
