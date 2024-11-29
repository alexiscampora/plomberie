// alert("salut")
// Kamel Case
let maVariable = "Hello";

// Les Variables (var=vieux js)
var unTexte = "Voici un texte";

// const= constante
const prenom = "Alex ";

// Let= la variable peux évoluer
let unChiffre = "24";
unChiffre = "2";

let chaine = "Je suis l'une des chaines de caractère";
let newchaines = "Chaine précédente : " + chaine + ". Nouvelle chaine.";

// concatenation altgr 7
let autreconcatenation = `Chaine précédente : ${chaine} . Nouvelle chaine.`;

// Types de données

let string = "Je suis une chaine de caractère";
let number = 24;
let boolean = false;

// tableau : il y a des []
let array = ["je", "suis", 47, true];

// Objet accolades (Clé-->donnée)
let object = {
  prenom: "Audrey",
  age: 33,
  ville: "bordeaux",
};

let total = 0;
total = total + 1;
total++;

total += 5;
total -= 4;
total *= 2;

// console.log(total);

// Structure de controle
let x = 2;
let y = 2;

// if (x > y) {
//   alert("Yes x est plus gros que y");
// } else if (x > y) {
//   alert("Y plus grand");
// } else {
//   alert("Ils sont égaux.");
// }
// On test si la variable est true
if (x) {
  // console.log("x existe");
  // === test l'égalité en type et contenu
}
if (x === y) {
  //   console.log("Ils sont egaux");
} else {
  //   console.log("Pas égaux");
}

let a = 2;
let b = "2";
// == test l'égalité de valeur sans prendre en compte le type
if (a == b) {
  //   console.log("Ils sont égaux.");
} else {
  console.log("pas égaux");
}

// || ou
// && et
// soit l un soit l autre
if (x < y || x > 6) {
  //   console.log("ui");
}
if (x < y && x > 1) {
  console.log("oui");
}

//  LES FONCTIONS

// fonction classique : à l'ancienne
function faireQlqChose() {
  console.log("Je fais un truc");
  console.log(5 + 6);
  alert("calcul terminé");
}
// Il faut impérativement appeler la fonction pour qu'elle se joue
// appel de la fonction : faireQlqChose();

// fonction fléchée
const addition = (a, b) => {
  console.log(a + b);
};

addition(4, 3);
addition(1111, 2156);

// LA PORTEE DES VARIABLES

function add2() {
  let num = 4;
  console.log(num + 2);
}
