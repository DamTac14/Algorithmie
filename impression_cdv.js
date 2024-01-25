const readline = require('readline');

const question_posee = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Demander à l'utilisateur un nombre
question_posee.question("Combien voulez-vous imprimer de cartes de visite ? ", function (nb_cdv) {
  // Convertir la chaîne en nombre
  nb_cdv = parseInt(nb_cdv);

  // Vérifier si c'est bien un nombre
  if (isNaN(nb_cdv)) {
    console.log("Veuillez entrer un nombre valide.");
    // Fermer l'interface readline
    question_posee.close();
    return;
  }

  var cout_impression;
  if (nb_cdv <= 100) {
    cout_impression = (nb_cdv * 0.4).toFixed(1);
    } else if (nb_cdv <= 200) {
        cout_impression = (100 * 0.4 + (nb_cdv - 100) * 0.3).toFixed(1);
            } else {
            cout_impression = (100 * 0.4 + 100 * 0.3 + (nb_cdv - 200) * 0.2).toFixed(1);
        }
  
  console.log("Vos impressions reviendront à " + cout_impression + "€");

  // Fermer l'interface readline
  question_posee.close();
});
