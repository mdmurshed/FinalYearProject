import React from 'react'
import {Paper,Grid,Typography,TextField} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles"
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import { Container,Button } from '@material-ui/core';


    const useStyles = makeStyles ((theme)=>({
        headdingPaper:{
           marginLeft:'7%',
           width:"86%",
           height:'120px',
           textAlign:"center",
           paddingTop:"20px",
           
        },
        root:{
            padding :"20px"
        },
        paper:{
            padding :theme.spacing(2),
           
            color: theme.palette.text.primary
        },
        txtfild:{
            padding:"7px",
            '& > *': {
               
                margin: theme.spacing(1),
                width: '100%',
              },
        }


    }))
    


function Reservation(props) {
    const classess =useStyles();

    function OpeningHours(){
        return(
            <>
            
            <Typography variant='h4'>Opening Hours</Typography>
            <Grid className={classess.root} container  direction="column">
                <Grid item container  xs={12}>
                    <Grid item xs={6} md={6}>
                    
                    <Typography><CheckCircleOutlineRoundedIcon /> Monday :</Typography> 
                    </Grid>
                    <Grid item xs ={6} md={6} lg={3}>
                        <Typography> 12:00 PM - 2:00 PM  / 5:00 PM - 11:00 PM</Typography>
                    </Grid>
                </Grid>
                
                <Grid item container xs={12}>
                <Grid item xs ={6}>
                    <Typography><CheckCircleOutlineRoundedIcon /> Tuesday :</Typography>
                </Grid>
                    <Grid item xs ={6} md={6} lg={3}>
                        <Typography> 12:00 PM - 2:00 PM  / 5:00 PM - 11:00 PM</Typography>
                    </Grid>
                </Grid>
                
                <Grid item container xs={12}>
                    <Grid item xs={6}>
                    <Typography><CheckCircleOutlineRoundedIcon />  Wednesday :</Typography>
                    </Grid>
                    <Grid item xs ={6} md={6} lg={3}>
                        <Typography> 12:00 PM - 2:00 PM  / 5:00 PM - 11:00 PM</Typography>
                    </Grid>
                </Grid>
                
                <Grid item container xs={12}>
                    <Grid item xs={6}>
                         <Typography><CheckCircleOutlineRoundedIcon /> Thursday :</Typography>
                    </Grid>
                    <Grid item xs ={6} md={6} lg={3}>
                        <Typography> 12:00 PM - 2:00 PM  / 5:00 PM - 11:00 PM</Typography>
                    </Grid>
                </Grid>
                
                <Grid item container xs={12}>
                    <Grid item xs={6}>
                    <Typography><CheckCircleOutlineRoundedIcon /> Friday  :</Typography>
                    </Grid>
                    <Grid item xs ={6} md={6} lg={3}>
                        <Typography> 12:00 PM - 2:00 PM  / 5:00 PM - 11:00 PM</Typography>
                    </Grid>
                
                </Grid>
                
                <Grid item container xs={12}>
                    <Grid item xs={6}>
                    <Typography><CheckCircleOutlineRoundedIcon />Saturday :</Typography>
                    </Grid>
                    <Grid item xs ={6} md={6} lg={3}>
                        <Typography> 12:00 PM - 2:00 PM  / 5:00 PM - 11:00 PM</Typography>
                    </Grid>
                    
                </Grid>
                
                <Grid item container xs={12}>
                    <Grid item xs={6}>
                        <Typography><CheckCircleOutlineRoundedIcon /> Sunday :</Typography> 
                        
                    
                     </Grid>
                    <Grid item xs ={6} md={6} lg={3}>
                        <Typography> 12:00 PM - 2:00 PM  / 5:00 PM - 11:00 PM</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
        )
    }

    function TableBook(){
        return(
            <>
            <Typography variant='h4'>Book a Table Online</Typography>
            <form  className={classess.txtfild} noValidate autoComplete="off" >
            <TextField id="outlined-basic" label="Number of Guests" variant="outlined" />
            <TextField id="outlined-basic" label="Date of Booking" variant="outlined" />
            <TextField id="outlined-basic" label="Select Time" variant="outlined" />
            <TextField id="outlined-basic" label="Your Name " variant="outlined" />
            <TextField id="outlined-basic" label="Your Email" variant="outlined" />
            <TextField id="outlined-basic" label="Your Phone Number" variant="outlined" />
            <TextField id="outlined-basic" label="Number of Guests" variant="outlined" />
            <Button  variant="contained" color="primary" > Book a Table</Button>
                
            </form>
            </>
        )
    }

    return (
        <>
        
        <Grid style={{paddingTop:"20px"}} item xs={12}>
            {props.falsePaper? 
            <Typography > </Typography>
            :
           <Paper className ={classess.headdingPaper}><Typography variant='h2' >Reservation</Typography></Paper>
          
            } 
        </Grid>
        <Container>
               
        <div className={classess.root}>
            <Grid container  justify="space-between"  spacing={2}>
                
                <Grid item xs={12} md={6}>
                    <Paper className ={classess.paper}> <OpeningHours/> </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                <Paper className ={classess.paper} ><TableBook/> </Paper>
                </Grid>
            </Grid>
        </div>
        </Container>
    </>
    )
}

export default Reservation
