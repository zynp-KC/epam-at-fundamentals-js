const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if the number is an integer', () => {
    expect(validator.isInteger(5)).to.be.equal(true);
  });

  it('should return false if the number is not an integer', () => {
    expect(validator.isInteger(5.5)).to.be.equal(false);
  });

  it('should throw an error if the argument is not a number', () => {
    expect(() => validator.isInteger('abc')).to.throw('[abc] is not a number');
  });
});
