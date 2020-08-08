import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Figure from 'react-bootstrap/Figure'



const AboutUs = () => {
    return (
        <div>
            <Typography variant='h4' align='left' gutterBottom style={{marginLeft:'17px'}}>Meet the <span style={{color:'#EF798A'}}>Team</span></Typography>
            <Grid container spacing={3} justify='center'>
                <Grid item xs={12} sm={12} md={6} lg={6} align='center'>
                    <Figure>
                        <Figure.Image
                            width={400}
                            height={400}
                            alt="171x180"
                            src={require('../../assets/image.png')}
                        />
                        <Figure.Caption>
                            <Typography align='center' variant='subtitle1'>Shubham Kumar</Typography>
                        </Figure.Caption>
                    </Figure>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} align='center'>
                <Figure>
                        <Figure.Image
                            width={400}
                            height={400}
                            alt="171x180"
                            src={require('../../assets/image.png')}
                        />
                        <Figure.Caption>
                            <Typography align='center' variant='subtitle1'>Shubham Kumar</Typography>
                        </Figure.Caption>
                    </Figure>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} align='center'>
                <Figure>
                        <Figure.Image
                            width={400}
                            height={400}
                            alt="171x180"
                            src={require('../../assets/image.png')}
                        />
                        <Figure.Caption>
                            <Typography align='center' variant='subtitle1'>Shubham Kumar</Typography>
                        </Figure.Caption>
                    </Figure>
                </Grid>
            </Grid>
            
        </div>
        
    )
};

export default AboutUs;

