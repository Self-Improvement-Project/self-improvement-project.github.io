import { ArrowForward } from "@mui/icons-material";
import { Box } from "@mui/material";
import { CSSProperties, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEFAULT_AUTHOR, IBlog } from "../../articles";
import { selectSeenArticles } from "../../redux/selectors";
import { simpleDate } from "../../utils";
import { ROUTES } from "../App";
import Logo from "./Logo";


const styles: Record<string, CSSProperties> = {
    Box: {
        marginBottom: 20,
        textAlign: "left",
        border: "1px solid",
        borderColor: "#b7b7b7",
        padding: "14px 14px 0 14px",
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

const UnreadCircle = styled.div`
  background-color: #ff9a5e;
  display: inline-block;
  border: 1px solid #fa721e;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 12px;
  height: 12px;
  margin-right: 10px;
  margin-bottom: 2px;
`;

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
                <h5>
                    {unseen && (
                        <UnreadCircle/>
                    )}
                    {props.blog.title}
                </h5>
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
