/*
Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e 
stampiamo tutto in console.
*/

"use strict";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const squadre = [
    {
        nome: 'Monza',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Sampdoria',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
]

let minPoints = 0;
let maxPoints = 100;
let minFalli = 0;
let maxFalli = 500;

squadre.forEach((element) => {
    element.puntiFatti = getRndInteger(minPoints,maxPoints);
    element.falliSubiti = getRndInteger(minFalli,maxFalli);  
})

let lista = []

squadre.forEach((element) =>{
    
    //destrutturazione
    let {nome} = element;
    let {falliSubiti} = element;
    
    lista.push(nome,falliSubiti);
})
 
console.log(lista);
