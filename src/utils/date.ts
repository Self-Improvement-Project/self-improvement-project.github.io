const MONTHS = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

export const simpleDate = (date: Date): string =>
	`${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
