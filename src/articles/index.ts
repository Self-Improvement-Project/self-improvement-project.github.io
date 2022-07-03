import { date, reverseChronologically } from "../utils";
import An_Identity_Prison from "./An_Identity_Prison.md";
import Be_More_Thankful from "./Be_More_Thankful.md";
import Be_The_Uplifter from "./Be_The_Uplifter.md";
import Becoming_A_Good_Friend_To_Yourself from "./Becoming_A_Good_Friend_To_Yourself.md";
import Eight_Week_Wake_Up_Coaching_Program from "./Eight_Week_Wake_Up_Coaching_Program.md";
import Find_Better_Happiness from "./Find_Better_Happiness.md";
import Happiness_Money_And_Freedom from "./Happiness_Money_And_Freedom_Surface_Level_Thoughts.md";
import My_Story_So_Far from "./My_Story_So_Far.md";
import Self_Awareness_For_Working_Adults from "./Self_Awareness_For_Working_Adults.md";
import The_Simple_Life from "./The_Simple_Life.md";
import Two_Ways_That_Will_Help_You_Let_Go from "./Two_Ways_That_Will_Help_You_Let_Go.md";
import What_Is_The_True_Quality_Of_Your_Life from "./What_Is_The_True_Quality_Of_Your_Life.md";
import Whats_Wrong_With_Just_Existing from "./Whats_Wrong_With_Just_Existing.md";
import Who_Do_You_Really_Want_To_Be from "./Who_Do_You_Really_Want_To_Be.md";


export const DEFAULT_AUTHOR = "Lawrence McLelland";

export const ARTICLE_IDS = [
    "Eight-Week-Wake-Up-Coaching-Program",
    "Find-Better-Happiness",
    "Two-Ways-That-Will-Help-You-Let-Go",
    "My-Story-So-Far",
    "Whats-Wrong-With-Just-Existing",
    "Self-Awareness-For-Working-Adults",
    "What-is-the-true-quality-of-your-life",
    "Who-Do-You-Really-Want-To-Be",
    "An-Identity-Prison",
    "Becoming-A-Good-Friend-To-Yourself",
    "Be-The-Uplifter",
    "Be-More-Thankful",
    "The-Simple-Life",
    "Happiness-Money-And-Freedom"
] as const;

// convert namesArr into string literal union type
export type IARTICLE_ID = typeof ARTICLE_IDS[number];


export interface IBlog {
    id: IARTICLE_ID,
    title: string,
    shortTitle: string,
    excerpt: string,
    data: RequestInfo,
    createdAt: Date,
    author?: string
}

