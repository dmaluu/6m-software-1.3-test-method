const {addFunc, isDivisibleBy5, checkOddEven} = require("./sample");

describe("Test Suite for sample.js functions", ()=>{
    
    it("add 3 numbers", ()=>{
        const result = addFunc(1, 3, 4);
        expect(result).toBe(8);
    })

    it("divisibility by 5", ()=>{
        const result = isDivisibleBy5(5);
        expect(result).toBe(true);
    })

    it("odd or even", ()=>{
        const result = checkOddEven(1999);
        expect(result).toBe("odd");
    })
})