import Personne from './Personne.js';

let response = await fetch("data/data.json"); // on récupère les donnéesdu fichier data.json
let datasJson = await response.json(); // on convertit les données sous la forme d'un tableau d'objets Javascript

datasJson.forEach(element => { // element est un objet Javascript de structure {nom: "Toto", age: 10}
	const personne = new Personne(element.nom, element.age); // personne est une instance de la classe Personne
	personne.afficher(); // on appelle la méthode afficher() définie dans la classe Personne
});
