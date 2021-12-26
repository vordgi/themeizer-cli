import rgbToHex from '../lib/rgbToHex';

describe('Testing rgb to hex conversion', () => {
  test('"0, 0, 0" should return #000000', () => {
    expect(rgbToHex(0, 0, 0)).toBe('#000000');
  });

  test('"255, 255, 255" should return #ffffff', () => {
    expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
  });

  test('"33, 150, 243" should return #2196f3', () => {
    expect(rgbToHex(33, 150, 243)).toBe('#2196f3');
  });
});
