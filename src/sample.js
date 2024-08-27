const addFunc = (a, b, c) => {
    return a + b + c;
}

const isDivisibleBy5 = (num1) => {
    if (num1 % 5 == 0){
        return true;
    } else {
        return false;
    }
}

const checkOddEven = (number) => {
    if (number % 2 ==0) {
        return "even";
    } else {
        return "odd";
    }
}

module.exports = {
    addFunc,
    isDivisibleBy5,
    checkOddEven
}