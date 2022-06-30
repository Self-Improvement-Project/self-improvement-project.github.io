import { Mail, Twitter } from "@mui/icons-material";
import { Container } from "@mui/material";
import { CSSProperties } from "react";
import { Col, Row } from "react-bootstrap";
import { getBlog } from "../../articles";
import { BlogStub, LinkButtons, Logo, RadioStatementsCarousel, Title } from "../molecules";
import { EMAIL, TWITTER_LINK } from "../molecules/LinkButtons";


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
        border: "solid 2px #CCCCCCFF",
        borderRadius: 30,
        padding: "20px 5px 0px 5px",
        marginBottom: 20,
        minHeight: 180
    },
    infoGroup2: {
        fontSize: 16,
        textAlign: "center",
        paddingBottom: 25,
        backgroundColor: "#f5ddc6",
        border: "solid 2px #CCCCCCFF",
        borderRadius: 30,
        padding: "20px 5px 0px 5px",
        marginBottom: 20,
        minHeight: 180
    },
    infoGroup3: {
        fontSize: 16,
        textAlign: "center",
        paddingBottom: 25,
        backgroundColor: "#eecece",
        border: "solid 2px #CCCCCCFF",
        borderRadius: 30,
        padding: "20px 5px 0px 5px",
        marginBottom: 20
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
    },
    link: {
        color: "#784dcb"
    }
};

const HomePage = () => (
    <Container maxWidth="md" style={styles.Container}>
        <Title/>

        <Logo size="lg" style={styles.LargeLogo}/>

        <Container maxWidth={"sm"}>
            <p>
                <i>
                    "What I like about Lawrence’s approach to self improvement is putting the emphasis on making people
                    think what
                    they really want and who they want to be, instead of giving them a fixed, one-size-fits-all
                    solution.
                    Because
                    after all, each of us defines success and fulfilment in our own, unique way."
                </i>
            </p>
        </Container>

        <LinkButtons style={styles.LinkButtonGroup}/>

        <Container maxWidth={"md"}>
            <div>
                <Row>
                    <Col md={6}>
                        <div style={styles.infoGroup1}>
                            <p style={styles.padded}>
                                <span style={styles.infoTitle}> Me in 10 seconds </span><br/>
                                <li style={styles.undecorated}>
                                    ◦ I work on episodes of this podcast weekly
                                </li>
                                <li style={styles.undecorated}>
                                    ◦ I’ve worked in education for 10 years
                                </li>
                                <li style={styles.undecorated}>
                                    ◦ I have a black Labrador 🐾
                                </li>
                                <li style={styles.undecorated}>
                                    ◦ I enjoy cycling & football
                                </li>
                                <li style={styles.undecorated}>
                                    ◦ I love Espresso ☕️
                                </li>
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={styles.infoGroup2}>
                            <p style={styles.padded}>
                                <span style={styles.infoTitle}> What Am I Up To Right Now? </span><br/>
                                <li style={styles.undecorated}>
                                    ◦ Podcasting weekly
                                </li>
                                <li style={styles.undecorated}>
                                    ◦ Writing weekly
                                </li>
                                <li style={styles.undecorated}>
                                    ◦ Working towards 1,000 true fans
                                </li>
                                <li style={styles.undecorated}>
                                    ◦ Building my 1:1 Coaching
                                </li>
                            </p>
                        </div>
                    </Col>
                </Row>

                <div style={styles.infoGroup3}>
                    <p>
                        <Twitter style={styles.icon}/> <a style={styles.link} href={TWITTER_LINK}>@lawrence__mcl</a>
                        <br/>
                        <Mail style={styles.icon}/> <a style={styles.link}
                                                       href={`mailto:${EMAIL}`}>lawrence.selfimprove@gmail.com</a>
                    </p>
                </div>
            </div>
        </Container>

        <RadioStatementsCarousel/>

        <h5 style={styles.subtitle}> Recent Articles </h5>
        <BlogStub blog={getBlog("Find-Better-Happiness")}/>
        <BlogStub blog={getBlog("Two-Ways-That-Will-Help-You-Let-Go")}/>
        <BlogStub blog={getBlog("Whats-Wrong-With-Just-Existing")}/>

    </Container>
);

export default HomePage;
