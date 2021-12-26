import replace from '../lib/replace';
import { EXPECTED_STYLES, SORTED_LIGHT_COLORS, STYLES } from './constants';

describe('Testing replacing content colors with variables', () => {
  test('should replace the colors from the light theme', () => {
    expect(replace(STYLES, SORTED_LIGHT_COLORS)).toBe(EXPECTED_STYLES);
  });
});
