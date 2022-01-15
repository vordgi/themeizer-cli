import type { Options } from 'themeizer/dist/types/themeizer';
import Themeizer from 'themeizer/dist/server/Wrapper';
import ThemeizerPlugin from 'themeizer/dist/webpack/plugin';

const loadColors = async (config: Options) => {
    // eslint-disable-next-line no-new
    new ThemeizerPlugin(config);

    const themeizer = await Themeizer.init();
    if (!themeizer) throw new Error('Can not load colors');
    const colors = themeizer.data;
    return colors;
}

export default loadColors;
