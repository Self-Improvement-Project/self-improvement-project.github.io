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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Blogs } from "../../articles";
import { selectSeenArticles } from "../../redux/selectors";
import { ARTICLES_LINK } from "./LinkButtons";
import Logo from "./Logo";


const styles: Record<string, CSSProperties> = {
    Logo: {
        marginRight: 20,
        cursor: "pointer"
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
    const numUnseenArticles = useMemo(() => {
        return Blogs.length - seenArticles.length;
    }, [ seenArticles ]);

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
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label={`${numUnseenArticles} new notifications`}
                    color="inherit"
                >
                    <Badge badgeContent={numUnseenArticles} color="warning">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Link to={"/"} style={{color: "white", textDecoration: "none"}}>
                        <Logo size={"sm"} style={styles.Logo}/>
                    </Link>
                    <Link to={ARTICLES_LINK}>
                        <IconButton size="large" style={{color: "#f3f3f3", textDecoration: "none"}}>
                            <MenuBookTwoTone/>
                        </IconButton>
                    </Link>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: {xs: "none", md: "flex"}}}>
                        <IconButton
                            size="large"
                            aria-label={`${numUnseenArticles} new notifications`}
                            color="inherit"
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
