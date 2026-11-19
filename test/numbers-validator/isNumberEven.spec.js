const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isNumberEven', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if the number is even', () => {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  it('should return false if the number is odd', () => {
    expect(validator.isNumberEven(3)).to.be.equal(false);
  });

  it('should throw an error if the argument is not a number', () => {
    expect(() => validator.isNumberEven('abc')).to.throw('[abc] is not of type "Number" it is of type "string"');
  });
});
