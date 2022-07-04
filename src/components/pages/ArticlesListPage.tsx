import { Container, Grid } from "@mui/material";
import { CSSProperties, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
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
import { BlogStub, FilterDropdown, SortDropdown, Title } from "../molecules";
import ArticleAutocomplete from "../molecules/ArticleAutocomplete";
import { IFilterOption } from "../molecules/FilterDropdown";
import { ARTICLES_LINK } from "../molecules/LinkButtons";
import { ISortOption } from "../molecules/SortDropdown";


const styles: Record<string, CSSProperties> = {
    Container: {
        textAlign: "left",
        minHeight: "82vh"
    },
    AlignDown: {
        alignSelf: "end"
    }
};

export interface ArticleListPath {
    sort?: ISortOption;
    filter?: IFilterOption;
}

export const navigateArticleList = (navigate: NavigateFunction, options?: ArticleListPath) => {
    navigate(ARTICLES_LINK, {state: options ?? {}});
};

const ArticlesListPage = () => {

    const [ sortBy, setSortBy ] = useState<ISortOption>("None");
    const [ filterBy, setFilterBy ] = useState<IFilterOption>("None");

    const [ filterText, setFilterText ] = useState("");
    const [ value, setValue ] = useState<string | null>(null);

    const [ allArticles, setAllArticles ] = useState<IBlog[]>([]);
    const seenArticles = useSelector(selectSeenArticles);
    const navigate = useNavigate();
    const location = useLocation();

    // on page load
    useEffect(() => {
        setAllArticles(Blogs);
    }, []);

    useEffect(() => {
        if (sortBy && sortBy !== "None" && filterBy && filterBy !== "None") {
            navigateArticleList(navigate, {sort: sortBy, filter: filterBy});
        } else if (sortBy && sortBy !== "None") {
            navigateArticleList(navigate, {sort: sortBy});
        } else if (filterBy && filterBy !== "None") {
            navigateArticleList(navigate, {filter: filterBy});
        }
    }, [ sortBy, filterBy ]);

    useEffect(() => {
        const sortBy = (location.state as any).sort;
        setSortBy(sortBy ?? "None");
        const filterBy = (location.state as any).filter;
        setFilterBy(filterBy ?? "None");
    }, [ location ]);

    const textFiltered = (articles: IBlog[]): IBlog[] =>
        articles.filter((article) =>
            article.title.toLowerCase().includes(filterText.toLowerCase()) ||
            article.shortTitle.toLowerCase().includes(filterText.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(filterText.toLowerCase())
        );

    const filtered = (articles: IBlog[]): IBlog[] => {
        if (filterBy) {
            if (filterBy === "Read") {
                return articles.filter(read(seenArticles));
            } else if (filterBy === "Unread") {
                return articles.filter(unread(seenArticles));
            } else {
                return articles;
            }
        } else {
            return articles;
        }
    };

    const sorted = (articles: IBlog[]): IBlog[] => {
        if (sortBy) {
            if (sortBy === "Chronologically") {
                return articles.sort(chronologically);
            } else if (sortBy === "Reverse-Chronologically") {
                return articles.sort(reverseChronologically);
            } else if (sortBy === "Alphabetically") {
                return articles.sort(alphabetically);
            } else if (sortBy === "Reverse-Alphabetically") {
                return articles.sort(reverseAlphabetically);
            } else {
                return articles;
            }
        } else {
            return articles;
        }
    };

    const articles = textFiltered(sorted(filtered(allArticles)));

    return (
        <Container maxWidth="md" style={styles.Container}>
            <Title/>
            <Grid container spacing={2} style={{marginBottom: 10}}>
                <Grid item xs={5} style={styles.AlignDown}>
                    <h3> Articles </h3>
                </Grid>
                <Grid item xs={5} style={{textAlign: "right"}}>
                    <ArticleAutocomplete
                        value={value}
                        setValue={setValue}
                        setText={setFilterText}
                    />
                </Grid>
                <Grid item xs={1} style={styles.AlignDown}>
                    <SortDropdown
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />
                </Grid>
                <Grid item xs={1} style={styles.AlignDown}>
                    <FilterDropdown
                        filterBy={filterBy}
                        setFilterBy={setFilterBy}
                    />
                </Grid>
            </Grid>
            {
                articles.length > 0 ?
                    articles.map((article) => (
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
