/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */

function snack2(array, numA, numB) {
    let newArray = []
    if (numA < numB) {
        const tempArr = [];
        array.forEach(number => {
            if (number > num1 && number < num2) {
                tempArr.push(number);
            }
        })
        newArray = [numA, ...tempArr, numB];
    }
    else {
        const tempArr = [];
        array.forEach(number => {
            if (number > num2 && number < num1) {
                tempArr.push(number);
            }
        })
        newArray = [numB, ...tempArr, numA];
    }
    return newArray;
}

let num1 = 2;
let num2 = 23;
let numArray = [1, 1, 1, 2, 3, 4, 11, 50, 90];

let newNumArr = snack2(numArray, num1, num2);
message = `Snack2 : ${newNumArr}`;
exercise.push(message);

/* SNACK 3*/
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const zucchina = {
    color: 'green',
    length: 0,
}

const zucchine = [];

zucchine.push({ ...zucchina, length: 10 });
zucchine.push({ ...zucchina, length: 12 });
zucchine.push({ ...zucchina, length: 15 });
zucchine.push({ ...zucchina, length: 20 });
zucchine.push({ ...zucchina, length: 10 });
zucchine.push({ ...zucchina, length: 12 });
zucchine.push({ ...zucchina, length: 18 });
zucchine.push({ ...zucchina, length: 19 });
zucchine.push({ ...zucchina, length: 11 });
zucchine.push({ ...zucchina, length: 17 });
zucchine.push({ ...zucchina, length: 9 });

console.log(zucchine);

function propertyFilter(arrayOfObjects, property, filterValue) {
    const filterArray1 = [];
    const filterArray2 = [];

    arrayOfObjects.forEach((object) => {
        if (object[property] <= filterValue) {
            filterArray1.push(object);
        }
        else if (object[property] > filterValue) {
            filterArray2.push(object);
        }
    })

    return [filterArray1, filterArray2];
}

let zucchineBySize = propertyFilter(zucchine, 'length', 15)
console.log('Zucchine piu corte di 15', zucchineBySize[0]);
console.log('Zucchine piu lunghe di 15', zucchineBySize[1]);
