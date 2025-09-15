// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

    const article = pieces[0];
	const imageElement = document.createElement("img");
	imageElement.src = article.image;
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


	const sectionFiches = document.querySelector(".fiches");
	sectionFiches.appendChild(imageElement);
	sectionFiches.appendChild(nomElement);
	sectionFiches.appendChild(prixElement);
	sectionFiches.appendChild(categorieElement);