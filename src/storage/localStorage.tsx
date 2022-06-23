export const setLocalStorage = (key: string, value: string) =>
    window.localStorage.setItem(key, value);

export const getLocalStorage = (key: string): string | null =>
    window.localStorage.getItem(key);

export const hasLocalStorage = (key: string): boolean =>
    window.localStorage.getItem(key) !== null;
