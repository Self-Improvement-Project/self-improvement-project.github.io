import { EmailRounded, GitHub, Twitter, YouTube } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import * as React from "react";
import { CSSProperties } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { markLastSeenSpotify } from "../../redux/actions";
import patreonDark from "../../resources/patreon-dark.png";
import spotifyDark from "../../resources/spotify-dark.png";
import { navigateExternal, now } from "../../utils";
import { EMAIL, GITHUB_LINK, PATREON_LINK, PODCAST_LINK, TWITTER_LINK, YOUTUBE_LINK } from "./LinkButtons";


const styles: Record<string, CSSProperties> = {
    Footer: {
        backgroundColor: "#eeeeee",
        textAlign: "center",
        fontStyle: "italic",
        border: "1px solid",
        borderColor: "#b7b7b7"
    },
    centered: {
        textAlign: "center"
    },
    DarkClick: {
        color: "#3d3d3d"
    }
};

const CopyrightText = styled.div`
  margin-top: 8px;
  text-align: right;

  @media (max-width: 600px) {
    text-align: center !important;
  }
`;

const IconGroup = styled.div`
  text-align: left;

  @media (max-width: 600px) {
    text-align: center !important;
  }
`;

const Footer = () => {
    const dispatch = useDispatch();
    const setLastSeenSpotifyFn = () => {
        dispatch(markLastSeenSpotify(now()));
    };
    return (
        <Box style={styles.Footer}>
            <Row>
                <Col sm>
                    <CopyrightText>
                        <span>
                            @{new Date().getUTCFullYear()} The Self Improvement Project
                        </span>
                    </CopyrightText>
                </Col>
                <Col sm>
                    <IconGroup>
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
                        <Tooltip title="Github">
                            <IconButton
                                style={styles.DarkClick}
                                href={GITHUB_LINK}
                            >
                                <GitHub/>
                            </IconButton>
                        </Tooltip>
                    </IconGroup>
                </Col>
            </Row>
        </Box>
    );
};

export default Footer;
