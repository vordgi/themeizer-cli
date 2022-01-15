import type { ThemesObj } from 'themeizer/dist/types/themeizer';
import type { SortedThemeColor } from '../types'

const getSortedThemeColors = (colors: ThemesObj, currentTheme: string) => {
    const PRIORITY = {
        linear: 2,
        radial: 1,
        solid: 0
    }

    const colorsFiltered = Object.entries(colors).reduce<SortedThemeColor[]>((acc, [theme, data]) => {
        if (theme !== currentTheme && data.type !== 'shared') return acc;
        data.list.forEach(colorObj => { acc.push({ ...colorObj, themeType: data.type }) })
        return acc;
    }, [])

    const colorsSorted = colorsFiltered.sort((a, b) => {
        return PRIORITY[b.type] - PRIORITY[a.type];
    });

    return colorsSorted;
}

export default getSortedThemeColors;
