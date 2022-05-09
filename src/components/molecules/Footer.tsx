import { Email, GitHub, Twitter, YouTube } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";


const Footer = () => (
	<Box>
		<span>
			@{new Date().getUTCFullYear()} The Self Improvement Project
		</span>
		<IconButton
			href="mailto:lawrence.selfimprove@gmail.com"
		>
			<Email/>
		</IconButton>
		<IconButton
			href="https://twitter.com/lawrence__mcl"
		>
			<Twitter/>
		</IconButton>
		<IconButton
			href="https://www.youtube.com/channel/UCSENKoMvOBCNtHJF0SP4znA"
		>
			<YouTube/>
		</IconButton>
		<IconButton
			href="https://github.com/Self-Improvement-Project/self-improvement-project.github.io"
		>
			<GitHub/>
		</IconButton>
	</Box>
);

export default Footer;
