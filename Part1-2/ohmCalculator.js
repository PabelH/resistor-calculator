// 1. The electronic color code calculator (JS)
const colorCode = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  gray: 8,
  white: 9,
};

const multiplierMap = {
  black: 1,
  brown: 10,
  red: 100,
  orange: 1000,
  yellow: 10000,
  green: 100000,
  blue: 1000000,
  violet: 10000000,
  gray: 100000000,
  white: 1000000000,
};

class OhmValueCalculator {
  CalculateOhmValue(bandAColor, bandBColor, bandCColor, bandDColor) {
    const bandA = colorCode[bandAColor];
    const bandB = colorCode[bandBColor];
    const bandC = multiplierMap[bandCColor];
    const tolerance = this.calculateTolerance(bandDColor);

    if (bandA !== undefined && bandB !== undefined && bandC !== undefined && tolerance !== undefined) {
      const resistance = Number(`${bandA}${bandB}`) * bandC;
      return {
        resistance: resistance,
        tolerance: tolerance,
      };
    } else {
      throw new Error('Invalid color bands');
    }
  }

  calculateTolerance(bandDColor) {
    switch (bandDColor) {
      case 'brown':
        return 1;
      case 'red':
        return 2;
      case 'green':
        return 0.5;
      case 'blue':
        return 0.25;
      case 'violet':
        return 0.1;
      case 'gray':
        return 0.05;
      case 'gold':
        return 5;
      case 'silver':
        return 10;
      default:
        return undefined;
    }
  }
}

// Example:
const calculator = new OhmValueCalculator();
const result = calculator.CalculateOhmValue('brown', 'black', 'red', 'gold');
console.log(`Resistance: ${result.resistance} ohms, Tolerance: ${result.tolerance}%`);

// Export
export default OhmValueCalculator;