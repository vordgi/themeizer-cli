import type { SortedThemeColor } from '../types';
import getGradientReplacer from './getGradientReplacer';
import getRowColorRexExp from './getRowColorRexExp';

const replace = (row: string, themeColorsSorted: SortedThemeColor[]) => {
    let newRow = row;
    themeColorsSorted.forEach((color) => {
        const regexRowFixed = getRowColorRexExp(color.value);
        let regex: RegExp;
        if (color.type === 'linear') {
            regex = new RegExp(`linear-gradient\\(([^,]*, ?)?${regexRowFixed}\\)`, 'gm');
            newRow = newRow.replace(regex, getGradientReplacer(color.name));
        } else if (color.type === 'radial') {
            regex = new RegExp(`radial-gradient\\(([^,]*, ?)?${regexRowFixed}\\)`, 'gm');
            newRow = newRow.replace(regex, getGradientReplacer(color.name));
        } else if (color.themeType === 'shared') {
            regex = new RegExp(regexRowFixed, 'gm');
            newRow = newRow.replace(regex, `var(--${color.themeType}-${color.name})`);
        } else {
            regex = new RegExp(regexRowFixed, 'gm');
            newRow = newRow.replace(regex, `var(--${color.name})`);
        }
    });

    return newRow;
};

export default replace;
