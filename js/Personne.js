export default class Personne {
    nom;
    age;
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    afficher() {
        console.log("Je m'appelle " + this.nom + " et j'ai " + this.age + " ans."); // concaténation
        console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`); // template strings

        const div = document.createElement("div");

        const titre = document.createElement("h2");
        titre.innerHTML = this.nom;

        const pAge = document.createElement("p");
        pAge.textContent = this.age + " ans";

        div.appendChild(titre);
        div.appendChild(pAge);

        document.body.appendChild(div);
    }
}