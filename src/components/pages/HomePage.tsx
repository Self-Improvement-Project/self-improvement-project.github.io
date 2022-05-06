import { Container } from "@mui/material";
import { CSSProperties } from "react";
import { Footer, LinkButtons, Title } from "../molecules";

const styles: Record<string, CSSProperties> = {
    Container: {
        // backgroundColor: '#f6f6f6'
        textAlign: 'center'
    }
};

const HomePage = () => (
    <Container style={styles.Container}>
        <Title />

        {/*<img src={logo} className="App-logo" alt="logo" />*/}

        <p>
            <i>
                "What I like about Lawrence’s approach to self improvement is putting the emphasis on making people think what
                they really want and who they want to be, instead of giving them a fixed, one-size-fits-all solution. Because
                after all, each of us defines success and fulfilment in our own, unique way."
            </i>
        </p>

        <LinkButtons />

        <Footer />
    </Container>
  );

export default HomePage;
