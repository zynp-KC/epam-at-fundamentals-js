const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return an array of even numbers', () => {
    expect(validator.getEvenNumbersFromArray([1, 2, 3, 4])).to.deep.equal([2, 4]);
  });

  it('should throw an error if the argument is not an array', () => {
    expect(() => validator.getEvenNumbersFromArray('abc')).to.throw('[abc] is not an array of "Numbers"');
  });

  it('should throw an error if the array contains a non-number', () => {
    expect(() => validator.getEvenNumbersFromArray([1, 'a', 3])).to.throw('[1,a,3] is not an array of "Numbers"');
  });
});
