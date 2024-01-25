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

    if(nombre_1 < nombre_2){
        console.log("Le plus grand des deux nombres est " + nombre_2)
        } else if ((nombre_1 > nombre_2)) {
            console.log("Le plus grand des deux nombres est " + nombre_1)
            } else {
                console.log("Vos nombres sont égaux")
            }

    // Fermer l'interface readline
    question_posee.close();
  });
});

