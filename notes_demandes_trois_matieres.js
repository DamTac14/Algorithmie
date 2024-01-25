const readlineSync = require('readline-sync');

// Initialisation du tableau de notes pour 3 matières
let notes = [];

// Boucle pour chaque matière
for (let matiere = 1; matiere <= 3; matiere++) {
    let notesMatiere = [];

    // Saisie des 10 notes dans la matière
    console.log(`Matière ${matiere}`);
    for (let i = 0; i < 10; i++) {
        let note;
        do {
            note = readlineSync.question(`Veuillez saisir la note ${i + 1} (entre 0 et 20) : `);
            note = parseFloat(note);
        } while (isNaN(note) || note < 0 || note > 20);

        notesMatiere.push(note);
    }

    // Ajout des notes de la matière au tableau principal
    notes.push(notesMatiere);
}

// Affichage du tableau de notes pour chaque matière
for (let matiere = 0; matiere < 3; matiere++) {
    console.log(`Matière ${matiere + 1} :`, notes[matiere]);
}

// Demander à l'utilisateur la matière et l'index de la note souhaitée
const matiereDemandee = readlineSync.questionInt('Veuillez entrer le numéro de la matière (1, 2 ou 3) : ');
const indexNoteDemande = readlineSync.questionInt('Veuillez entrer l\'index de la note que vous souhaitez afficher : ');

// Vérifier si la matière et l'index sont valides
if (matiereDemandee >= 1 && matiereDemandee <= 3 && indexNoteDemande >= 0 && indexNoteDemande < notes[matiereDemandee - 1].length) {
    // Afficher la note correspondante
    console.log(`La note à l'index ${indexNoteDemande} de la matière ${matiereDemandee} est : ${notes[matiereDemandee - 1][indexNoteDemande]}`);
} else {
    console.log('Matière ou index invalide. Veuillez entrer des valeurs valides.');
}
