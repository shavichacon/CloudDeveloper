import Calculator from "../src/Calculator";

var assert = require('assert');

describe("Calculator testing...", function () {
    it("use two valid operator for sum", async function () {
        let calculatorService = new Calculator()
        let a : number = 10;
        let b : number = 3;
        let r = calculatorService.sum(a,b);
        assert.equal(r, 13);
    });

    it("use two valid operator for div", async function () {
        let calculatorService = new Calculator()
        let a : number = 30;
        let b : number = 3;
        let r = calculatorService.div(a,b);
        assert.equal(r, 10);
    });

    it("use two valid operator for sub", async function () {
        let calculatorService = new Calculator()
        let a : number = 10;
        let b : number = 3;
        let r = calculatorService.sub(a,b);
        assert.equal(r, 7);
    });

    it("use two valid operator for mult", async function () {
        let calculatorService = new Calculator()
        let a : number = 10;
        let b : number = 3;
        let r = calculatorService.mult(a,b);
        assert.equal(r, 30);
    });


});