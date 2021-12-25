const getGradientReplacer = (colorName: string) => (_s: string, g1: string) => {
    let result = `var(${colorName})`;
    if (g1) {
        result = `/* ${colorName}_setting: ${g1.replace(/, ?/, '')} */ ${result}`;
    }
    return result;
}

export default getGradientReplacer;
