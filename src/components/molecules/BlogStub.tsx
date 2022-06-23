import { ArrowForward, Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import { CSSProperties, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DEFAULT_AUTHOR, IBlog } from "../../articles";
import { selectSeenArticles } from "../../redux/selectors";
import { simpleDate } from "../../utils";
import { ROUTES } from "../App";
import Logo from "./Logo";


const styles: Record<string, CSSProperties> = {
    Box: {
        marginBottom: 20,
        textAlign: "left",
        border: "15px solid #eeeeee",
        borderRadius: 15,
        backgroundColor: "#eeeeee"
    },
    subtext: {
        color: "#757575",
        fontSize: 14
    },
    Link: {
        color: "black",
        textDecoration: "none"
    },
    UnderlinedLink: {
        color: "black"
    }
};

interface Props {
    blog: IBlog;
}

const BlogStub = (props: Props) => {
    const seenArticles = useSelector(selectSeenArticles);
    const unseen = useMemo(() => {
        return !seenArticles.includes(props.blog.id);
    }, [ seenArticles ]);
    return (
        <Box style={styles.Box}>
            <Link to={`${ROUTES.ARTICLES}/${props.blog.id}`} style={styles.Link}>
                <h4>
                    {unseen && (
                        <Circle style={{width: 10, height: 10, marginRight: 5, color: "#fa721e"}}/>
                    )}
                    {props.blog.title}
                </h4>
            </Link>
            <p>
                {props.blog.excerpt}
            </p>
            <Link to={`${ROUTES.ARTICLES}/${props.blog.id}`} style={styles.UnderlinedLink}>
                Continue Reading
                <ArrowForward/>
            </Link>
            <Box style={styles.subtext}>
                <Logo size="sm"/>
                <span> {props.blog.author || DEFAULT_AUTHOR} </span>
                <span> • {simpleDate(props.blog.createdAt)} </span>
            </Box>
        </Box>
    );
};

export default BlogStub;
