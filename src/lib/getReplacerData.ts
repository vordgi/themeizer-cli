import type { GetReplacerDataReturnType, RegExpWithReplacerType, ReplacerType, SortedThemeColor } from '../types';
import getGradientReplacer from './getGradientReplacer';
import getRowColorRexExp from './getRowColorRexExp';

const getReplacerData = (color: SortedThemeColor): GetReplacerDataReturnType => {
    const regexRowFixed = getRowColorRexExp(color.value);
    let regex: RegExp | RegExpWithReplacerType;
    let replaceTo: string | ReplacerType;
    if (color.type === 'linear') {
        regex = new RegExp(`linear-gradient\\(([^,]*, ?)?${regexRowFixed}\\)`, 'gm');
        replaceTo = getGradientReplacer(color.name);
    } else if (color.type === 'radial') {
        regex = new RegExp(`radial-gradient\\(([^,]*, ?)?${regexRowFixed}\\)`, 'gm');
        replaceTo = getGradientReplacer(color.name);
    } else if (color.themeType === 'shared') {
        regex = new RegExp(regexRowFixed, 'gm');
        replaceTo = `var(--${color.themeType}-${color.name})`;
    } else {
        regex = new RegExp(regexRowFixed, 'gm');
        replaceTo = `var(--${color.name})`;
    }

    return { regex, replaceTo } as GetReplacerDataReturnType;
};

export default getReplacerData;
