/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ColorCloudObj, ThemesObj } from "themeizer/dist/types/themeizer";

export interface SortedThemeColor extends ColorCloudObj {
    themeType: ThemesObj[string]["type"];
}

export type RegExpWithReplacerType = {
    [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string;
};
export type ReplacerType = (substring: string, ...args: any[]) => string;

export type GetReplacerDataReturnType = {
    regex: RegExpWithReplacerType;
    replaceTo: ReplacerType;
} & {
    regex: RegExp;
    replaceTo: string;
}
