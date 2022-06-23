import { Blogs } from "../articles";
import { getLocalStorage, hasLocalStorage, setLocalStorage } from "./localStorage";


const key = "seenArticles";

export const addSeenArticle = (articleId: string) => {
    if (!hasSeenArticle(articleId)) {
        var currentSeenArticles = getSeenArticles();
        currentSeenArticles.push(articleId);
        setLocalStorage(key, JSON.stringify(currentSeenArticles));
    }
};

export const getSeenArticles = (): string[] =>
    hasLocalStorage(key) ? JSON.parse(getLocalStorage(key)!) : [];

export const getNumberUnseenArticles = (): number =>
    Blogs.length - getSeenArticles().length;

export const hasSeenArticle = (articleId: string): boolean =>
    getSeenArticles().includes(articleId);
