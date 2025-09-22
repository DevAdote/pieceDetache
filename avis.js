// Dans l’event listener du fichier avis.js, nous récupérons l’identifiant de la pièce automobile
//pour laquelle l’utilisateur a cliqué sur le bouton “Afficher les avis”. 
//Nous récupérons la valeur de l’attribut data-id grâce à la propriété “dataset.id”.
//Nous utilisons ensuite cet identifiant pour construire le chemin de la ressource sur laquelle créer la requête HTTP avec la fonction fetch.


// ****************************RESUME SUR LE TRAITEMENT DE LA REPONSE DU SERVEUR*****************

// Pour traiter les réponses de vos requêtes :
//     Utilisez la syntaxe async/await pour mettre en pause le programme en attendant la réponse.
//     Désérialisez (reconstruire) vos données pour décoder le contenu de la réponse.
// Avec cette réponse, vous pouvez mettre à jour la page web.

export function ajoutListenersAvis() {

    const piecesElements = document.querySelectorAll(".fiches article button");
 
    for (let i = 0; i < piecesElements.length; i++) {
 
     piecesElements[i].addEventListener("click", async function (event) {
    // Pour traiter la réponse du serveur, commençons par stocker le résultat de la fonction dans une constante, afin d'attendre le retour de la réponse
    // La réponse de l’API prend la forme d’une chaîne de caractères au format JSON. Nous devons donc désérialiser ce JSON, c’est-à-dire reconstruire les données décrites par la chaîne de caractères dans la mémoire de l’ordinateur.

        const id = event.target.dataset.id;
        const reponse = await fetch(`http://localhost:8081/pieces/${id}/avis`);

    // Pour y parvenir, nous rajoutons un appel à la fonction JSON sur l’objet reponse. Il faut également utiliser le mot clé await, car cette opération est aussi asynchrone
    // Les donnees ont ete reconstruit en format JSON et affecte a une constante 
    
        const avis = await reponse.json();
    
    //Ajout des avis aux domes
        const pieceElement = event.target.parentElement;

        const avisElement = document.createElement("p");
        for (let i = 0; i < avis.length; i++) {
            avisElement.innerHTML += `${avis[i].utilisateur}: ${avis[i].commentaire} <br>`;
        }
        pieceElement.appendChild(avisElement)
     });
 
    }
 
 }
 