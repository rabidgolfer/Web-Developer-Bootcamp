// Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");
for (let i = -10; i < 20; i++) {
    console.log(i);
    
}

// Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
for (let i = 10; i < 41; i++) {
    if(i % 2 === 0) {
    console.log(i);
    }
}


// Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
for (let i = 300; i <= 333; i++) {
    if(i % 2 !== 0) {
        console.log(i);
        }
}


// Print all numbers divisible by 5 AND 3, between 5 and 50
console.log("Print all numbers divisible by 5 AND 3, between 5 and 50");
for (let i = 5; i <= 50; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }   
}