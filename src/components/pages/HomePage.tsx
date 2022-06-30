import { EmailRounded, Twitter, YouTube } from "@mui/icons-material";
import { Container, IconButton } from "@mui/material";
import * as React from "react";
import { CSSProperties } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getRecentBlogs } from "../../articles";
import { markLastSeenSpotify } from "../../redux/actions";
import patreonDark from "../../resources/patreon-dark.png";
import spotifyDark from "../../resources/spotify-dark.png";
import { navigateExternal, now } from "../../utils";
import { BlogStub, Logo, RadioStatementsCarousel, Title } from "../molecules";
import { EMAIL, PATREON_LINK, PODCAST_LINK, TWITTER_LINK, YOUTUBE_LINK } from "../molecules/LinkButtons";


const styles: Record<string, CSSProperties> = {
    Container: {
        // backgroundColor: '#f6f6f6'
        textAlign: "center"
    },
    subtitle: {
        marginTop: 30,
        textAlign: "left"
    },
    LargeLogo: {
        paddingTop: 10
    },
    LinkButtonGroup: {
        paddingTop: 20
        // paddingBottom: 45
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    infoGroup1: {
        fontSize: 16,
        textAlign: "center",
        paddingBottom: 25,
        backgroundColor: "#c7e6f5",
        border: "solid 2px #67cfff",
        borderRadius: 15,
        padding: "20px 5px 0px 5px",
        marginBottom: 20
    },
    infoGroup2: {
        fontSize: 16,
        textAlign: "center",
        paddingBottom: 25,
        backgroundColor: "#f5ddc6",
        border: "solid 2px #ffc48a",
        borderRadius: 15,
        padding: "20px 5px 0px 5px",
        marginBottom: 20,
        minHeight: 192
    },
    infoGroup3: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20
    },
    DarkClick: {
        color: "#3d3d3d",
        border: "solid 1px #3d3d3d",
        margin: 5
    },
    padded: {
        paddingBottom: 8
    },
    undecorated: {
        listStyle: "none"
    },
    icon: {
        fontSize: 20,
        color: "#484848",
        marginRight: 5
    }
};

const HomePage = () => {
    const dispatch = useDispatch();
    const setLastSeenSpotifyFn = () => {
        dispatch(markLastSeenSpotify(now()));
    };
    const bullet = "•"; //"◦";
    return (
        <Container maxWidth="md" style={styles.Container}>
            <Title/>

            <Logo size="lg" style={styles.LargeLogo}/>

            <Container maxWidth={"sm"}>
                <p>
                    <i>
                        "What I like about Lawrence’s approach to self improvement is putting the emphasis on making
                        people
                        think what
                        they really want and who they want to be, instead of giving them a fixed, one-size-fits-all
                        solution.
                        Because
                        after all, each of us defines success and fulfilment in our own, unique way."
                    </i>
                </p>
            </Container>

            <div style={styles.infoGroup3}>
                <IconButton
                    style={styles.DarkClick}
                    onClick={() => {
                        setLastSeenSpotifyFn();
                        navigateExternal(PODCAST_LINK);
                    }}
                >
                    <Image src={spotifyDark} width={22} height={22}/>
                </IconButton>
                <IconButton
                    style={styles.DarkClick}
                    href={YOUTUBE_LINK}
                >
                    <YouTube/>
                </IconButton>
                <IconButton
                    style={styles.DarkClick}
                    href={PATREON_LINK}
                >
                    <Image src={patreonDark} width={20} height={20}/>
                </IconButton>
                <IconButton
                    style={styles.DarkClick}
                    href={`mailto:${EMAIL}`}
                >
                    <EmailRounded/>
                </IconButton>
                <IconButton
                    style={styles.DarkClick}
                    href={TWITTER_LINK}
                >
                    <Twitter/>
                </IconButton>
            </div>

            <Container maxWidth={"md"}>
                <div>
                    <Row>
                        <Col md={6}>
                            <div style={styles.infoGroup1}>
                                <p style={styles.padded}>
                                    <span style={styles.infoTitle}> Me in 10 seconds </span><br/>
                                    <li style={styles.undecorated}>
                                        {bullet} I work on episodes of this podcast weekly
                                    </li>
                                    <li style={styles.undecorated}>
                                        {bullet} I’ve worked in education for 10 years
                                    </li>
                                    <li style={styles.undecorated}>
                                        {bullet} I have a black Labrador 🐾
                                    </li>
                                    <li style={styles.undecorated}>
                                        {bullet} I enjoy cycling & football
                                    </li>
                                    <li style={styles.undecorated}>
                                        {bullet} I love Espresso ☕️
                                    </li>
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div style={styles.infoGroup2}>
                                <p style={styles.padded}>
                                    <span style={styles.infoTitle}> What Am I Up To Right Now? </span><br/>
                                    <li style={styles.undecorated}>
                                        {bullet} Podcasting weekly
                                    </li>
                                    <li style={styles.undecorated}>
                                        {bullet} Writing weekly
                                    </li>
                                    <li style={styles.undecorated}>
                                        {bullet} Working towards 1,000 true fans
                                    </li>
                                    <li style={styles.undecorated}>
                                        {bullet} Building my 1:1 Coaching
                                    </li>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            <RadioStatementsCarousel/>

            <h5 style={styles.subtitle}> Recent Articles </h5>
            {getRecentBlogs(3).map((blog) => (
                <BlogStub blog={blog} key={blog.id}/>
            ))}

        </Container>
    );
};

export default HomePage;
