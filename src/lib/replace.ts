import type { SortedThemeColor } from '../types';
import getReplacerData from './getReplacerData';

const replace = (row: string, themeColorsSorted: SortedThemeColor[]) => {
    let newRow = row;
    themeColorsSorted.forEach((color) => {
        const { regex, replaceTo } = getReplacerData(color);
        newRow = newRow.replace(regex, replaceTo);
    });

    return newRow;
};

export default replace;
