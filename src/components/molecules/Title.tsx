import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../App";


const styles: Record<string, CSSProperties> = {
	noUnderline: {
		textDecoration: "none"
	},
	title: {
		marginTop: 45,
		marginBottom: 0,
		paddingBottom: 0
	},
	link: {
		color: "black",
		textDecoration: "none"
	},
	subtitle: {
		marginTop: 5,
		paddingTop: 0,
		color: "gray",
		marginBottom: 20
	}
};

const Title = () => (
	<>
		<h1 style={styles.title}>
			<Link to={ROUTES.HOME} style={styles.link}>
				The Self Improvement Project
			</Link>
		</h1>
		<p style={styles.subtitle}>
			It might be exactly what you need to hear today
		</p>
	</>
);

export default Title;
