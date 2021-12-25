import from10To16 from "./from10to16";

const rgbToHex = (r: number, g: number, b: number) => {
    return `#${from10To16(r)}${from10To16(g)}${from10To16(b)}`;
}

export default rgbToHex;
