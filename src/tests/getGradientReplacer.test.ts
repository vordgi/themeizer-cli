/* eslint-disable prefer-regex-literals */
import getGradientReplacer from '../lib/getGradientReplacer';

describe('Testing gradient replacer (getGradientReplacer)', () => {
  const regex = new RegExp("linear-gradient\\(([^,]*, ?)?(rgb\\(41, ?41, ?41\\)|#292929) 0%, ?(rgba\\(255, ?255, ?255, ?0?.5\\)) 100%\\)", 'gm');

  test('should replace linear-gradient with rgb', () => {
    const row = `background: linear-gradient(rgb(41, 41, 41) 0%, rgba(255, 255, 255, 0.5) 100%);`
    const newRow = row.replace(regex, getGradientReplacer('linear-gradient'));
    expect(newRow).toBe('background: var(--linear-gradient);');
  });

  test('should replace linear-gradient with rgb and side', () => {
    const row = `background: linear-gradient(to left, rgb(41, 41, 41) 0%, rgba(255, 255, 255, 0.5) 100%);`
    const newRow = row.replace(regex, getGradientReplacer('linear-gradient'));
    expect(newRow).toBe('background: /* --linear-gradient_setting: to left */ var(--linear-gradient);');
  });

  test('should replace linear-gradient with hex', () => {
    const row = `background linear-gradient(#292929 0%, rgba(255,255, 255, .5) 100%)`
    const newRow = row.replace(regex, getGradientReplacer('linear-gradient'));
    expect(newRow).toBe('background var(--linear-gradient)');
  });
});
