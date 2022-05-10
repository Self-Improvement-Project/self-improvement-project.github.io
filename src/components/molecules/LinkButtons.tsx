import { MenuBook } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { CSSProperties } from "react";


const styles: Record<string, CSSProperties> = {
	SpacedOut: {
		margin: 5
	},
	LightClick: {
		color: "white"
	}
};

const buttonStyles: Record<string, CSSProperties> = {
	EBookButton: {
		backgroundColor: "#8ad4ff",
		...styles.SpacedOut,
		...styles.LightClick
	},
	YoutubeButton: {
		backgroundColor: "#ff3702",
		...styles.SpacedOut,
		...styles.LightClick
	},
	PodcastButton: {
		backgroundColor: "#ffb300",
		...styles.SpacedOut,
		...styles.LightClick
	},
	TwitterButton: {
		backgroundColor: "#01aeff",
		...styles.SpacedOut,
		...styles.LightClick
	},
	EmailButton: {
		backgroundColor: "#013ba3",
		...styles.SpacedOut,
		...styles.LightClick
	},
	SelfLedOnlineCourseButton: {
		backgroundColor: "#ffffff",
		...styles.SpacedOut
	},
	OneToOneCoachingButton: {
		backgroundColor: "#1478be",
		...styles.SpacedOut,
		...styles.LightClick
	},
	StorySoFarButton: {
		backgroundColor: "#303030",
		...styles.SpacedOut,
		...styles.LightClick
	},
	PatreonButton: {
		backgroundColor: "#a04e9f",
		...styles.SpacedOut,
		...styles.LightClick
	},
	ArticlesButton: {
		backgroundColor: "#2cb3cb",
		...styles.SpacedOut,
		...styles.LightClick
	}
};

const EBOOK_LINK = "https://lawrencemcl.gumroad.com/l/uIpgy";
const YOUTUBE_LINK = "https://www.youtube.com/channel/UCSENKoMvOBCNtHJF0SP4znA";
const PODCAST_LINK = "https://open.spotify.com/show/3N9B0UClf9l8SDtgDMH1EU";
const TWITTER_LINK = "https://twitter.com/lawrence__mcl";
const EMAIL_LINK = "https://sunny-painter-2539.ck.page/";
const SELF_LED_ONLINE_COURSE_LINK = "https://lawrencemcl.gumroad.com/l/JSZyK?_ga=2.255189960.1104408546.1637501051-2090084602.1632476918&_gl=1*ipzws7*_ga*MjA5MDA4NDYwMi4xNjMyNDc2OTE4*_ga_6LJN6D94N6*MTYzNzYwMzQzNi4xMy4xLjE2Mzc2MDM0NDAuMA..";
const ONE_TO_ONE_COACHING_LINK = "/articles/Eight-Week-Wake-Up-Coaching-Program";
const STORY_SO_FAR_LINK = "/articles/My-Story-So-Far";
const PATREON_LINK = "https://www.patreon.com/tsip";
const ARTICLES_LINK = "/articles";

const LinkButtons = ({style}: { style?: CSSProperties }) => (
	<div style={style}>
		<Box>
			<Button
				variant="contained"
				style={buttonStyles.EBookButton}
				// endIcon={<BookIcon />}
				href={EBOOK_LINK}
			>
				Free Ebook
			</Button>
			<Button
				variant="contained"
				style={buttonStyles.YoutubeButton}
				href={YOUTUBE_LINK}
			>
				YouTube
			</Button>

			<Button
				variant="contained"
				style={buttonStyles.PodcastButton}
				href={PODCAST_LINK}
			>
				Podcast
			</Button>
			<Button
				variant="contained"
				style={buttonStyles.TwitterButton}
				href={TWITTER_LINK}
			>
				Twitter
			</Button>

			<Button
				variant="contained"
				style={buttonStyles.EmailButton}
				href={EMAIL_LINK}
			>
				Email
			</Button>

			<Button
				variant="outlined"
				style={buttonStyles.SelfLedOnlineCourseButton}
				href={SELF_LED_ONLINE_COURSE_LINK}
			>
				Self Led Online Course
			</Button>

		</Box>
		<Box>

			<Button
				variant="contained"
				style={buttonStyles.OneToOneCoachingButton}
				href={ONE_TO_ONE_COACHING_LINK}
			>
				1:1 Coaching
			</Button>
			<Button
				variant="contained"
				style={buttonStyles.StorySoFarButton}
				href={STORY_SO_FAR_LINK}
			>
				Story So Far...
			</Button>
			<Button
				variant="contained"
				style={buttonStyles.PatreonButton}
				href={PATREON_LINK}
			>
				Patreon
			</Button>
			<Button
				variant="contained"
				style={buttonStyles.ArticlesButton}
				href={ARTICLES_LINK}
				endIcon={<MenuBook/>}
			>
				Articles
			</Button>
		</Box>
	</div>
);

export default LinkButtons;
