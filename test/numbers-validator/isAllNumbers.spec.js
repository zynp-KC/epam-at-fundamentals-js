const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if all elements are numbers', () => {
    expect(validator.isAllNumbers([1, 2, 3])).to.be.equal(true);
  });

  it('should return false if the array contains a non-number', () => {
    expect(validator.isAllNumbers([1, 'a', 3])).to.be.equal(false);
  });

  it('should throw an error if the argument is not an array', () => {
    expect(() => validator.isAllNumbers('abc')).to.throw('[abc] is not an array');
  });
});
