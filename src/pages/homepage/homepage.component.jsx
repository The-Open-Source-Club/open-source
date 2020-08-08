import React from 'react';
import Sky from 'react-sky';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import './homepage.style.css';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#454B66',
      },
    },
  });


const HomePage = () => {
    const classes = useStyles();
    return (
        <div>
            <div className='centered'>
                <MuiThemeProvider theme={theme}>
                <Typography variant='h3' color='primary'>OPEN SOURCE CLUB</Typography>
                </MuiThemeProvider>
                <Divider />
                <div className={classes.root}>
                    <a href='https://www.facebook.com/'> <Avatar alt="Facebook" src={require('../../assets/facebook.svg')}/> </a>
                    <a href="https://www.twitter.com/"><Avatar alt="Twitter" src={require('../../assets/twitter.svg')} /> </a>
                    <a href="https://www.instagram.com/"><Avatar alt="Instagram" src={require('../../assets/instagram.svg')} /> </a>
                    <a href="https://www.github.com/"><Avatar alt="Github" src={require('../../assets/github.svg')} /> </a>
                </div>
            </div>
            <Sky
            images={{
                /* FORMAT AS FOLLOWS */
                0: require('../../assets/code.svg'),  /* You can pass as many images as you want */
                1: require('../../assets/circuit.svg'),
                2: require('../../assets/laptop.svg'),
                3: require('../../assets/vr-gaming.svg'),
            }}
            how={30} /* Pass the number of images Sky will render chosing randomly */
            time={40} /* time of animation */
            size={'50px'} /* size of the rendered images */
            background={'palettedvioletred'} /* color of background */
            />
      </div>
    )
};

export default HomePage;

