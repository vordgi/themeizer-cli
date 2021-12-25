import Themeizer from 'themeizer/dist/server/Wrapper';
import ThemeizerPlugin from 'themeizer/dist/webpack/plugin';
import { Options } from 'themeizer/dist/types/themeizer';

const getSortedColors = async (config: Options) => {
    // eslint-disable-next-line no-new
    new ThemeizerPlugin(config);

    const themeizer = await Themeizer.init();
    const colors = themeizer.cssVariablesObj;
    const priority = {
        linear: 2,
        radial: 1,
        solid: 0
    }
    const colorsSorted = colors.sort((a, b) => {
        return priority[b.type] - priority[a.type];
    });

    return colorsSorted;
}

export default getSortedColors;
