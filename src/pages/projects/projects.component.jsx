import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Divider from '@material-ui/core/Divider';

const Projects = () => {
    return (
        <div>
            <Typography variant='h4' align='left' gutterBottom style={{marginLeft:'17px'}}>Featured <span style={{color:'#EF798A'}}>Projects</span></Typography>
            <Grid container spacing={3} justify='center'>
                <Grid item xs={12} sm={12} md={6} lg={4} align='center'>
                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={require('../../assets/project.png')} />
                    <Divider />
                    <Card.Body>
                        <Card.Title>Project Title</Card.Title>
                        <Divider />
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="dark">View on Github</Button>
                    </Card.Body>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4} align='center'>
                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={require('../../assets/project.png')} />
                    <Divider />
                    <Card.Body>
                        <Card.Title>Project Title</Card.Title>
                        <Divider />
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="dark">View on Github</Button>
                    </Card.Body>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4} align='center'>
                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={require('../../assets/project.png')} />
                    <Divider />
                    <Card.Body>
                        <Card.Title>Project Title</Card.Title>
                        <Divider />
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="dark">View on Github</Button>
                    </Card.Body>
                    </Card>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Projects;