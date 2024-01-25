const readline = require('readline-sync');

// Demander un entier N à l'utilisateur
var animal_choisi = readline.question("Entrez un animal : ");

// Mettre les lettres en minuscule 
animal_choisi = animal_choisi.toLowerCase()

cri_animaux(animal_choisi)

function cri_animaux(animal){
    if(animal == "chien") {
        console.log('wouufuuufuufuf')
    } else if (animal == "chat") {
        console.log('mewooowowowow')
    } else if (animal == "mouton") {
        console.log('beehehehehehe')
    } else if (animal == "pigeon") {
        console.log('rouurouuurrrrouuuu')
    } else if (animal == "dragon") {
        console.log('roooaaaarrrrr')
    } else if (animal == "vache") {
        console.log('meeuuuhhhhhmmmm')
    } else {
        console.log('Je ne connais pas cet animal')
    }
}


