import hexToRowRegExp from "./hexToRowRegExp";
import rgbToHex from "./rgbToHex";

const getRowColorRexExp = (color: string) => {
    const rowColorRegExp = color.replace(/rgba?\(([^)]*)\)/g, (s, g1) => {
        const variants = [s.replace(/\(|\)/g, '\\$&')];
        const [r, g, b, a] = g1.split(/, ?/);
        if (!a) {
            const hexColor = rgbToHex(+r, +g, +b);
            variants.push(hexToRowRegExp(hexColor));
            if (hexColor.substring(1, 4) === hexColor.substring(4)) {
                variants.push(hexToRowRegExp(hexColor).substring(0, 4));
            }
        }
        return `(${variants.join('|')})`;
    });

    const rowColorRegExpFixed = rowColorRegExp.split(/, ?/).join(', ?');

    return rowColorRegExpFixed;
}

export default getRowColorRexExp;
