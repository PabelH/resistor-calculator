// 2. Using your favorite unit test framework, write the unit tests you feel are necessary to adequately test the code you wrote as your answer to question one.

import OhmValueCalculator from './ohmCalculator'; 

describe('OhmValueCalculator', () => {
  test('Calculates resistance and tolerance correctly', () => {
    const calculator = new OhmValueCalculator();
    const result = calculator.CalculateOhmValue('brown', 'black', 'red', 'gold');

    // Test that the resistance is equal to 1000 ohms and the tolerance is equal to 5%
    expect(result.resistance).toBe(1000);
    expect(result.tolerance).toBe(5);
  });

  // TODO: Add more tests
});