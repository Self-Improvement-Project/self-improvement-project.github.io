import { EmailRounded, Twitter, YouTube } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import * as React from "react";
import { CSSProperties } from "react";
import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { markLastSeenSpotify } from "../../redux/actions";
import patreonDark from "../../resources/patreon-dark.png";
import soundCloudDark from "../../resources/sound-cloud-dark.png";
import spotifyDark from "../../resources/spotify-dark.png";
import { navigateExternal, now } from "../../utils";


const styles: Record<string, CSSProperties> = {
    SpacedOut: {
        margin: 5
    },
    LightClick: {
        color: "white"
    },
    DarkClick: {
        color: "#3d3d3d",
        border: "solid 1px #3d3d3d",
        margin: 5
    },
    group: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20
    }
};

export const EBOOK_LINK = "https://lawrencemcl.gumroad.com/l/uIpgy";
export const YOUTUBE_LINK = "https://www.youtube.com/channel/UCSENKoMvOBCNtHJF0SP4znA";
export const PODCAST_LINK = "https://open.spotify.com/show/3N9B0UClf9l8SDtgDMH1EU";
export const TWITTER_LINK = "https://twitter.com/lawrence__mcl";
export const NEWSLETTER_LINK = "https://sunny-painter-2539.ck.page/";
export const EMAIL = "lawrence.selfimprove@gmail.com";
export const SELF_LED_ONLINE_COURSE_LINK = "https://lawrencemcl.gumroad.com/l/JSZyK?_ga=2.255189960.1104408546.1637501051-2090084602.1632476918&_gl=1*ipzws7*_ga*MjA5MDA4NDYwMi4xNjMyNDc2OTE4*_ga_6LJN6D94N6*MTYzNzYwMzQzNi4xMy4xLjE2Mzc2MDM0NDAuMA..";
export const ONE_TO_ONE_COACHING_LINK = "/articles/Eight-Week-Wake-Up-Coaching-Program";
export const STORY_SO_FAR_LINK = "/articles/My-Story-So-Far";
export const PATREON_LINK = "https://www.patreon.com/tsip";
export const GITHUB_LINK = "https://github.com/Self-Improvement-Project/self-improvement-project.github.io";
export const SOUND_CLOUD_LINK = "https://soundcloud.com/user-620056653?ref=clipboard&p=i&c=1";
export const ARTICLES_LINK = "/articles";

const LinkButtons = () => {
    const dispatch = useDispatch();
    const setLastSeenSpotifyFn = () => {
        dispatch(markLastSeenSpotify(now()));
    };
    return (
        <div style={styles.group}>
            <Tooltip title="Spotify">
                <IconButton
                    style={styles.DarkClick}
                    onClick={() => {
                        setLastSeenSpotifyFn();
                        navigateExternal(PODCAST_LINK);
                    }}
                >
                    <Image src={spotifyDark} width={22} height={22}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="YouTube">
                <IconButton
                    style={styles.DarkClick}
                    href={YOUTUBE_LINK}
                >
                    <YouTube/>
                </IconButton>
            </Tooltip>
            <Tooltip title="SoundCloud">
                <IconButton
                    style={styles.DarkClick}
                    href={SOUND_CLOUD_LINK}
                >
                    <Image src={soundCloudDark} width={22} height={22}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Patreon">
                <IconButton
                    style={styles.DarkClick}
                    href={PATREON_LINK}
                >
                    <Image src={patreonDark} width={20} height={20}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Email">
                <IconButton
                    style={styles.DarkClick}
                    href={`mailto:${EMAIL}`}
                >
                    <EmailRounded/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Twitter">
                <IconButton
                    style={styles.DarkClick}
                    href={TWITTER_LINK}
                >
                    <Twitter/>
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default LinkButtons;
