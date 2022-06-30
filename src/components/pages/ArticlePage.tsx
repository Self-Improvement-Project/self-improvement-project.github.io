import { AccessTime, ArrowBack, ArrowForward, MenuBook, Person } from "@mui/icons-material";
import { Button, Container } from "@mui/material";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ARTICLE_IDS, Blogs, DEFAULT_AUTHOR, getBlog, IARTICLE_ID, IBlog } from "../../articles";
import { markSeenArticle } from "../../redux/actions";
import { simpleDate } from "../../utils";
import { ROUTES } from "../App";
import { Markdown } from "../molecules";


const styles: Record<string, CSSProperties> = {
    Container: {
        // backgroundColor: '#f6f6f6'
        textAlign: "left"
    },
    centered: {
        textAlign: "center"
    },
    centeredPadded: {
        textAlign: "center",
        marginTop: 50
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
    },
    details: {
        textAlign: "center",
        overflow: "hidden",
        width: "auto",
        color: "#737373",
        marginTop: 40,
        marginBottom: 10
    },
    detailIcon: {
        marginLeft: 10
    }
};

const ARTICLES_LINK = "/articles";

const ArticlePage = () => {
    const [ blogId, setBlogId ] = useState<IARTICLE_ID | undefined>(undefined);
    const navigate = useNavigate();
    const location = useLocation();

    const isValidBlogId = (blogId: string) =>
        ARTICLE_IDS.filter((a) => a === blogId).length !== 0;

    const getPreviousBlogId = (currentBlog: IBlog): IARTICLE_ID | undefined => {
        const sortedArticles = Blogs.sort((a, b) =>
            a.createdAt.getTime() - b.createdAt.getTime()
        );
        const currentIndex = sortedArticles.findIndex((article) =>
            article.id === currentBlog.id
        );
        if (currentIndex === 0) {
            return undefined;
        }
        return sortedArticles[currentIndex - 1].id;
    };

    const getNextBlogId = (currentBlog: IBlog): IARTICLE_ID | undefined => {
        const sortedArticles = Blogs.sort((a, b) =>
            a.createdAt.getTime() - b.createdAt.getTime()
        );
        const currentIndex = sortedArticles.findIndex((article) =>
            article.id === currentBlog.id
        );
        if (currentIndex === sortedArticles.length - 1) {
            return undefined;
        }
        return sortedArticles[currentIndex + 1].id;
    };

    const renderCorrectArticle = () => {
        const pathname = window.location.pathname;
        const articleId = pathname.replace(`${ROUTES.ARTICLES}/`, "");
        if (isValidBlogId(articleId)) {
            setBlogId(articleId as IARTICLE_ID);
            markSeenArticleFn(articleId);
        } else {
            navigate(ROUTES.ARTICLES);
        }
    };

    const dispatch = useDispatch();
    const markSeenArticleFn = (articleId: string) => {
        dispatch(markSeenArticle(articleId));
    };

    // on page load
    useEffect(() => {
        renderCorrectArticle();
    }, []);

    // on url change
    useEffect(() => {
        // history.go(0, 3);
        renderCorrectArticle();
    }, [ location ]);

    // on blogId update
    const blog = useMemo(() => {
        if (blogId) {
            return getBlog(blogId);
        } else {
            return undefined;
        }
    }, [ blogId ]);

    return (
        <Container maxWidth="md" style={styles.Container}>
            {blog &&
                <div style={styles.Markdown}>
                    <h3 style={styles.centeredPadded}>{blog.title}</h3>
                    <Container maxWidth={"md"}>
                        <hr/>
                        <Markdown
                            file={blog}
                        />
                        <div style={styles.details}>
                            <Person style={styles.detailIcon}/> {blog.author || DEFAULT_AUTHOR}
                            <AccessTime style={styles.detailIcon}/> {simpleDate(blog.createdAt)}
                        </div>
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
            }

        </Container>
    );
};

export default ArticlePage;
