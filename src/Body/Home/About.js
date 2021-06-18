import React from 'react'
import  {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

const useStyles =makeStyles((theme)=>({
    root:{
        padding:"40px",
        flexGrow:1,
        fontSize:"15px",
        
       
    },
    paper:{
       
        padding:theme.spacing(8),
        textAlign:'center',
        color :theme.palette.text.primary,
    },
    para:{
        paddingBottom:"20px"
    },
    buttonT:{
        display: "flex",
        alignItems:'flex-start'
    }
}));


function About() {
    const classes =useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing ={2}>
                <Grid item   sm={12} md={6}><Paper variant="outlined" elevation={3}className={classes.paper} >
                <Typography variant="h3" align ="left"  gutterBottom >
                    About
                 </Typography>
                 <Typography variant="h3" align ="left" gutterBottom>
                Resturent Name || The Feast
                 </Typography>


                    <Typography className={classes.para} variant="body2" align ="left" gutterBottom xs>
                        We are very passionate in Indian food and wanted people to experience what a true Indian meal tastes 
                        like. So that’s when Ma’ida was born. Most of the spices we 
                        incorporate in our cooking are freshly roasted and grinded within the premises. And, we use locally 
                        sourced foods where we can. Our menu consists of a very wide selection of Indian dishes for you to enjoy.
                        Ma’ida translates to ‘the feast’ and a feast is exactly what we provide.
                        </Typography>
                            
                                <Button className={classes.buttonT} variant="contained" color="primary" href="/OnlineOrder">
                                    Order Now
                                </Button>
                            
                       
                       
                        </Paper>
                        </Grid>
                <Grid item  sm={12} md={6}><img alt='' src="https://maidaonline.uk/upload/1610191246-maida%20(4).jpeg"/></Grid>
              
            </Grid>
            
        </div>
    )
}

export default About
