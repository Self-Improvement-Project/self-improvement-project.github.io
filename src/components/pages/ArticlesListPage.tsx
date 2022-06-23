import { Container, Grid, TextField } from "@mui/material";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Blogs, IBlog } from "../../articles";
import { selectSeenArticles } from "../../redux/selectors";
import { BlogStub, Title } from "../molecules";
import { ARTICLES_LINK } from "../molecules/LinkButtons";


const styles: Record<string, CSSProperties> = {
    Container: {
        textAlign: "left"
    },
    AlignDown: {
        alignSelf: "end"
    }
};

const ARTICLE_SORT_OPTIONS = [
    "Chronologically",
    "Reverse-Chronologically",
    "Alphabetically",
    "Reverse-Alphabetically",
    "Unread",
    "Read"
] as const;
export type IArticleSortOption = typeof ARTICLE_SORT_OPTIONS[number];

const ArticlesListPage = () => {

    const [ filterText, setFilterText ] = useState("");
    const [ sortBy, setSortBy ] = useState<IArticleSortOption | undefined>();
    const [ sortMethod, setSortMethod ] = useState<IArticleSortOption>("Reverse-Chronologically");

    const [ allArticles, setAllArticles ] = useState<IBlog[]>([]);
    const seenArticles = useSelector(selectSeenArticles);
    const navigate = useNavigate();
    const location = useLocation();

    // on page load
    useEffect(() => {
        setAllArticles(Blogs);
    }, []);

    useEffect(() => {
        if (sortBy) {
            navigate(ARTICLES_LINK, {state: {sort: sortBy}});
        }
    }, [ sortBy ]);

    useEffect(() => {
        const sortMethod = (location.state as any).sort;
        setSortMethod(sortMethod);
    }, [ location ]);

    const filtered = (articles: IBlog[]): IBlog[] =>
        articles.filter((article) =>
            article.title.toLowerCase().includes(filterText.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(filterText.toLowerCase())
        );

    const sorted = (articles: IBlog[], sortedBy: IArticleSortOption): IBlog[] => {
        if (sortedBy) {
            if (sortedBy === "Chronologically") {
                return articles.sort((a, b) =>
                    a.createdAt.getTime() - b.createdAt.getTime()
                );
            } else if (sortedBy === "Reverse-Chronologically") {
                return articles.sort((a, b) =>
                    b.createdAt.getTime() - a.createdAt.getTime()
                );
            } else if (sortedBy === "Alphabetically") {
                return articles.sort((a, b) =>
                    a.title < b.title ? -1 : 1
                );
            } else if (sortedBy === "Reverse-Alphabetically") {
                return articles.sort((a, b) =>
                    a.title < b.title ? 1 : -1
                );
            } else if (sortedBy === "Read") {
                return articles.filter((a) =>
                    seenArticles.includes(a.id)
                );
            } else if (sortedBy === "Unread") {
                return articles.filter((a) =>
                    !seenArticles.includes(a.id)
                );
            } else {
                return articles;
            }
        } else {
            return articles;
        }
    };

    const sortedFilteredArticles = useMemo(() => {
        const filteredArticles = filtered(allArticles);
        console.log(filteredArticles.length);
        console.log(sortMethod);
        return sorted(filteredArticles, sortMethod);
    }, [ allArticles, filterText, sortMethod ]);

    return (
        <Container maxWidth="md" style={styles.Container}>
            <Title/>
            {/*<Logo size="sm"/>*/}
            <Grid container spacing={2} style={{marginBottom: 10}}>
                <Grid item xs={5} style={styles.AlignDown}>
                    <h3> Articles </h3>
                </Grid>
                <Grid item xs={5} style={{textAlign: "right"}}>
                    <TextField
                        id="outlined-basic"
                        label="Filter"
                        variant="standard"
                        style={{marginTop: 0}}
                        value={filterText}
                        size="small"
                        margin="dense"
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                </Grid>
                <Grid item xs={1} style={styles.AlignDown}>
                    <DropdownButton title="Sort" menuVariant="dark" variant="secondary"
                                    onSelect={e => setSortBy(e as unknown as IArticleSortOption)}>
                        {
                            ARTICLE_SORT_OPTIONS.map((option) => (
                                <Dropdown.Item key={option} eventKey={option}>{option}</Dropdown.Item>
                            ))
                        }
                    </DropdownButton>
                </Grid>
            </Grid>
            {
                sortedFilteredArticles.map((article) => (
                    <BlogStub
                        key={article.id}
                        blog={article}
                    />
                ))
            }
        </Container>
    );
};

export default ArticlesListPage;
