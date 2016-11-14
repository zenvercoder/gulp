class Calculator {
    add (a, b) {
        return a + b
    }
    subtract (a, b) {
        return a - b
    }
    multiply (a, b) {
        return a * b
    }
    divide (a, b) {
        if(a === b){
            return NaN
        }
        return a / b
    }
}

module.exports = Calculator;