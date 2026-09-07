const prompt=require('prompt-sync')();

let librairie=[
{
	livre:1,
	titre:"1984",
	auteur:"George Orwell",
	prix:"200 Dh",
	Quantite:5600,},
{
	livre:2,
		
	titre:"Pride and Prejudice",
	auteur:"Jane Austen",
	prix:"154 Dh",
	Quantite:2300},
{
	livre:3,
	titre:"Don Quixote",
	auteur:"Miguel de Cervantes",
	prix:"144 Dh",
	Quantite:940},
{
	livre:4,
	titre:"Crime and Punishment ",
	auteur:"Fyodor Dostoevsky",
	prix:"123 Dh",
	Quantite:1267}
];

let menue=parseInt(prompt(`
1 pour ajouter un livre au stock

2 pour Afficher tous les livres disponibles

3 pour Rechercher un livre par son titre

4 pour Mettre à jour la quantité d'un livre

5 pour Supprimer un livre du stock

6 pour Afficher le nombre total de livres en stock : `));

if(menue<1 ||


