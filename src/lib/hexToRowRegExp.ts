const hexToRowRegExp = (hex: string) => {
    return hex.split('').map(s => s.match(/[a-zA-Z]/) ? `[${s.toLowerCase()}${s.toUpperCase()}]` : s).join('');
}

export default hexToRowRegExp;
