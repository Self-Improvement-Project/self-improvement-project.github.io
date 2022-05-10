import { CSSProperties } from "react";
import logo from "../../resources/self-improvement-project-transparent.png";
import logoWithText from "../../resources/self-improvement-project_text_transparent.png";


interface Props {
	size: "sm" | "md" | "lg",
	withText?: boolean,
	style?: CSSProperties
}

const getSource = (withText?: boolean) => withText ? logoWithText : logo;
const getWidth = (size: "sm" | "md" | "lg") => size === "lg" ? 200 : size === "md" ? 100 : 50;
const getHeight = (size: "sm" | "md" | "lg") => size === "lg" ? "auto" : size === "md" ? 100 : 50;

const Logo = ({size, withText, style}: Props) => (
	<img
		style={style}
		src={getSource(withText)}
		width={getWidth(size)}
		height={getHeight(size)}
		className="logo"
		alt="logo"
	/>
);

export default Logo;
