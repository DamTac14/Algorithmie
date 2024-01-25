const readline = require('readline');

const question_posee = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Demander à l'utilisateur son nom
question_posee.question("Entrez votre nom : ", function(nom) {
  // Demander à l'utilisateur son prénom
  question_posee.question("Entrez votre prénom : ", function(prenom) {
    // Afficher un message avec les informations
    console.log("Bonjour, " + prenom + " " + nom + " !");
    
    // Fermer l'interface readline
    question_posee.close();
  });
});