export const Blogs: IBlog[] = [
    {
        id: "Eight-Week-Wake-Up-Coaching-Program",
        title: "Life Coaching with Lawrence",
        shortTitle: "Life Coaching",
        excerpt: "If you’ve followed my podcast for a while, you’ll know how important I " +
            "think it is to lead a fulfilling and meaningful life. And so should you. Your life " +
            "is important and precious.",
        data: Eight_Week_Wake_Up_Coaching_Program,
        createdAt: date("October", 30, 2021)
    },
    {
        id: "Find-Better-Happiness",
        title: "Find Better Happiness",
        shortTitle: "Find Better Happiness",
        excerpt: "As we know, happiness isn’t material. It doesn’t come from goods. " +
            "You’ll have heard in recent years the cliches of ‘creating memories’ and " +
            "spending money on experiences as opposed to things.",
        data: Find_Better_Happiness,
        createdAt: date("April", 30, 2022)
    },
    {
        id: "Two-Ways-That-Will-Help-You-Let-Go",
        title: "2 Ways That Will Help You Let Go",
        shortTitle: "Two Ways that Will Help You Let Go",
        excerpt: "This might be one of the most important and powerful lessons in life; " +
            "letting go. We have one of the harshest psychological set ups of constantly " +
            "self sabotaging ourselves. It’s practically involuntary.",
        data: Two_Ways_That_Will_Help_You_Let_Go,
        createdAt: date("April", 27, 2022)
    },
    {
        id: "My-Story-So-Far",
        title: "My Story So Far",
        shortTitle: "My Story So Far",
        excerpt: "Hello, I wanted to share my story with you so you know what I’m all about.",
        data: My_Story_So_Far,
        createdAt: date("October", 27, 2021)
    },
    {
        id: "Whats-Wrong-With-Just-Existing",
        title: "What's Wrong With Just Existing?",
        shortTitle: "What's Wrong With Just Existing?",
        excerpt: "A lot of our demons come from a desire to keep up and fit in. ‘We’re not " +
            "where we should be at this stage of life’ ‘I wish I was more popular’ And these " +
            "fallacies are ultimately our downfall in order to live a fulfilling and gratifying " +
            "existence.",
        data: Whats_Wrong_With_Just_Existing,
        createdAt: date("April", 26, 2022)
    },
    {
        id: "Self-Awareness-For-Working-Adults",
        title: "Self awareness for working adults – is this it?",
        shortTitle: "Self Awareness For Working Adults",
        excerpt: "I’ve got it! All this nonsense I spit every day is mostly applicable for… " +
            "working adults. Why? Because we aren’t taught how to live as a working adult in any " +
            "formal education setting.",
        data: Self_Awareness_For_Working_Adults,
        createdAt: date("April", 24, 2022)
    },
    {
        id: "Who-Do-You-Really-Want-To-Be",
        title: "Who Do You Really Want To Be?",
        shortTitle: "Who Do You Really Want to Be?",
        excerpt: "I’ve realised I don’t use this platform to tell you what to do, I use it to help " +
            "you think more clearly. So today, we’re going to look at a few questions that will help " +
            "us get there a bit quicker.",
        data: Who_Do_You_Really_Want_To_Be,
        createdAt: date("April", 19, 2022)
    },
    {
        id: "An-Identity-Prison",
        title: "An Identity Prison",
        shortTitle: "An Identity Prison",
        excerpt: "Here’s one to whet your appetite before tomorrows workshop. More likely than not, " +
            "you are imprisoned. Imprisoned by society. Imprisoned by the Joneses. And imprisoned by " +
            "yourself. But from the outside it doesn’t look that way.",
        data: An_Identity_Prison,
        createdAt: date("April", 9, 2022)
    },
    {
        id: "Becoming-A-Good-Friend-To-Yourself",
        title: "Becoming a Good Friend to Yourself",
        shortTitle: "Becoming a Good Friend to Yourself",
        excerpt: "Self doubt. Imposter syndrome. Self criticism. And this cycle is continuous if we " +
            "don’t step in and stop it. There will be the usual highs and lows in life, these will never " +
            "not exist. However, those 3 things I just referred to should be a rarity, not a constant.",
        data: Becoming_A_Good_Friend_To_Yourself,
        createdAt: date("April", 6, 2022)
    },
    {
        id: "Be-The-Uplifter",
        title: "Be the Uplifter",
        shortTitle: "Be the Uplifter",
        excerpt: "Most of the online advice gurus say we have to be the best. Thee person to know and " +
            "go to. And this has not sat well with me for a while. Number one from a values point of " +
            "view; Success is subjective to many people. Unhealthy and uncontrollable (if not manipulative) " +
            "pressure to become some sort of version of success is the only option. Despite so many things " +
            "in life depending on luck, you must make yourself miserable during the process.",
        data: Be_The_Uplifter,
        createdAt: date("April", 3, 2022)
    },
    {
        id: "Be-More-Thankful",
        title: "Be More Thankful",
        shortTitle: "Be More Thankful",
        excerpt: "“Gratitude turns what we have into enough.” Timing is obviously always important as " +
            "well as overuse, but gratitude can be one of the closest things humans have to a superpower. " +
            "21st century living conditions on average across the globe are the highest they have ever been. " +
            "Which gives us more reason to use gratitude when we’re acting spoilt.",
        data: Be_More_Thankful,
        createdAt: date("April", 2, 2022)
    },
    {
        id: "The-Simple-Life",
        title: "The Simple Life",
        shortTitle: "The Simple Life",
        excerpt: "How many of you feel obliged to keep up with social expectations as opposed to simplifying " +
            "your life? Keeping up and displaying social norms is a part of every day life. Behave a certain " +
            "way. Have similar goals and desires. Be loud and busy socially. And if not adhered to, we have the " +
            "risk of being isolated. But today is a vote for simplicity.",
        data: The_Simple_Life,
        createdAt: date("March", 30, 2022)
    },
    {
        id: "What-is-the-true-quality-of-your-life",
        title: "What is the true quality of your life?",
        shortTitle: "What's the True Quality of Your Life?",
        excerpt: "This is a very subjective question. The stage in life you’re at will influence this hugely. " +
            "And what things come under the bracket of ‘quality’ anyway? Knowing what you want is a good place " +
            "to start. A lot of people think they’ll like the idea of something. Not working. Going on lots of " +
            "holidays or travel all the time. Having ultimate freedom to do what they want when they want. These " +
            "are all ideas because for most they are a pipe dream. They’re all possible. But not with the lifestyle " +
            "you have. The distance between those two realities are vast. Which makes them ideas.",
        data: What_Is_The_True_Quality_Of_Your_Life,
        createdAt: date("March", 29, 2022)
    },
    {
        id: "Happiness-Money-And-Freedom",
        title: "Happiness, Money and Freedom. Surface level thoughts",
        shortTitle: "Happiness, Money and Freedom",
        excerpt: "Happiness money and freedom. We only gain happiness by removing the obstacles of money and freedom. " +
            "Let’s start basic – money solves money related happiness problems. Freedom solves imprisoned happiness " +
            "problems. Once you have both, what makes us happy?",
        data: Happiness_Money_And_Freedom,
        createdAt: date("March", 28, 2022)
    }
];

export const getBlog = (blogId: IARTICLE_ID): IBlog => Blogs.find((blog) => blog.id === blogId)!;
export const getRecentBlogs = (num: number) =>
    Blogs
        .sort(reverseChronologically)
        .slice(0, num);
