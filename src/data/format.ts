export const number = (num: number | undefined | null) =>
    num !== null && num !== undefined ? num.toLocaleString() : 'Unknown';
