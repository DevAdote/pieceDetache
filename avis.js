// Dans l’event listener du fichier avis.js, nous récupérons l’identifiant de la pièce automobile
//pour laquelle l’utilisateur a cliqué sur le bouton “Afficher les avis”. 
//Nous récupérons la valeur de l’attribut data-id grâce à la propriété “dataset.id”.
//Nous utilisons ensuite cet identifiant pour construire le chemin de la ressource sur laquelle créer la requête HTTP avec la fonction fetch.


export function ajoutListenersAvis() {

    const piecesElements = document.querySelectorAll(".fiches article button");
 
    for (let i = 0; i < piecesElements.length; i++) {
 
     piecesElements[i].addEventListener("click", function (event) {
 
        const id = event.target.dataset.id;
        fetch(`http://localhost:8081/pieces/${id}/avis`);
 
     });
 
    }
 
 }
 