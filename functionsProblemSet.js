// 1. isEven()
// Write a function that takes a single numeric argument and returns true 
// if the number is even, and false if otherwise

function isEven(num) {
    return num % 2 === 0;
}

// 2. factorial()
// Write a function that takes a single numeric argument and returns
// the factorial of that number
// 0! = 1

function factorial(num) {
    // define a result variable
    let result = 1;
    // calculate factorial and store value in result
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    // return the result variable
    return result;
}

// 3. kebabToSnake()
// Write a function that takes a single kebab-cased string argument
// and returns the snake_cased version

function kebabToSnake(kebabStr) {
    const myStr = kebabStr;
    let newStr = myStr.replace(/-/g, "_");
    return newStr;
}