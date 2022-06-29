const MONTHS = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ] as const;

export const simpleDate = (date: Date): string =>
    `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

export const now = (): number =>
    new Date().getTime();

export const dayDifference = (previousDate: number, newDate: number = now()): number => {
    const millisecondsDifference = Math.abs(newDate - previousDate);
    return Math.floor(millisecondsDifference / (1000 * 60 * 60 * 24));
};

export const date = (month: typeof MONTHS[number], day: number, year: number): Date =>
    new Date(year, MONTHS.indexOf(month), day);
