import { CSSProperties } from "react";
import { Carousel } from "react-bootstrap";
import radioImage2 from "../../resources/white-simple-podcast-review-instagram-story-1.png";
import radioImage3 from "../../resources/white-simple-podcast-review-instagram-story-2.png";
import radioImage1 from "../../resources/white-simple-podcast-review-instagram-story.png";


const styles: Record<string, CSSProperties> = {
	image: {
		width: "40%",
		minWidth: 300,
		height: "40%"
	}
};

const RadioStatementsCarousel = () => (
	<Carousel style={{backgroundColor: "#1c1c1c"}}>
		<Carousel.Item>
			<img
				// className="d-block w-50"
				src={radioImage1}
				alt="First slide"
				style={styles.image}
			/>
		</Carousel.Item>
		<Carousel.Item>
			<img
				// className="d-block w-100"
				src={radioImage2}
				alt="Second slide"
				style={styles.image}
			/>
		</Carousel.Item>
		<Carousel.Item>
			<img
				// className="d-block w-100"
				src={radioImage3}
				alt="Third slide"
				style={styles.image}
			/>
		</Carousel.Item>
	</Carousel>
);

export default RadioStatementsCarousel;
