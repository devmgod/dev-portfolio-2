import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Particles from 'react-particles-js';

import project1 from '../image/Wulfuz/3.png';
import project2 from '../image/mintopoly/2.png';
import project3 from '../image/TopicPro/1.png';

const useStyles = makeStyles((theme) => ({
  Particles: {
    position: 'fixed',
    opacity: '0.6',
  },
  heading: {
    color: 'tomato',
    paddingTop: '1.5rem',
    textTransform: 'uppercase',
  },
  mainContainer: {
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '3rem auto',
    '&:hover': {
      msTransform: 'scale(1.2)',
      webkitTransform: 'scale(1.2)',
      transform: 'scale(1.05)',
      backfaceVisibility: 'hidden',
      // transform: 'translateZ(0)',
      transitionProperty: 'transform',
      transitionDuration: '0.25s',
      transitionTimingFunction: 'ease-out',
      transitionDelay: '0s',
    },
  },

  projectName: {
    color: 'tomato',
  },
  projectDescription: {
    color: 'rgb(132 29 2 / 1)',
  },
  button: {
    backgroundColor: 'rgb(218 218 218)',
  },
}));

const projects = [
  {
    image: project1,
    name: 'Wulfz',
    description: `Wulfz are the Genesis collection of the Wulfz ecosystem. When staked, Wulfz earn 10 $AWOO. $AWOO is the token to the entire Wulfz ecosystem. $AWOO can be used to redeem whitelist spots, train (animate) your Wulfz, mint upcoming Werewulfz, mint Wulfz VX, and more! You can learn more about the project in our documentation!
     https://docs.wulfznft.com/`,
    tools: ['Smart Contract', 'React', 'ERC-721', 'ERC-721A', 'ERC-1155', 'Web3.js'],
    live: 'https://opensea.io/collection/wulfz-official',
    source: 'https://github.com/sakilk130/react-firebase-todo-app',
  },
  {
    image: project2,
    name: 'Mintopoly',
    description: `Mintopoly is a blockchain-based simulator game powered a limited edition of 12,000 Mintopoly Cards. Users can compete on the global leaderboard to win NFT prizes and crypto airdrops each week at mintopoly.io.`,
    tools: ['React', 'Redux', 'TypeScript', 'Express', 'MongoDB', 'ERC-721', 'Web3.js'],
    live: 'https://www.mintopoly.io/',
    source: 'https://github.com/sakilk130/react-weather-app',
  },
  {
    image: project3,
    name: 'TopicPro',
    description: `TopicPro helps you B2B strategic research across the B2B landscape. Users will 
    know on their favorite topics with unlimited access to the most popular thought leadership across 
    the web. It’s a new variant of DemandGenHub & Promowise`,
    tools: ['React/Hooks', 'TypeScript', 'Apollo GraphQL', 'PostgreSQL', 'CI/CD'],
    live: 'https://www.topicpro.com/',
    source: 'https://github.com/sakilk130/react-portfolio-website',
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Particles
      canvasClassName={classes.Particles}
      params={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 1,
              color: 'tomato',
            },
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: true,
              speed: 10,
              size_min: 0.1,
              sync: true,
            },
          },
          opacity: {
            value: 1,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: true,
            },
          },
        },
      }}
    />
      <Box component="div" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Projects
        </Typography>
        <Grid container justify="center">
          {/* Projects */}
          {projects.map((project, i) => (
            <Grid item xs={12} sm={8} md={4} key={i}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      gutterBottom
                      className={classes.projectName}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className={classes.projectDescription}
                    >
                      {project.description}
                    </Typography>

                    {/* Tools */}
                    {project.tools.map((tool, i) => (
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{
                          height: '20px',
                          margin: '5px',
                          textTransform: 'none',
                          background: 'rgb(95 176 71)',
                        }}
                        key={i}
                      >
                        {tool}
                      </Button>
                    ))}
                    {/* end */}
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.button}>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    target="blank"
                    href={project.live}
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    style={{ background: '#589084' }}
                    target="blank"
                    href={project.source}
                  >
                    Source Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          {/* end */}
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
