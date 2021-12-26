import getSortedThemeColors from '../lib/getSortedThemeColors';
import { COLORS, SORTED_LIGHT_COLORS } from './constants';

describe('Filtering and sorteting testing', () => {
  test('should return sorted light colors', () => {
    expect(getSortedThemeColors(COLORS, 'light')).toEqual(SORTED_LIGHT_COLORS);
  });
});
