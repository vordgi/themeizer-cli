import getSortedThemeColors from '../lib/getSortedThemeColors';
import { CLOUD_COLORS, SORTED_LIGHT_COLORS } from './constants';

describe('Filtering and sorteting testing', () => {
  test('should return sorted light colors', () => {
    expect(getSortedThemeColors(CLOUD_COLORS, 'light')).toEqual(SORTED_LIGHT_COLORS);
  });
});
