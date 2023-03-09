/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

"use strict";

const bici = [
    {
        nome: 'Tuono',
        peso: 50
    },

    {
        nome: 'Saetta',
        peso: 10
    },

    {
        nome: 'Fulmine',
        peso: 30
    },

    {
        nome: 'Lampo',
        peso: 45
    }
]
//variabile "segnaposto" per trovare la bici più leggera
let biciLeggera = 0;

bici.forEach(element => {
    //controllo logico per trovare la più leggera
    if(biciLeggera === 0 || biciLeggera.peso > element.peso){
        biciLeggera = element;
    }
})
//destructuring dell'oggetto per avere i dati su nome e peso 
const  {nome, peso} = biciLeggera;

//console.log(biciLeggera);

console.log(`La bici più leggera è: ${nome}, con un peso pari a: ${peso} `);