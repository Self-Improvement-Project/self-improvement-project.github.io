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

export const EBOOK_LINK = "https://lawrencemcl.gumroad.com/l/uIpgy";
export const YOUTUBE_LINK = "https://www.youtube.com/channel/UCSENKoMvOBCNtHJF0SP4znA";
export const PODCAST_LINK = "https://open.spotify.com/show/3N9B0UClf9l8SDtgDMH1EU";
export const TWITTER_LINK = "https://twitter.com/lawrence__mcl";
export const EMAIL_LINK = "https://sunny-painter-2539.ck.page/";
export const EMAIL = "lawrence.selfimprove@gmail.com";
export const SELF_LED_ONLINE_COURSE_LINK = "https://lawrencemcl.gumroad.com/l/JSZyK?_ga=2.255189960.1104408546.1637501051-2090084602.1632476918&_gl=1*ipzws7*_ga*MjA5MDA4NDYwMi4xNjMyNDc2OTE4*_ga_6LJN6D94N6*MTYzNzYwMzQzNi4xMy4xLjE2Mzc2MDM0NDAuMA..";
export const ONE_TO_ONE_COACHING_LINK = "/articles/Eight-Week-Wake-Up-Coaching-Program";
export const STORY_SO_FAR_LINK = "/articles/My-Story-So-Far";
export const PATREON_LINK = "https://www.patreon.com/tsip";
export const GITHUB_LINK = "https://github.com/Self-Improvement-Project/self-improvement-project.github.io";
export const ARTICLES_LINK = "/articles";

const LinkButtons = ({style}: { style?: CSSProperties }) => (
    <div style={style}>
        {/*<Box>*/}
        {/*    <Button*/}
        {/*        variant="contained"*/}
        {/*        style={buttonStyles.EBookButton}*/}
        {/*        href={EBOOK_LINK}*/}
        {/*    >*/}
        {/*        Free Ebook*/}
        {/*    </Button>*/}
        {/*    <Button*/}
        {/*        variant="contained"*/}
        {/*        style={buttonStyles.EmailButton}*/}
        {/*        href={EMAIL_LINK}*/}
        {/*    >*/}
        {/*        Newsletter*/}
        {/*    </Button>*/}
        {/*    <Button*/}
        {/*        variant="outlined"*/}
        {/*        style={buttonStyles.SelfLedOnlineCourseButton}*/}
        {/*        href={SELF_LED_ONLINE_COURSE_LINK}*/}
        {/*    >*/}
        {/*        Self Led Online Course*/}
        {/*    </Button>*/}
        {/*</Box>*/}
        {/*<Box>*/}
        {/*    <Button*/}
        {/*        variant="contained"*/}
        {/*        style={buttonStyles.OneToOneCoachingButton}*/}
        {/*        href={ONE_TO_ONE_COACHING_LINK}*/}
        {/*    >*/}
        {/*        1:1 Coaching*/}
        {/*    </Button>*/}
        {/*    <Button*/}
        {/*        variant="contained"*/}
        {/*        style={buttonStyles.StorySoFarButton}*/}
        {/*        href={STORY_SO_FAR_LINK}*/}
        {/*    >*/}
        {/*        Story So Far...*/}
        {/*    </Button>*/}
        {/*</Box>*/}
    </div>
);

export default LinkButtons;
