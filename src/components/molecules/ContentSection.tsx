import { Container } from "@mui/material";
import { PropsWithChildren } from "react";


const ContentSection = ({children}: PropsWithChildren<unknown>) => (
	<Container maxWidth="sm">
		{children}
	</Container>
);

export default ContentSection;
