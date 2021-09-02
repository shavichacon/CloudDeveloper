import { expect } from 'chai';
import Calculator from '../../src/tools/Calculator';

describe('Testing to calculator class', function() {
  it('Testing add operation', function() {
    let a: number = 5;
    let b: number = 2
    let result = Calculator.Sum(a, b);
    expect(result).equal(7);
  });

  it('substract', function() {
    let result = Calculator.Difference(5, 2);
    expect(result).equal(3);
  });
});
