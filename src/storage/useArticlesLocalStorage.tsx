import { useEffect, useMemo, useState } from "react";
import { Blogs } from "../articles";


const key = "seenArticles";
const defaultValue: string[] = [];

const getArticlesStorageValue = (): string[] => {
    // getting stored value
    const saved = localStorage.getItem(key) || `${defaultValue}`;
    const initial = JSON.parse(saved);
    return initial || defaultValue;
};

const setArticlesStorageValue = (value: string[]) => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
};


export const useArticlesLocalStorage = () => {

    const [ seenArticles, setSeenArticles ] = useState(() => {
        return getArticlesStorageValue();
    });

    useEffect(() => {
        setArticlesStorageValue(seenArticles);
    }, [ key, seenArticles ]);

    const hasSeenArticle = (articleId: string) => {
        return getArticlesStorageValue().includes(articleId);
    };

    const addSeenArticle = (articleId: string) => {
        if (!hasSeenArticle(articleId)) {
            var currentSeenArticles = getArticlesStorageValue();
            currentSeenArticles.push(articleId);
            setSeenArticles(currentSeenArticles);
        }
    };

    const numUnseenArticles = useMemo(() => {
        return Blogs.length - seenArticles.length;
    }, [ key, seenArticles ]);

    return {seenArticles, addSeenArticle, hasSeenArticle, numUnseenArticles};
};
