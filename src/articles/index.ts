import Eight_Week_Wake_Up_Coaching_Program from "./Eight_Week_Wake_Up_Coaching_Program.md";
import Find_Better_Happiness from "./Find_Better_Happiness.md";
import My_Story_So_Far from "./My_Story_So_Far.md";
import Two_Ways_That_Will_Help_You_Let_Go from "./Two_Ways_That_Will_Help_You_Let_Go.md";
import Whats_Wrong_With_Just_Existing from "./Whats_Wrong_With_Just_Existing.md";


export const DEFAULT_AUTHOR = "Lawrence McLelland";

export const ARTICLE_IDS = [
	"Eight-Week-Wake-Up-Coaching-Program",
	"Find-Better-Happiness",
	"Two-Ways-That-Will-Help-You-Let-Go",
	"My-Story-So-Far",
	"Whats-Wrong-With-Just-Existing"
] as const;

// convert namesArr into string literal union type
export type IARTICLE_ID = typeof ARTICLE_IDS[number];


export interface IBlog {
	id: IARTICLE_ID,
	title: string,
	excerpt: string,
	data: RequestInfo,
	createdAt: Date,
	author?: string
}

export const Blogs: IBlog[] = [
	{
		id: "Eight-Week-Wake-Up-Coaching-Program",
		title: "Life Coaching with Lawrence",
		excerpt: "If you’ve followed my podcast for a while, you’ll know how important I " +
			"think it is to lead a fulfilling and meaningful life. And so should you. Your life " +
			"is important and precious.",
		data: Eight_Week_Wake_Up_Coaching_Program,
		createdAt: new Date(2021, 10, 30)
	},
	{
		id: "Find-Better-Happiness",
		title: "Find Better Happiness",
		excerpt: "As we know, happiness isn’t material. It doesn’t come from goods. " +
			"You’ll have heard in recent years the cliches of ‘creating memories’ and " +
			"spending money on experiences as opposed to things.",
		data: Find_Better_Happiness,
		createdAt: new Date(2022, 4, 30)
	},
	{
		id: "Two-Ways-That-Will-Help-You-Let-Go",
		title: "2 Ways That Will Help You Let Go",
		excerpt: "This might be one of the most important and powerful lessons in life; " +
			"letting go. We have one of the harshest psychological set ups of constantly " +
			"self sabotaging ourselves. It’s practically involuntary.",
		data: Two_Ways_That_Will_Help_You_Let_Go,
		createdAt: new Date(2022, 4, 27)
	},
	{
		id: "My-Story-So-Far",
		title: "My Story So Far",
		excerpt: "Hello, I wanted to share my story with you so you know what I’m all about.",
		data: My_Story_So_Far,
		createdAt: new Date(2021, 10, 27)
	},
	{
		id: "Whats-Wrong-With-Just-Existing",
		title: "What's Wrong With Just Existing?",
		excerpt: "A lot of our demons come from a desire to keep up and fit in. ‘We’re not " +
			"where we should be at this stage of life’ ‘I wish I was more popular’ And these " +
			"fallacies are ultimately our downfall in order to live a fulfilling and gratifying " +
			"existence.",
		data: Whats_Wrong_With_Just_Existing,
		createdAt: new Date(2022, 4, 26)
	}
];

export const getBlog = (blogId: IARTICLE_ID): IBlog => Blogs.find((blog) => blog.id === blogId)!;
