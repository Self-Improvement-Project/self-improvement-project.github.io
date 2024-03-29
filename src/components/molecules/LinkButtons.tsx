import { EmailRounded, GitHub, Twitter, YouTube } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import * as React from "react";
import { CSSProperties } from "react";
import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { markLastSeenSpotify } from "../../redux/actions";
import mediumLogo from "../../resources/medium.png";
import spotifyDarkLogo from "../../resources/spotify-dark.png";
import { navigateExternal, now } from "../../utils";


const logoSize = 22;

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

export const Divider = styled.span`
  font-size: 20px;
  color: #868686;
  font-style: normal;
  text-align: center;
  justify-content: center;
  margin-top: 5px;
`;

export const EBOOK_LINK = "https://lawrencemcl.gumroad.com/l/uIpgy";
export const YOUTUBE_LINK = "https://www.youtube.com/channel/UCSENKoMvOBCNtHJF0SP4znA";
export const PODCAST_LINK = "https://open.spotify.com/show/3N9B0UClf9l8SDtgDMH1EU";
export const PODCAST_SUBSCRIPTION_LINK = "https://podcasters.spotify.com/pod/show/the-self-improvement-project/subscribe";
export const TWITTER_LINK = "https://twitter.com/lawrence__mcl";
export const NEWSLETTER_LINK = "https://sunny-painter-2539.ck.page/";
export const EMAIL = "lawrence.selfimprove@gmail.com";
export const SELF_LED_ONLINE_COURSE_LINK = "https://lawrencemcl.gumroad.com/l/JSZyK";
export const ONE_TO_ONE_COACHING_LINK = "/articles/Eight-Week-Wake-Up-Coaching-Program";
export const COACHING_PAYMENT_LINK = "https://lawrencemcl.gumroad.com/l/xmpmd";
export const STORY_SO_FAR_LINK = "/articles/My-Story-So-Far";
export const GITHUB_LINK = "https://github.com/Self-Improvement-Project/self-improvement-project.github.io";
export const MEDIUM_LINK = "https://medium.com/@lawrence.selfimprove";
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
                    <Image src={spotifyDarkLogo} width={logoSize} height={logoSize}/>
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
            <Tooltip title="Medium">
                <IconButton
                    style={styles.DarkClick}
                    href={MEDIUM_LINK}
                >
                    <Image src={mediumLogo} width={logoSize} height={logoSize}/>
                </IconButton>
            </Tooltip>
            <Divider> • </Divider>
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
            <Tooltip title="Github">
                <IconButton
                    style={styles.DarkClick}
                    href={GITHUB_LINK}
                >
                    <GitHub/>
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default LinkButtons;
