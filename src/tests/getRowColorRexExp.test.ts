import getRowColorRexExp from '../lib/getRowColorRexExp';

describe('Testing decimal to hexadecimal conversion', () => {
  test('should return correct RegExp for "rgb(0,0, 0)"', () => {
    expect(getRowColorRexExp('rgb(0,0, 0)')).toBe('(rgb\\(0, ?0, ?0\\)|#000000|#000)');
  });

  test('should return correct RegExp for "rgb(50, 227, 46)"', () => {
    expect(getRowColorRexExp('rgb(50, 227, 46)')).toBe('(rgb\\(50, ?227, ?46\\)|#32[eE]32[eE]|#32[eE])');
  });

  test('should return correct RegExp for "rgba(255, 255, 255, 0.5)"', () => {
    expect(getRowColorRexExp('rgba(255, 255, 255, 0.5)')).toBe('(rgba\\(255, ?255, ?255, ?0?.5\\))');
  });

  test('should return correct RegExp for "rgb(41,41,41) 0%, rgba(255, 255, 255, 0.5) 100%"', () => {
    expect(getRowColorRexExp('rgb(41,41,41) 0%, rgba(255, 255, 255, 0.5) 100%')).toBe('(rgb\\(41, ?41, ?41\\)|#292929) 0%, ?(rgba\\(255, ?255, ?255, ?0?.5\\)) 100%');
  });
});
