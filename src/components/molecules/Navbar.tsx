// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuBookTwoTone } from "@mui/icons-material";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { CSSProperties, useMemo } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Blogs } from "../../articles";
import { markLastSeenSpotify } from "../../redux/actions";
import { selectLastSeenSpotifyDate, selectSeenArticles } from "../../redux/selectors";
import spotifyDark from "../../resources/spotify-dark.png";
import spotifyWhite from "../../resources/spotify-white.png";
import { dayDifference, now } from "../../utils";
import { ARTICLES_LINK, PODCAST_LINK } from "./LinkButtons";
import Logo from "./Logo";


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
    }
};

export default () => {
    const [ anchorEl, setAnchorEl ] = React.useState<null | HTMLElement>(null);
    const [ mobileMoreAnchorEl, setMobileMoreAnchorEl ] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

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

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const linkToUnreadArticles = () => {
        navigate(ARTICLES_LINK, {state: {sort: "Unread"}});
    };
    const linkToArticles = () => {
        navigate(ARTICLES_LINK, {state: {sort: "Reverse-Chronologically"}});
    };

    const dispatch = useDispatch();
    const setLastSeenSpotifyFn = () => {
        dispatch(markLastSeenSpotify(now()));
    };

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={() => {
                setLastSeenSpotifyFn();
                window.location.href = PODCAST_LINK;
            }}>
                <Badge badgeContent={numUnseenSpotifyTracks} color="warning">
                    <Image src={spotifyDark} width={25} height={25}/>
                </Badge>
            </MenuItem>
            <MenuItem onClick={linkToUnreadArticles}>
                <Badge badgeContent={numUnseenArticles} color="warning">
                    <NotificationsIcon/>
                </Badge>
            </MenuItem>
        </Menu>
    );
    const navigate = useNavigate();

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Link to={"/"} style={styles.Undecorated}>
                        <Logo size={"sm"} style={styles.Logo}/>
                    </Link>
                    <IconButton
                        size="large"
                        onClick={linkToArticles}
                        style={styles.LightClick}
                    >
                        <MenuBookTwoTone/>
                    </IconButton>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: {xs: "none", md: "flex"}}}>
                        <IconButton
                            size="large"
                            aria-label="spotify"
                            style={styles.LightClick}
                            onClick={() => {
                                setLastSeenSpotifyFn();
                                window.location.href = PODCAST_LINK;
                            }}
                        >
                            <Badge badgeContent={numUnseenSpotifyTracks} color="warning">
                                <Image src={spotifyWhite} width={25} height={25}/>
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label={`${numUnseenArticles} new notifications`}
                            color="inherit"
                            onClick={linkToUnreadArticles}
                        >
                            <Badge badgeContent={numUnseenArticles} color="warning">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box sx={{display: {xs: "flex", md: "none"}}}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
