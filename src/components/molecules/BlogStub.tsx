import { ArrowForward } from "@mui/icons-material";
import { Box } from "@mui/material";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { DEFAULT_AUTHOR, IBlog } from "../../articles";
import { simpleDate } from "../../utils";
import { ROUTES } from "../App";
import Logo from "./Logo";


const styles: Record<string, CSSProperties> = {
	Box: {
		marginBottom: 20,
		textAlign: "left",
		border: "15px solid #eeeeee",
		borderRadius: 15,
		backgroundColor: "#eeeeee"
	},
	subtext: {
		color: "#757575",
		fontSize: 14
	},
	Link: {
		color: "black",
		textDecoration: "none"
	},
	UnderlinedLink: {
		color: "black"
	}
};

interface Props {
	blog: IBlog;
}

const BlogStub = (props: Props) => (
	<Box style={styles.Box}>
		<Link to={`${ROUTES.ARTICLES}/${props.blog.id}`} style={styles.Link}>
			<h4>
				{props.blog.title}
			</h4>
		</Link>
		<p>
			{props.blog.excerpt}
		</p>
		<Link to={`${ROUTES.ARTICLES}/${props.blog.id}`} style={styles.UnderlinedLink}>
			Continue Reading
			<ArrowForward/>
		</Link>
		<Box style={styles.subtext}>
			<Logo size="sm"/>
			<span> {props.blog.author || DEFAULT_AUTHOR} </span>
			<span> • {simpleDate(props.blog.createdAt)} </span>
		</Box>
	</Box>
);

export default BlogStub;
