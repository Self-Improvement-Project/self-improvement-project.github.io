import { useEffect, useState } from "react";


export const getStorageValue = (key: string, defaultValue: unknown) => {
    // getting stored value
    const saved = localStorage.getItem(key) || "";
    const initial = JSON.parse(saved);
    return initial || defaultValue;
};

export const setStorageValue = (key: string, value: unknown) => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
};


export const useLocalStorage = (key: string, defaultValue: unknown) => {
    const [ value, setValue ] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        setStorageValue(key, value);
    }, [ key, value ]);

    return [ value, setValue ];
};
