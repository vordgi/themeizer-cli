const from10To16 = (n: number) => {
    const number16 = n.toString(16);
    return number16.length === 1 ? `0${number16}` : number16;
}

export default from10To16;
