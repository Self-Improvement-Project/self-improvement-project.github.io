import {
    ArtTrackOutlined,
    LibraryBooks,
    LibraryBooksOutlined,
    LightbulbOutlined,
    MailOutlineRounded,
    MenuBookTwoTone,
    PersonOutlined
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { CSSProperties, useMemo, useState } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Blogs } from "../../articles";
import { markLastSeenSpotify } from "../../redux/actions";
import { selectLastSeenSpotifyDate, selectSeenArticles } from "../../redux/selectors";
import spotifyWhiteLogo from "../../resources/spotify-white.png";
import { dayDifference, navigateExternal, now } from "../../utils";
import { navigateArticleList } from "../pages/ArticlesListPage";
import {
    EBOOK_LINK,
    NEWSLETTER_LINK,
    ONE_TO_ONE_COACHING_LINK,
    PODCAST_LINK,
    SELF_LED_ONLINE_COURSE_LINK,
    STORY_SO_FAR_LINK
} from "./LinkButtons";
import Logo from "./Logo";


const logoSize = 25;

const styles: Record<string, CSSProperties> = {
    Logo: {
        marginRight: 20,
        cursor: "pointer"
    },
    Undecorated: {
        textDecoration: "none"
    },
    LightClick: {
        color: "#f3f3f3",
        textDecoration: "none"
    },
    DarkClick: {
        color: "#3d3d3d",
        textDecoration: "none"
    },
    MenuIcon: {
        marginRight: 10
    }
};

const StyledMenuItem = styled(MenuItem)`
  background-color: white !important;
  min-width: 200px;
`;

const MenuText = styled.span`
  margin-top: 5px;
`;

const LeftSection = styled.div``;
const RightSection = styled.div``;


export default () => {
    const seenArticles = useSelector(selectSeenArticles);
    const lastSeenSpotify = useSelector(selectLastSeenSpotifyDate);

    const numUnseenArticles = useMemo(() => {
        return Blogs.length - seenArticles.length;
    }, [ seenArticles ]);

    const numUnseenSpotifyTracks = useMemo(() => {
        const MAX_AMOUNT = 30;
        const RATE_PER_WEEK = 3;
        if (lastSeenSpotify !== null) {
            const daysSince = dayDifference(lastSeenSpotify);
            const uploadedDaysSince = Math.floor(daysSince * RATE_PER_WEEK / 7.0);
            if (daysSince > MAX_AMOUNT) {
                return MAX_AMOUNT;
            } else {
                return uploadedDaysSince;
            }
        } else {
            return MAX_AMOUNT;
        }
    }, [ lastSeenSpotify ]);

    const dispatch = useDispatch();
    const setLastSeenSpotifyFn = () => {
        dispatch(markLastSeenSpotify(now()));
    };

    const navigate = useNavigate();
    const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <LeftSection>
                        <Link to={"/"} style={styles.Undecorated}>
                            <Logo size={"sm"} style={styles.Logo}/>
                        </Link>
                        <Tooltip title="Menu">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleClick}
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            open={open}
                            onClose={handleClose}
                            anchorEl={anchorEl}
                        >
                            <StyledMenuItem
                                onClick={() => {
                                    navigateArticleList(navigate, {sort: "Reverse-Chronologically"});
                                }}
                            >
                                <LibraryBooksOutlined style={styles.MenuIcon}/>
                                <MenuText> Articles </MenuText>
                            </StyledMenuItem>
                            <StyledMenuItem
                                onClick={() => {
                                    navigate(STORY_SO_FAR_LINK);
                                }}>
                                <PersonOutlined style={styles.MenuIcon}/>
                                <MenuText> My Story </MenuText>
                            </StyledMenuItem>
                            <StyledMenuItem
                                onClick={() => {
                                    navigateExternal(EBOOK_LINK);
                                }}
                            >
                                <MenuBookTwoTone style={styles.MenuIcon}/>
                                <span> My Book </span>
                            </StyledMenuItem>
                            <StyledMenuItem
                                onClick={() => {
                                    navigateExternal(NEWSLETTER_LINK);
                                }}
                            >
                                <MailOutlineRounded style={styles.MenuIcon}/>
                                <span> Newsletter </span>
                            </StyledMenuItem>
                            <StyledMenuItem
                                onClick={() => {
                                    navigate(ONE_TO_ONE_COACHING_LINK);
                                }}
                            >
                                <LightbulbOutlined style={styles.MenuIcon}/>
                                <span> Life Coaching </span>
                            </StyledMenuItem>
                            <StyledMenuItem
                                onClick={() => {
                                    navigateExternal(SELF_LED_ONLINE_COURSE_LINK);
                                }}
                            >
                                <ArtTrackOutlined style={styles.MenuIcon}/>
                                <span> Online Course </span>
                            </StyledMenuItem>
                        </Menu>
                    </LeftSection>
                    <Box sx={{flexGrow: 1}}/>
                    <RightSection>
                        <Box>
                            <Tooltip title="Spotify">
                                <IconButton
                                    size="large"
                                    aria-label="spotify"
                                    style={styles.LightClick}
                                    onClick={() => {
                                        setLastSeenSpotifyFn();
                                        navigateExternal(PODCAST_LINK);
                                    }}
                                >
                                    <Badge badgeContent={numUnseenSpotifyTracks} color="warning">
                                        <Image src={spotifyWhiteLogo} width={logoSize} height={logoSize}/>
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Unread Articles">
                                <IconButton
                                    size="large"
                                    aria-label={`${numUnseenArticles} new notifications`}
                                    color="inherit"
                                    onClick={() => {
                                        navigateArticleList(navigate, {filter: "Unread"});
                                    }}
                                >
                                    <Badge badgeContent={numUnseenArticles} color="warning">
                                        <LibraryBooks/>
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </RightSection>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
