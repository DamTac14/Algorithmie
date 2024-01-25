const readline = require('readline');

const question_posee = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Demander à l'utilisateur un nombre
question_posee.question("Entrez un nombre : ", function(nombre_1) {
  // Convertir la chaîne en nombre
  nombre_1 = parseInt(nombre_1);

  // Demander à l'utilisateur un autre nombre
  question_posee.question("Entrez un autre nombre : ", function(nombre_2) {
    // Convertir la chaîne en nombre
    nombre_2 = parseInt(nombre_2);

    var addition_des_nombres = (nombre_1 + nombre_2)

    // Calculer le carré des nombres
    var carre_de_la_somme = addition_des_nombres * addition_des_nombres;

    // Afficher un message avec les informations
    console.log("Le carré de la somme de ces nombres est " + carre_de_la_somme + " car " + nombre_1 + " + " + nombre_2 + " = " +  addition_des_nombres + " et que " + addition_des_nombres + "² = " + carre_de_la_somme);

    // Fermer l'interface readline
    question_posee.close();
  });
});

