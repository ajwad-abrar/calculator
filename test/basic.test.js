const calculator = require("../src/basic");

describe('Add', () => {
    it('should return the sum of two numbers', () => {
        // Test case 1: Testing addition with positive numbers
        expect(calculator.add(2, 3)).toBe(5);

        // Test case 2: Testing addition with negative numbers
        expect(calculator.add(-2, -3)).toBe(-5);

        // Test case 3: Testing addition with one positive and one negative number
        expect(calculator.add(5, -3)).toBe(2);

        // Test case 4: Testing addition with zero
        expect(calculator.add(0, 5)).toBe(5);

        // You can add more test cases as needed
    });
});
