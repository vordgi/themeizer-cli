import from10to16 from '../lib/from10to16';

describe('Testing decimal to hexadecimal conversion', () => {
  test('0 should return 00', () => {
    expect(from10to16(0)).toBe('00');
  });

  test('9 should return 09', () => {
    expect(from10to16(9)).toBe('09');
  });

  test('255 should return ff', () => {
    expect(from10to16(255)).toBe('ff');
  });
});
