var Calculator = require("../dest/calculator");
var assert = require("assert");

describe("calculator", function(){
    var calculator;

    beforeEach(function(){
        calculator = new Calculator()
    })

    afterEach(function(){
        calculator = null
    })

    it("add numbers", function(){
        assert(4 === calculator.add(1,3))
    })
    it("subtracts numbers", function(){
        assert(4 === calculator.subtract(3, -1))
    })
    it("multiplies numbers", function(){
        assert(4 === calculator.multiply(2, 2))
    })
    it("divides numbers", function(){
        assert(4 === calculator.divide(12, 3))
    })
    it("works", function(){
        return 0;
    })
    // it("doesn't work", function(){
    //     throw new Error("Does not work")
    // })
});