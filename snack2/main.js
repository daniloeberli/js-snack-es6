/*
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/

"use strict";

const list = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78,
    },

    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96,
    },

    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48,
    },

    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74,
    },

    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68,
    },

    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50,
    },

    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84,
    }
]

let userNames = list.map(function(element){
    return `${element.name.toUpperCase()}`;
})

let gradeMore70 = list.filter(function(element){
    if(element.grades > 70){
        return true;
    }
    return false
})

let gradeMore70idMore120 = list.filter(function(element){
    if(element.grades > 70 && element.id > 120){
        return true;
    }
    return false
})


console.log(userNames);
console.log(gradeMore70);
console.log(gradeMore70idMore120);