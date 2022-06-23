import { EmailRounded, GitHub, Twitter, YouTube } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { CSSProperties } from "react";


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

const Footer = () => (
    <Box style={styles.Footer}>
		<span style={styles.copyright}>
			@{new Date().getUTCFullYear()} The Self Improvement Project
		</span>
        <IconButton
            style={styles.DarkClick}
            href="mailto:lawrence.selfimprove@gmail.com"
        >
            <EmailRounded/>
        </IconButton>
        <IconButton
            style={styles.DarkClick}
            href="https://twitter.com/lawrence__mcl"
        >
            <Twitter/>
        </IconButton>
        <IconButton
            style={styles.DarkClick}
            href="https://www.youtube.com/channel/UCSENKoMvOBCNtHJF0SP4znA"
        >
            <YouTube/>
        </IconButton>
        <IconButton
            style={styles.DarkClick}
            href="https://github.com/Self-Improvement-Project/self-improvement-project.github.io"
        >
            <GitHub/>
        </IconButton>
    </Box>
);

export default Footer;
