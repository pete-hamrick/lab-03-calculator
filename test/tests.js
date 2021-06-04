// IMPORT MODULES under test here:
import { add, subtract, multiply, divide } from '../calculations.js';
// import { add } from '../calculator.js';

const test = QUnit.test;

// name your test by what it is testing
test('adds two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(2, 3); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtracts two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(7, 2); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiplies two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(5, 2); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divides two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(4, 2); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});