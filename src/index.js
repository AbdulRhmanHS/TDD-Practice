export function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : 'Cannot divide by zero'),
};

export function caesarCipher(str, shift) {
  const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
  const alphabet = alphabetStr.split('');
  let text = str.split('');

  for (let i = 0; i < text.length; i++) {
    let isLetter = alphabet.includes(text[i].toLowerCase());
    let index = alphabet.findIndex((el) => el == text[i].toLowerCase());
    let cipher = alphabet.at((index + shift) % 26);
    if (isLetter && text[i] === text[i].toLowerCase()) {
      text[i] = cipher;
    } else if (isLetter && text[i] === text[i].toUpperCase()) {
      text[i] = cipher.toUpperCase();
    }
  }

  return text.join('');
}

export function analyzeArray(arr) {
  const average = arr.reduce((ac, value) => ac + value, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}
