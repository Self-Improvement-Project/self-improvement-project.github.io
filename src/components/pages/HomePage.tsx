import { Container } from "@mui/material";
import { CSSProperties } from "react";
import logoWithText from "../../resources/self-improvement-project_text_transparent.png";
import { Footer, LinkButtons, RadioStatementsCarousel, Title } from "../molecules";


const styles: Record<string, CSSProperties> = {
	Container: {
		// backgroundColor: '#f6f6f6'
		textAlign: "center"
	}
};

const HomePage = () => (
	<Container maxWidth="md" style={styles.Container}>
		<Title/>

		<img
			src={logoWithText}
			width="20%"
			height="20%"
			className="logo"
			alt="logo"
		/>

		<p>
			<i>
				"What I like about Lawrence’s approach to self improvement is putting the emphasis on making people
				think what
				they really want and who they want to be, instead of giving them a fixed, one-size-fits-all solution.
				Because
				after all, each of us defines success and fulfilment in our own, unique way."
			</i>
		</p>

		<LinkButtons/>

		<p>
			<b> Me in 10 seconds </b>
			I’ve worked in different forms of education for roughly 10 years. I have a black Labrador. I enjoy cycling
			and football. I love Espresso. Each week I’m working on episodes for The Self Improvement Project Podcast.
		</p>

		<p>
			<b> What Am I Up To Right Now? </b>
			Podcasting and writing each week. Working towards 1000 true fans. Building my 1:1 Coaching.
		</p>

		<p>
			Contact me by DM on Twitter <a href="">@lawrence__mcl</a> or email me: <a
			href="">lawrence.selfimprove@gmail.com</a>
		</p>

		<RadioStatementsCarousel/>

		<Footer/>
	</Container>
);

export default HomePage;
