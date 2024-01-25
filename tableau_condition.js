const readline = require('readline');

const question_posee = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Demander à l'utilisateur un nombre
question_posee.question("Entrez un nombre A : ", function(nombre_1) {
  // Convertir la chaîne en nombre
  nombre_1 = parseInt(nombre_1);

  // Demander à l'utilisateur un autre nombre
  question_posee.question("Entrez un autre nombre B : ", function(nombre_2) {
    // Convertir la chaîne en nombre
    nombre_2 = parseInt(nombre_2);

    if (nombre_1 < 98 || nombre_2 < 9 || nombre_1 > 210 || nombre_2 > 58) {
        console.log("Vous avez un nombre hors classement");
    } else {
        const condition1 = nombre_1 < 173 && nombre_2 < 21;
        const condition2 = nombre_1 < 168 && (20 < nombre_2 && nombre_2 < 28);
        const condition3 = nombre_1 < 154 && (27 < nombre_2 && nombre_2 < 36);
    
        if (condition1 || condition2 || condition3) {
            console.log(1);
        } else {
            const condition4 = (172 < nombre_1 && nombre_1 < 190) && (nombre_2 < 21);
            const condition5 = (167 < nombre_1 && nombre_1 < 190) && (20 < nombre_2 && nombre_2 < 28);
            const condition6 = (153 < nombre_1 && nombre_1 < 190) && (27 < nombre_2 && nombre_2 < 36);
            const condition7 = (140 < nombre_1 && nombre_1 < 190) && (35 < nombre_2 && nombre_2 < 46);
    
            if (condition4 || condition5 || condition6 || condition7) {
                console.log(2);
            } else {
                const condition8 = (189 < nombre_1 && nombre_1 < 209) && (27 < nombre_2 && nombre_2 < 36);
                const condition9 = (180 < nombre_1 && nombre_1 < 209) && (35 < nombre_2 && nombre_2 < 46);
                const condition10 = (167 < nombre_1 && nombre_1 < 209) && (45 < nombre_2);
    
                if (condition8 || condition9 || condition10) {
                    console.log(3);
                } else {
                    console.log("Case vide");
                }
            }
        }
    }
    


    // Fermer l'interface readline
    question_posee.close();
  });
});

