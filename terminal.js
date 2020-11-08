  
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
// console.log(team.substring(1));





//Afficher les deux chaines suivantes dans une seule chaine de caractère (concaténation)
// const firstName = 'Tony';
// const lastName = 'Stark';
// const fullName = firstName +' ' + lastName ;
// console.log(fullName);



//Afficher la chaine de caractère suivante avec seulement la première lettre en majuscule.
// let team = 'aveNgers';
// //=> Avengers
// const firstLet = team[0].toUpperCase();
// const restLet = (team.substring(1)).toLowerCase();
// console.log(firstLet + restLet);


// methode splice 
//Les tableaux
//Déclarez un tableau avec 5 villes
//Afficher la ville à l'indice 3
//Ajouter une ville au tableau
//Supprimer la ville à l'indice 2
// let villes = ["paris", "london", "newyork", "prague", "budpest"];
// console.log(villes[3]);
// villes.splice(villes.length, 0, "berlin");
// console.log(villes);
// villes.splice(2, 1);
// console.log(villes);



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
// const a = 3;
// const b = 4;
// const add = (num1, num2) => {
//     return num1 + num2
//     };
// console.log(add(a, b));    

    



    //Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//retourner la valeur i au carré et l'afficher.

// const square = (number) => {
//     return number * 2
// };
// const i = 5 ;
// console.log(square(i));



// En utilisant la methode 'map', mettre la chaine de
// caractère en majuscule.
// const beatles = ["paul", "john", "ringo", "george"];
// const beatlesMaj = beatles.map((element) => element.toUpperCase());

// console.log(beatlesMaj);



//Créez un tableau nommé tab dont le premier
//élément est 2, le deuxième 3 et le troisième 4.
//Créez une fonction qui renvoit la somme des éléments du tableau
// const tab =[2, 3, 4]
// const reducer = (a, b) => a + b; 
// const somme = tab.reduce(reducer);
// console.log(somme);
// //Tri à bulle
// //Classé les éléments du tableau suivant par ordre croissant.
// //Affichez le tableau classé.
// console.log(tab.sort());




                    //Créez une fonction qui renvoie la somme de chaque éléments du
                    //tableau si celui-ci est positif.
                    // const array2 = [-2, 4, -5, 3, 6];
                    // const addPositiveNumber = somme => 
                    // somme.forEach((element)=> {
                    //     if (element >0 )
                    //     somme.reduce((a, b) => a+b )
                    // });
                    // addPositiveNumber(array2)





//Créez une fonction qui prend un parametre 'r' et qui
//renvoie le périmetre d'un cercle.
// const périmetreCercle = (r) => {
//     return 2*r*3.14 
//   };
//   console.log(périmetreCercle(r));




  
  //Créez une fonction qui met la premiere lettre d'un mot en majuscule.
  //Le reste du mot doit être en minuscule.
  //Le mot est "SimPloN"
//   mot = "SimPlon"
//   const capitalize = (word) => {
//      console.log(word[0].toUpperCase() + word.slice(1).toLowerCase());
//   };
//  capitalize(mot) ;                           