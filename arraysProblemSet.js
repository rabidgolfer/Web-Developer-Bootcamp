// printReverse()
// Write a function that takes an array as an argument and prints out the elements
// in the array in reverse order (don't actually reverse the array itself)

function printReverse(array) {
const reverseArray = new Array();

for (let i = 0; i < array.length; i++) {
    reverseArray.unshift(array[i]);
}
return reverseArray;
}

// ******************************************************************************

// isUniform()
// Write a function which takes an array as an argument and returns
// true if all elements in the array are identical

function isUniform(array) {
    let item = array[0];
    for (let i = 1; i < array.length; i++) {
        if(item === array[i]){
            continue;
        } else {
            return false;
        }   
    }
    return true;
}

// ******************************************************************************

// sumArray()
// write a function that accepts an array of numbers and returns the sum of all numbers in the array

function sumArray(array) {
    let sum =0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

// ******************************************************************************

// max()
// write a function that accepts an array of numbers and returns
// the maximum number in the array

function max(array){
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i];
        } 
    }
    return max;
}