import { ArrowBack, ArrowForward, MenuBook } from "@mui/icons-material";
import { Button, Container } from "@mui/material";
import { CSSProperties, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ARTICLE_IDS, Blogs, getBlog, IARTICLE_ID } from "../../articles";
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
	},
	Button: {
		backgroundColor: "#ffffff",
		margin: 5,
		color: "#2d2d2d",
		borderColor: "#2d2d2d"
	},
	DisabledButton: {
		backgroundColor: "#ffffff",
		margin: 5,
		color: "#9d9d9d",
		borderColor: "#9d9d9d"
	}
};

const ARTICLES_LINK = "/articles";

const ArticlePage = () => {
	const [ blog, setBlog ] = useState<IARTICLE_ID | undefined>(undefined);
	const navigate = useNavigate();

	const isValidBlogId = (blogId: string) =>
		ARTICLE_IDS.filter((a) => a === blogId).length !== 0;

	const getPreviousBlogId = (currentBlogId: IARTICLE_ID): IARTICLE_ID | undefined => {
		const sortedArticles = Blogs.sort((a, b) =>
			a.createdAt.getTime() - b.createdAt.getTime()
		);
		const currentIndex = sortedArticles.findIndex((article) =>
			article.id === currentBlogId
		);
		if (currentIndex === 0) {
			return undefined;
		}
		return sortedArticles[currentIndex - 1].id;
	};

	const getNextBlogId = (currentBlogId: IARTICLE_ID): IARTICLE_ID | undefined => {
		const sortedArticles = Blogs.sort((a, b) =>
			a.createdAt.getTime() - b.createdAt.getTime()
		);
		const currentIndex = sortedArticles.findIndex((article) =>
			article.id === currentBlogId
		);
		if (currentIndex === sortedArticles.length - 1) {
			return undefined;
		}
		return sortedArticles[currentIndex + 1].id;
	};

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
                            <div style={styles.centered}>
                                <Button
                                    variant="outlined"
                                    style={getPreviousBlogId(blog) ? styles.Button : styles.DisabledButton}
                                    disabled={!getPreviousBlogId(blog)}
                                    href={`${ARTICLES_LINK}/${getPreviousBlogId(blog)!}`}
                                    startIcon={<ArrowBack/>}
                                >
                                    Previous
                                </Button>
                                <Button
                                    variant="outlined"
                                    style={styles.Button}
                                    href={ARTICLES_LINK}
                                    endIcon={<MenuBook/>}
                                >
                                    More Articles
                                </Button>
                                <Button
                                    variant="outlined"
                                    style={getNextBlogId(blog) ? styles.Button : styles.DisabledButton}
                                    disabled={!getNextBlogId(blog)}
                                    href={`${ARTICLES_LINK}/${getNextBlogId(blog)!}`}
                                    endIcon={<ArrowForward/>}
                                >
                                    Next
                                </Button>
                            </div>
                        </Container>
                    </div>
                </>
			}

		</Container>
	);
};

export default ArticlePage;
