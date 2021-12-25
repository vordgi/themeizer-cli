import type { ColorObj } from 'themeizer/dist/types/themeizer';
import getGradientReplacer from './getGradientReplacer';
import getRowColorRexExp from './getRowColorRexExp';

const replace = async (row: string, colorsSorted: ColorObj[]) => {
    let newRow = row;
    colorsSorted.forEach((color) => {
        const regexRowFixed = getRowColorRexExp(color.origValue);
        let regex: RegExp;
        if (color.type === 'linear') {
            regex = new RegExp(`linear-gradient\\(([^,]*, ?)?${regexRowFixed}\\)`, 'gm');
            newRow = newRow.replace(regex, getGradientReplacer(color.name));
        } else if (color.type === 'radial') {
            regex = new RegExp(`radial-gradient\\(([^,]*, ?)?${regexRowFixed}\\)`, 'gm');
            newRow = newRow.replace(regex, getGradientReplacer(color.name));
        } else {
            regex = new RegExp(regexRowFixed, 'gm');
            newRow = newRow.replace(regex, `var(${color.name})`);
        }
    });

    return newRow;
};

export default replace;
