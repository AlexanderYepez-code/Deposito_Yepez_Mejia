// Variabili const non possono essere riasegnate, ma se è un arrar noi possimao inserire i dati dentro anche se questa è una constante

// const PI = 3.14
// // PI = 3.1415; // Errore: riasegnazione non consentita

// const numeri = [1, 2]

// numeri.push(3); // consentito: modifica del contenito 

// // variabili scope
// //queat variabile si puo leggere o modificare in qualsiesi punto del cosice 
// let globale = "visibile ovunque"
// if (true) {
//     let locale = "solo nel blocco";
//     console.log(globale); //ok
//     console.log(locale); // ok

// }
// //console.log(locale); //errore



// // console.log(a); // Errore: non accessibile prima della dichiarazione
// //Hoisting è il comportamento delle dichiarazione di variabili vengono spostate in cima al loro scope durante la conpilazione della dichiaraqzione
// let a = 10;
// // Con var (comportamento diverso)

// console.log(b); // undefined (non errore)

// var b = 20;



let a = 10;
let b = 5;


// Operatori aritmetici

let somma = a + b;        // 15
let differenza = a - b;   // 5
let prodotto = a * b;     // 50
let divisione = a / b;    // 2


// Operatori di confronto

let uguale = (a == "10");   // true (coercizione)
let strettamenteUguale = (a === "10"); // false (tipo diverso)
let maggiore = (a > b);     // true

// Operatori logici

let condizione = (a > 5 && b < 10); // true
let alternativa = (a < 5 || b < 10); // true
let negazione = !(a > b);           // false

// Operatori di assegnazione
let x = 10;
x += 5; // x = x + 5 -> 15
console.log(somma, uguale, strettamenteUguale, condizione);