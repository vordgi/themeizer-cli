import type { ColorCloudObj, ThemesObj } from "themeizer/dist/types/themeizer";

export interface SortedThemeColor extends ColorCloudObj {
    themeType: ThemesObj[string]["type"];
}
