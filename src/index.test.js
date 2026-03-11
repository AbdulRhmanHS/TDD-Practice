import {
  analyzeArray,
  caesarCipher,
  calculator,
  capitalize,
  reverseString,
} from './index';

test('Capitalize the first letter of a string', () => {
  expect(capitalize('something')).toBe('Something');
});

test('Reverses a string', () => {
  expect(reverseString('something')).toBe('gnihtemos');
});

test('Calculator Object', () => {
  expect([
    calculator.add(1, 2),
    calculator.subtract(53, 21),
    calculator.multiply(9, 8),
    calculator.divide(16, 4),
  ]).toEqual([3, 32, 72, 4]);
});

describe('caesarCipher', () => {
  // 1. Basic Functionality
  test('shifts lowercase letters correctly', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
  });

  test('shifts uppercase letters correctly', () => {
    expect(caesarCipher('ABC', 3)).toBe('DEF');
  });

  // 2. The "Wraparound" (Z to A)
  test('wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('wraps from Z to A', () => {
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
  });

  // 3. Large Shifts & Negative Shifts
  test('handles large shift factors (modulo 26)', () => {
    expect(caesarCipher('abc', 27)).toBe('bcd'); // 27 % 26 = 1
  });

  test('handles negative shifts (decryption)', () => {
    expect(caesarCipher('bcd', -1)).toBe('abc');
  });

  test('handles large negative shifts', () => {
    expect(caesarCipher('abc', -27)).toBe('zab');
  });

  // 4. Non-alphabetic Characters
  test('keeps punctuation and spaces unchanged', () => {
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
  });

  test('keeps numbers unchanged', () => {
    expect(caesarCipher('123 abc', 1)).toBe('123 bcd');
  });

  // 5. Edge Cases
  test('returns an empty string when given an empty string', () => {
    expect(caesarCipher('', 5)).toBe('');
  });

  test('returns the same string with a shift of 0', () => {
    expect(caesarCipher('No Change', 0)).toBe('No Change');
  });
});

test('Returns an object the array stats', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
