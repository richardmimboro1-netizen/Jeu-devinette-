hereconst bouton = document.getElementById("btn");
const nombre = document.getElementById("nombre");
const resultat = document.getElementById("resultat");
const essais = document.getElementById("essais");
const rejouer = document.getElementById("rejouer");

let nombreSecret = Math.floor(Math.random() * 100) + 1;
let compteur = 0;

bouton.addEventListener("click", function() {

    const proposition = Number(nombre.value);

    if (proposition === 0 || proposition < 1 || proposition > 100) {

        resultat.textContent = "Entre un nombre entre 1 et 100.";

    } else {

        compteur++;

        essais.textContent = compteur;

        if (proposition === nombreSecret) {

            resultat.textContent =
                "🎉 Bravo ! Tu as trouvé le nombre secret !";

        } else if (proposition < nombreSecret) {

            resultat.textContent = "📈 C'est plus grand !";

        } else {

            resultat.textContent = "📉 C'est plus petit !";
        }
    }
});

rejouer.addEventListener("click", function() {

    nombreSecret = Math.floor(Math.random() * 100) + 1;

    compteur = 0;

    essais.textContent = 0;

    resultat.textContent = "";

    nombre.value = "";
});
