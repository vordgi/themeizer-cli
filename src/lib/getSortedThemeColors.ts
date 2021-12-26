import type { ColorObj } from 'themeizer/dist/types/themeizer';

const getSortedThemeColors = (colors: ColorObj[], theme: string) => {
    const PRIORITY = {
        linear: 2,
        radial: 1,
        solid: 0
    }
    const colorsFiltered = colors.filter((color) => color.theme === theme);
    const colorsSorted = colorsFiltered.sort((a, b) => {
        return PRIORITY[b.type] - PRIORITY[a.type];
    });

    return colorsSorted;
}

export default getSortedThemeColors;
