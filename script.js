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


