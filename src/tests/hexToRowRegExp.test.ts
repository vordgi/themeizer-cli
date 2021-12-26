import hexToRowRegExp from '../lib/hexToRowRegExp';

describe('Testing hex to row RegExp conversion', () => {
  test('should return correct row RegExp for "#21f21F"', () => {
    expect(hexToRowRegExp('#21f21F')).toBe('#21[fF]21[fF]');
  });

  test('should return correct row RegExp for "#000000"', () => {
    expect(hexToRowRegExp('#000000')).toBe('#000000');
  });

  test('should return correct row RegExp for "#FFffFf"', () => {
    expect(hexToRowRegExp('#FFffFf')).toBe('#[fF][fF][fF][fF][fF][fF]');
  });
});
