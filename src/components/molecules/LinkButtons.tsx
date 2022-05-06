import { Box, Button } from "@mui/material";
import { CSSProperties } from "react";
// import BookIcon from '@mui/icons-material/Book';

const styles: Record<string, CSSProperties> = {
    SpacedOut: {
        margin: 5,
    },
    EBookButton: {
        backgroundColor: '#8ad4ff',
    },
    YoutubeButton: {
        backgroundColor: '#ff3702',
    },
    PodcastButton: {
        backgroundColor: '#ffb300',
    },
    TwitterButton: {
        backgroundColor: '#01aeff',
    },
    EmailButton: {
        backgroundColor: '#013ba3',
    },
    SelfLedOnlineCourseButton: {
        backgroundColor: '#ffffff',
    },
    OneToOneCoachingButton: {
        backgroundColor: '#1478be',
    },
    StorySoFarButton: {
        backgroundColor: '#303030',
    },
    PatreonButton: {
        backgroundColor: '#a04e9f',
    }
}

const EBOOK_LINK = 'https://lawrencemcl.gumroad.com/l/uIpgy';
const YOUTUBE_LINK = 'https://www.youtube.com/channel/UCSENKoMvOBCNtHJF0SP4znA';
const PODCAST_LINK = 'https://open.spotify.com/show/3N9B0UClf9l8SDtgDMH1EU';
const TWITTER_LINK = 'https://twitter.com/lawrence__mcl';
const EMAIL_LINK = 'https://sunny-painter-2539.ck.page/';
const SELF_LED_ONLINE_COURSE_LINK = 'https://lawrencemcl.gumroad.com/l/JSZyK?_ga=2.255189960.1104408546.1637501051-2090084602.1632476918&_gl=1*ipzws7*_ga*MjA5MDA4NDYwMi4xNjMyNDc2OTE4*_ga_6LJN6D94N6*MTYzNzYwMzQzNi4xMy4xLjE2Mzc2MDM0NDAuMA..';
const ONE_TO_ONE_COACHING_LINK = 'https://lawrenceselfimprove.wordpress.com/2021/10/30/8-week-wake-up-coaching-program/';
const STORY_SO_FAR_LINK = 'https://lawrenceselfimprove.wordpress.com/2021/10/27/my-story-so-far/';
const PATREON_LINK = 'https://www.patreon.com/tsip';

const LinkButtons = () => (
    <>
        <Box>
            <Button
                variant="contained"
                style={{...styles.SpacedOut, ...styles.EBookButton}}
                // endIcon={<BookIcon />}
                href={EBOOK_LINK}
            >
                Free Ebook
            </Button>
            <Button
                variant="contained"
                style={{...styles.SpacedOut, ...styles.YoutubeButton}}
                href={YOUTUBE_LINK}
            >
                YouTube
            </Button>

            <Button
                variant="contained"
                style={{...styles.SpacedOut, ...styles.PodcastButton}}
                href={PODCAST_LINK}
            >
                Podcast
            </Button>
            <Button
                variant="contained"
                style={{...styles.SpacedOut, ...styles.TwitterButton}}
                href={TWITTER_LINK}
            >
                Twitter
            </Button>

            <Button
                variant="contained"
                style={{...styles.SpacedOut, ...styles.EmailButton}}
                href={EMAIL_LINK}
            >
                Email
            </Button>

            <Button
                variant="outlined"
                style={{...styles.SpacedOut, ...styles.SelfLedOnlineCourseButton}}
                href={SELF_LED_ONLINE_COURSE_LINK}
            >
                Self Led Online Course
            </Button>

        </Box>
        <Box>

            <Button
                variant="contained"
                style={{...styles.SpacedOut, ...styles.OneToOneCoachingButton}}
                href={ONE_TO_ONE_COACHING_LINK}
            >
                1:1 Coaching
            </Button>
            <Button
                variant="contained"
                style={{...styles.SpacedOut, ...styles.StorySoFarButton}}
                href={STORY_SO_FAR_LINK}
            >
                Story So Far...
            </Button>
            <Button
                variant="contained"
                style={{...styles.SpacedOut, ...styles.PatreonButton}}
                href={PATREON_LINK}
            >
                Patreon
            </Button>
        </Box>
    </>
  );

export default LinkButtons;
