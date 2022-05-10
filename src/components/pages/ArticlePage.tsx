import { Container } from "@mui/material";
import { CSSProperties, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ARTICLE_IDS, getBlog, IARTICLE_ID } from "../../articles";
import { ROUTES } from "../App";
import { Logo, Markdown, Title } from "../molecules";


const styles: Record<string, CSSProperties> = {
	Container: {
		// backgroundColor: '#f6f6f6'
		textAlign: "left"
	},
	centered: {
		textAlign: "center"
	},
	Markdown: {
		paddingBottom: 30
	}
};

const ArticlePage = () => {
	const [ blog, setBlog ] = useState<IARTICLE_ID | undefined>(undefined);
	const navigate = useNavigate();

	const isValidBlogId = (blogId: string) =>
		ARTICLE_IDS.filter((a) => a === blogId).length !== 0;

	useEffect(() => {
		const pathname = window.location.pathname;
		const articleId = pathname.replace(`${ROUTES.ARTICLES}/`, "");
		console.log(articleId);
		if (isValidBlogId(articleId)) {
			setBlog(articleId as IARTICLE_ID);
		} else {
			navigate(ROUTES.ARTICLES);
		}
	}, []);

	return (
		<Container maxWidth="md" style={styles.Container}>
			<Title/>
			<Logo size="sm" style={styles.centered}/>
			{blog &&
                <>
                    <hr/>
                    <h3 style={styles.centered}>{getBlog(blog).title}</h3>
                    <hr/>
                    <div style={styles.Markdown}>
                        <Container maxWidth={"sm"}>
                            <Markdown
                                file={getBlog(blog)}
                            />
                        </Container>
                    </div>
                </>
			}

		</Container>
	);
};

export default ArticlePage;
