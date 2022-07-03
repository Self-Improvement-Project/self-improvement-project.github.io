import { IBlog } from "../articles";


export const shuffle = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ array[i], array[j] ] = [ array[j], array[i] ];
    }
    return array;
};

// sorting
export const chronologically = (blog1: IBlog, blog2: IBlog) => blog1.createdAt.getTime() - blog2.createdAt.getTime();
export const reverseChronologically = (blog1: IBlog, blog2: IBlog) => blog2.createdAt.getTime() - blog1.createdAt.getTime();
export const alphabetically = (blog1: IBlog, blog2: IBlog) => blog1.title < blog2.title ? -1 : 1;
export const reverseAlphabetically = (blog1: IBlog, blog2: IBlog) => blog2.title < blog1.title ? -1 : 1;

// filtering
export const read = (seenArticles: string[]) => (blog: IBlog) => seenArticles.includes(blog.id);
export const unread = (seenArticles: string[]) => (blog: IBlog) => !seenArticles.includes(blog.id);
