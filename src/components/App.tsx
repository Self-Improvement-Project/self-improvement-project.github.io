import { Box, Button, Container, Grid } from "@mui/material";
// import BookIcon from '@mui/icons-material/Book';
import React from 'react';
import '../styles/App.css';

const size = 3;
const spacing = 2;
const buttonGroup = {
  margin: 5
};

const App = () => {
  return (
    <div className="App">
      <Container
      style={{
        // backgroundColor: '#f6f6f6'
      }}
      >
        <header className="App-header">
          <h1>
            The Self Improvement Project
          </h1>
          <p>
            It might be exactly what you need to hear today
          </p>

          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            <i>
              "What I like about Lawrence’s approach to self improvement is putting the emphasis on making people think what
              they really want and who they want to be, instead of giving them a fixed, one-size-fits-all solution. Because
              after all, each of us defines success and fulfilment in our own, unique way."
            </i>
          </p>

            <Box>
              <Button
                  variant="contained"
                  style={{ ...buttonGroup, backgroundColor: '#8ad4ff' }}
                  // endIcon={<BookIcon />}
                  href="https://lawrencemcl.gumroad.com/l/uIpgy"
              >
                Free Ebook
              </Button>
              <Button
                  variant="contained"
                  style={{ ...buttonGroup, backgroundColor: '#ff3702' }}
                  href="https://www.youtube.com/channel/UCSENKoMvOBCNtHJF0SP4znA"
              >
                YouTube
              </Button>

              <Button
                  variant="contained"
                  style={{ ...buttonGroup, backgroundColor: '#ffb300' }}
                  href="https://open.spotify.com/show/3N9B0UClf9l8SDtgDMH1EU"
              >
                Podcast
              </Button>
              <Button
                  variant="contained"
                  style={{ ...buttonGroup, backgroundColor: '#01aeff' }}
                  href="https://twitter.com/lawrence__mcl"
              >
                Twitter
              </Button>

              <Button
                  variant="contained"
                  style={{ ...buttonGroup, backgroundColor: '#013ba3' }}
                  href="https://sunny-painter-2539.ck.page/"
              >
                Email
              </Button>

              <Button
                  variant="outlined"
                  style={{ ...buttonGroup, color: '#000', backgroundColor: '#ffff' }}
                  href="https://lawrencemcl.gumroad.com/l/JSZyK?_ga=2.255189960.1104408546.1637501051-2090084602.1632476918&_gl=1*ipzws7*_ga*MjA5MDA4NDYwMi4xNjMyNDc2OTE4*_ga_6LJN6D94N6*MTYzNzYwMzQzNi4xMy4xLjE2Mzc2MDM0NDAuMA.."
              >
                Self Led Online Course
              </Button>

            </Box>
            <Box>

              <Button
                  variant="contained"
                  style={{ ...buttonGroup, backgroundColor: '#1478be' }}
                  href="https://lawrenceselfimprove.wordpress.com/2021/10/30/8-week-wake-up-coaching-program/"
              >
                1:1 Coaching
              </Button>
              <Button
                  variant="contained"
                  style={{ ...buttonGroup, backgroundColor: '#303030' }}
                  href="https://lawrenceselfimprove.wordpress.com/2021/10/27/my-story-so-far/"
              >
                Story So Far...
              </Button>
              <Button
                  variant="contained"
                  style={{ ...buttonGroup, backgroundColor: '#a04e9f' }}
                  href="https://www.patreon.com/tsip"
              >
                Patreon
              </Button>
            </Box>

        </header>
      </Container>
    </div>
  );
}

export default App;
