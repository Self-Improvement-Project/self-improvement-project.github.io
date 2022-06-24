import { EmailRounded, GitHub, Twitter, YouTube } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import * as React from "react";
import { CSSProperties } from "react";
import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { markLastSeenSpotify } from "../../redux/actions";
import patreonDark from "../../resources/patreon-dark.png";
import spotifyDark from "../../resources/spotify-dark.png";
import { now } from "../../utils";
import { EMAIL, GITHUB_LINK, PATREON_LINK, PODCAST_LINK, TWITTER_LINK, YOUTUBE_LINK } from "./LinkButtons";


const styles: Record<string, CSSProperties> = {
    Footer: {
        backgroundColor: "#eeeeee",
        textAlign: "center",
        fontStyle: "italic",
        border: "1px solid",
        borderColor: "#b7b7b7"
    },
    copyright: {
        marginRight: 20
    },
    DarkClick: {
        color: "#3d3d3d"
    }
};

const Footer = () => {
    const dispatch = useDispatch();
    const setLastSeenSpotifyFn = () => {
        dispatch(markLastSeenSpotify(now()));
    };
    return (
        <Box style={styles.Footer}>
		<span style={styles.copyright}>
			@{new Date().getUTCFullYear()} The Self Improvement Project
		</span>
            <IconButton
                style={styles.DarkClick}
                onClick={() => {
                    setLastSeenSpotifyFn();
                    window.location.href = PODCAST_LINK;
                }}
            >
                <Image src={spotifyDark} width={22} height={22}/>
            </IconButton>
            <IconButton
                style={styles.DarkClick}
                href={YOUTUBE_LINK}
            >
                <YouTube/>
            </IconButton>
            <IconButton
                style={styles.DarkClick}
                href={PATREON_LINK}
            >
                <Image src={patreonDark} width={20} height={20}/>
            </IconButton>
            <IconButton
                style={styles.DarkClick}
                href={`mailto:${EMAIL}`}
            >
                <EmailRounded/>
            </IconButton>
            <IconButton
                style={styles.DarkClick}
                href={TWITTER_LINK}
            >
                <Twitter/>
            </IconButton>
            <IconButton
                style={styles.DarkClick}
                href={GITHUB_LINK}
            >
                <GitHub/>
            </IconButton>
        </Box>
    );
};

export default Footer;
