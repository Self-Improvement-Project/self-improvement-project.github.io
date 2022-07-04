import { Autocomplete, Container, Grid, TextField } from "@mui/material";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Blogs, IBlog } from "../../articles";
import { selectSeenArticles } from "../../redux/selectors";
import {
    alphabetically,
    chronologically,
    read,
    reverseAlphabetically,
    reverseChronologically,
    unread
} from "../../utils";
import { BlogStub, Title } from "../molecules";
import { ARTICLES_LINK } from "../molecules/LinkButtons";


const styles: Record<string, CSSProperties> = {
    Container: {
        textAlign: "left",
        minHeight: "82vh"
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
            article.shortTitle.toLowerCase().includes(filterText.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(filterText.toLowerCase())
        );

    const sorted = (articles: IBlog[], sortedBy: IArticleSortOption): IBlog[] => {
        if (sortedBy) {
            if (sortedBy === "Chronologically") {
                return articles.sort(chronologically);
            } else if (sortedBy === "Reverse-Chronologically") {
                return articles.sort(reverseChronologically);
            } else if (sortedBy === "Alphabetically") {
                return articles.sort(alphabetically);
            } else if (sortedBy === "Reverse-Alphabetically") {
                return articles.sort(reverseAlphabetically);
            } else if (sortedBy === "Read") {
                return articles.filter(read(seenArticles));
            } else if (sortedBy === "Unread") {
                return articles.filter(unread(seenArticles));
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

    const options = Blogs.sort((a, b) =>
        a.shortTitle < b.shortTitle ? -1 : 1
    ).map((article) => article.shortTitle);
    const [ value, setValue ] = useState<string | null>(null);
    const [ inputValue, setInputValue ] = useState("");

    const [ viewWhich, setViewWhich ] = useState<"All" | "Read" | "Unread">("All");

    return (
        <Container maxWidth="md" style={styles.Container}>
            <Title/>
            {/*<Logo size="sm"/>*/}
            <Grid container spacing={2} style={{marginBottom: 10}}>
                <Grid item xs={5} style={styles.AlignDown}>
                    <h3> Articles </h3>
                </Grid>
                <Grid item xs={5} style={{textAlign: "right"}}>
                    <Autocomplete
                        freeSolo
                        disablePortal
                        options={options}
                        renderInput={(params) => <TextField {...params} label="Article Title/Content"/>}
                        value={value}
                        onChange={(event: any, newValue: string | null) => {
                            setValue(newValue);
                            setFilterText(newValue === null ? "" : newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                            setFilterText(newInputValue);
                        }}
                    />
                </Grid>
                <Grid item xs={1} style={styles.AlignDown}>
                    {/*<Tooltip title={viewWhich}>*/}
                    {/*    <IconButton>*/}
                    {/*        {*/}
                    {/*            viewWhich === "Read" ? (*/}
                    {/*                    <VisibilityRounded/>*/}
                    {/*                ) :*/}
                    {/*                viewWhich === "Unread" ? (*/}
                    {/*                        <VisibilityOffRounded/>*/}
                    {/*                    ) :*/}
                    {/*                    viewWhich === "All" && (*/}
                    {/*                        <VisibilityRounded/>*/}
                    {/*                    )*/}
                    {/*        }*/}
                    {/*    </IconButton>*/}
                    {/*</Tooltip>*/}
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
                sortedFilteredArticles.length > 0 ?
                    sortedFilteredArticles.map((article) => (
                        <BlogStub
                            key={article.id}
                            blog={article}
                        />
                    )) :
                    <p> No articles match the filtered criteria 😢 </p>
            }
        </Container>
    );
};

export default ArticlesListPage;
