  
// Bienvenue à ce premier challenge.

// Pour que les resultats soient visible dans le navigateur, vous utiliserez
// la fonction 'console.log'
// ex: console.log('simplon');
// ex: console.log(nom de la variable);
// Lorque vous avez validé un exercice, mettez le en commentaire !!





//Déclarer deux variables avec comme valeur 4 et 5
//Créez une autre variable contenant l'addition des deux et l'afficher.
//done
// const element1 = 4 ;
// const element2 = 5 ;
// const elements = element1 + element2 ;
// console.log(elements); 



//Afficher la chaine de caractère suivante en majuscule
// const team = 'avengers';

// console.log(team.toUpperCase());



//afficher la première lettre de la chaine de caractère suivante
// const team = 'avengers';
// const firstEl = team[0];
// console.log(firstEl);




//afficher la chaine de caractère suivante exepté la première lettre.
// const team = 'avengers';
// const element2 = team[1];
// const element3 = team[2];
// const element4 = team[3];
// const element5 = team[4];
// const element6 = team[5];
// const element7 = team[6];
// const element8 = team[7];
// const elements = element2 + element3 + element4 + element5 + element6 + element7 +element8;
// console.log(elements);




//Afficher les deux chaines suivantes dans une seule chaine de caractère (concaténation)
// const firstName = 'Tony';
// const lastName = 'Stark';
// const fullName = firstName +' ' + lastName ;
// console.log(fullName);



//Afficher la chaine de caractère suivante avec seulement la première lettre en majuscule.
// let team = 'aveNgers';
// //=> Avengers
// team = team.toLowerCase();
// function name(a){
//     return (a+'').charAt(0).toUpperCase()+a.substr(1);
// }
// console.log(name(team));



//Les tableaux
//Déclarez un tableau avec 5 villes
//Afficher la ville à l'indice 3
//Ajouter une ville au tableau
//Supprimer la ville à l'indice 2
// let villes = ["paris", "london", "newyork", "prague", "budpest"];
// console.log(villes[3]);
// villes = ["paris", "london", "newyork", "prague", "budpest", "berlin"];
// console.log(villes);
// villes =["paris", "london", "prague", "budpest", "berlin"];



//Les boucles
//
//Comme tu le sais sans doute, pour parcourir un tableau,
// il faut bBoucler sur ce tableau. Parcours le tableau suivant afin de monter chaque
//éléments au carré et afficher le tableau.

// const array1 = [2, 4, 8];
// console.log(array1);
// array1.forEach((element)=> {
//     // console.log(Math.pow(element, 2));
// })


// Le tableau suivant indique les notes d'une promo lointaine !
// Calculer la moyenne de cette promo et afficher le resultat
// const promo = [12, 13, 17, 3, 14, 18];
// const reducer = (accumulator, moyenIn) => accumulator + moyenIn; 
// const somme = promo.reduce(reducer);
// const numbreIn = promo.length;
// const moyenPromo =somme/numbreIn ;
// console.log(moyenPromo);



//les conditions

//Déclarez une variable "age" avec la valeur de votre choix.
//En utilisant les conditions 'if' et 'else' affichez :
//peut voter si 'age' est supérieur ou égal à 18
//ne peut pas voter si 'age' est inférieur à 18
// const age = 10;
// if (age>=18){
//     console.log( "peut voter");
// }else{
//     console.log("ne peut pas voter");
// };






// Afficher la date d'aujourd'hui avec javascript.
// En utilisant les conditions 'if' et 'else' affichez :
// "bonjour" si il est en 5h du matin et 17h
// et "bonsoir" s'il est entre 17h et 5h du matin
// const date = new Date();
// const heure   = date.getHours();
// if(5<heure, heure<17){
//     console.log("bonjour");
// }else {
//     console.log("bonsoir");
// };





//----------------- Fonctions -------------------

//Créez deux variables initialisées à 3 et 4.
//Créez une fonction qui retourne l'addition de ces deux valeurs.
const num1 = 3;
const num2 = 4;
// const add = (num1, num2) => {
    const reducer = (a, b) => a + b; 
    console.log(array1.reduce(reducer));

//     const array1 = [1, 2, 3, 4, 5];
// 

// // 1 + 2 + 3 + 4
// 
// // expected output: 10
