// Récupération des pièces depuis le fichier JSON
    const reponse = await fetch("../pieces-autos.json");
    const pieces = await reponse.json();

    const article = pieces[0];
    

 for (let i=0; i < pieces.length; i++){

        //Creation d'un article dedier a une piece automobile
        const pieceElement = document.createElement("article");

        const imageElement = document.createElement("img");
	    imageElement.src = pieces[i].image;

	    const nomElement = document.createElement("h2");
	    nomElement.innerText = article.nom;

        const prixElement = document.createElement("p");
        // prixElement.innerText = `Prix: ${article.prix} €`;
        prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;   //L’opérateur ternaire s’utilise lorsque l’on doit choisir entre deux possibilité
                                                                                             //La syntaxe générale de l’opérateur ternaire est formulée ainsi : expression à tester ? valeur si vrai : valeur si faux.
        document.body.appendChild(prixElement);
        const categorieElement = document.createElement("p");  
        // categorieElement.innerText = article.categorie;
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)"; //l’opérateur nullish secrit avec  deux ?? sous la forme suivante :
                                                                                //expression à tester ?? valeur de substitution, 
                                                                            // il prend la valeur de substitution lorsque la valeur est null, et donc qu’elle n’a pas de valeur, ou bien lorsqu’elle est undefined,   


        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "(Pas de description pour le moment.)";

        const disponElement = document.createElement("p");
        disponElement.innerHTML = `Disponibilite: ${article.disponibilite = true ? "En stock" : "Rupture de stock"}`


        //Affichage des elements dans le DOM

        const sectionFiches = document.querySelector(".fiches");
        sectionFiches.appendChild(pieceElement);
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(disponElement);
 }
	

// Gestion des boutons pour le trie
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
  const piecesOrdonnees = Array.from(pieces);

  piecesOrdonnees.sort(function (a, b) {
    return a.prix - b.prix;
  });

  console.log(piecesOrdonnees);
});

// Gestion des boutons pour le filtre
const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.prix <= 35;
   });
});