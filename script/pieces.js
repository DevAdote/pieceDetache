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
	

// Gestion des boutons pour le trie croissant
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
   console.log(piecesFiltrees)
});



// Gestion des boutons pour le trie decroissant
const btnTrieDecroit = document.querySelector(".btn-trierDecroit")
btnTrieDecroit.addEventListener("click",()=>{
    const piecesOrdonnes = Array.from(pieces);

    piecesOrdonnes.sort(function (a,b){
        return b.prix - a.prix;
    })

    console.log(piecesOrdonnes)
});


// Gestion des boutons pour le filtre sans description
const boutonFiltrerDecroit = document.querySelector(".btn-filtrerDescript")
boutonFiltrerDecroit.addEventListener("click",()=>{
    const pieceFiltre = pieces.filter(function (piece){
        return piece.description;
    });
    console.log(pieceFiltre);
});



//PIECE ABORDABLE

const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i >= 0; i--){
   if(pieces[i].prix > 35){
       noms.splice(i,1)
   }
}
console.log(noms)

//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length ; i++){
   const nomElement = document.createElement('li');
   nomElement.innerText = noms[i];
   abordablesElements.appendChild(nomElement)
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
   .appendChild(abordablesElements)


// PIECE DISPONIBLE

const nomDisponible = pieces.map(piece=>piece.nom);
const PrixDisponible = pieces.map(piece=>piece.prix)

for (let i = pieces.length -1; i>=0; i--)
{
    if(pieces[i].disponibilite === false)
    {
        nomDisponible.splice(i,1)
        PrixDisponible.splice(i,1)
    }
    // console.log(` ${nomDisponible[i]} - ${PrixDisponible[i]} €`)
} 

//Creation de la liste
const disponibleElement = document.createElement('ul');

for(let i=0; i<nomDisponible.length; i++){

    const nomElement = document.createElement('li');

    nomElement.innerHTML =` ${nomDisponible[i]} - ${PrixDisponible[i]} €`;

    disponibleElement.appendChild(nomElement)
}
document.querySelector(".disponibles").appendChild(disponibleElement)