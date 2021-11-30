// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem
} from '../functions.js';

const { test, skip } = QUnit;

test('This function should take a blank string and add return an new string that adds three exclamation points to the argument.', (expect) => {
    const expected = '!!!';
    const actual = addExclamationPoints();
    expect.equal(actual, expected, 'Should return "!!!"');

    const expected1 = 'Get Back!!!';
    const actual1 = addExclamationPoints('Get Back');
    expect.equal(expected1, actual1, 'Should return "Get Back" with "!!!" on the end. I.e. "Get Back!!!"');

    const expected2 = "Don't Let Me Down!!!";
    const actual2 = addExclamationPoints("Don't Let Me Down");
    expect.equal(expected2, actual2, `Should return "Don't Let Me Down" with "!!!" on the end. I.e. "Don't Let Me Down!!!"`);
});

test('This function should take in a number and multiply it by seven', (expect) => {
    const expected = 42;
    const actual = multiplyBySeven(6);
    expect.equal(expected, actual, 'Should take in 6 as an argument, and return the product of 6 and 7. I.e. 42');

    const expected1 = 'number';
    const actual1 = typeof multiplyBySeven(6);
    expect.equal(expected1, actual1, 'Should verify that function return is of type "number"');

    const expected2 = 7;
    const actual2 = multiplyBySeven();
    expect.equal(expected2, actual2, 'Should take no argument and return 7');
});

test('This function should take in a number and multiply it by twelve then cut the result in half', (expect) => {
    const expected = 6;
    const actual = multiplyBy12ThenHalve();
    expect.equal(actual, expected, 'Should take no argument and return half of twelve');

    const expected1 = 42;
    const actual1 = multiplyBy12ThenHalve(7);
    expect.equal(expected1, actual1, 'Should multiply 7 by 12 then multiply the result by .5 returning half of 12 * arg');

    const expected2 = 'number';
    const actual2 = typeof multiplyBy12ThenHalve(5);
    expect.equal(expected2, actual2, 'Should verify that function return is of type "number"');
});


test('This function should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = false;
    const actual = divideThenMultiply(1, 'a', 1);
    expect.equal(expected, actual, 'Should verify each arg is of type "number');

    const expecte = true;
    const actua = divideThenMultiply(1, 1, 1);
    expect.equal(expecte, actua, 'Should verify each arg is of type "number'); 

    const expected1 = 6;
    const actual1 = divideThenMultiply(10, 5, 3);
    expect.equal(expected1, actual1, 'Should divide 10 by 5 and multiply the reult by 3');

    const expected2 = 0;
    const actual2 = divideThenMultiply(1, 0, 1);
    expect.equal(expected2, actual2, 'Should break. Cannot divide by 0. In this case, return 0');
});

test('This function should take in three numbers and return those numbers in an array', (expect) => {
    const expected = true;
    const check = returnAsAnArray(6, 6, 6);
    const actual = Array.isArray(check)
    expect.equal(expected, actual, 'Should verify function return is of type "array"');

    const expected1 = [4, 2];
    const actual1 = returnAsAnArray(4, 2);
    expect.deepEqual(expected1, actual1[1], 'Should return an array of the arguments passed');

    const expected2 = true;
    const actual2 = returnAsAnArray(4, 2);
    console.log(actual2);
    expect.equal(expected2, actual2[0], 'Should verify that each argument is typeof "number"');
});

test('This function should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = '420'
    const actual = returnAsAString(4, 2, 0)
    expect.equal(expected, actual, 'Should take in two numbers and return a single string containing those numbers')

    const expected1 = 'string'
    const actual1 = typeof returnAsAString(4, 2, 0)
    expect.equal(expected1, actual1, 'Object returned should of type "string"')

    const expected2 = 3
    const actual2 = returnAsAString(4, 2, 0).length
    expect.equal(expected2, actual2, 'Returned string should have a length equal to the amount of arguments')
})

test("This function should take in two numbers and return a greeting announcing that the sum of those numbers is today's lucky number", (expect) => {
    const expected = 'string'
    const actual = typeof makeLuckyGreeting(4, 2)
    expect.equal(expected, actual, 'Should take in 4 and 2 and return a string')

    const expected1 = "Todays lucky number is: 42"
    const actual1 = makeLuckyGreeting(4, 2)
    expect.equal(expected1, actual1, `Should take in 4 and 2 and return "Todays lucky number is: 42"`)

    const expected2 = true
    const actual2 = makeLuckyGreeting(4, 2)
    expect.equal(expected1, actual1, 'Function should return something ather than null or undefined')
})

test('This function should take an array and return the second item in the array', (expect) => {
    const expected = 'dog'
    const actual = getSecondItem(['cat', 'dog', 'fish', 'lizard', 'snake'])
    expect.equal(expected, actual, 'Should return "dog" from the array')

    const expected1 = 2
    const actual1 = getSecondItem([1, 2, 3, 4, 5])
    expect.equal(expected1, actual1, 'Should return 2 from the array')

    const expected2 = "Element does not exist"
    const actual2 = getSecondItem(['dog'])
    expect.equal(expected2, actual2, 'If no element exists at [1], return string saying as much')
})

test('This function should take an array and return the second item in the array', (expect) => {
    const expected = 'dog'
    const actual = getLastItem(['cat', 'fish', 'lizard', 'snake', 'dog'])
    expect.equal(expected, actual, 'Should return "dog" from the array')

    const expected1 = 5
    const actual1 = getLastItem([1, 2, 3, 4, 5])
    expect.equal(expected1, actual1, 'Should return 2 from the array')

    const expected2 = "Array is empty"
    const actual2 = getLastItem([])
    expect.equal(expected2, actual2, 'If no element in array, return string saying as much')
})



skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

