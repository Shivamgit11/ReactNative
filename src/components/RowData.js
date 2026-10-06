const getRandomValue = () => Math.floor(Math.random() * 256);

const rgbToHex = (r, g, b) =>
    '#' + [r, g, b].map((value) => value.toString(16).padStart(2, '0')).join('').toUpperCase();

const createRandomColor = (index) => {
    const r = getRandomValue();
    const g = getRandomValue();
    const b = getRandomValue();

    return {
        hex: rgbToHex(r, g, b),
        name: `Random Color ${index}`,
        rgb: `(${r}, ${g}, ${b})`
    };
};

export const ArrayColors = Array.from({ length: 50 }, (_, index) => createRandomColor(index + 1));