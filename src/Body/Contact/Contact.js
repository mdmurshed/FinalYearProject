import React from 'react'
import {makeStyles} from '@material-ui/core'
import {Grid,Typography,Paper,Container,TextField,Button} from '@material-ui/core'
import PinDropIcon from '@material-ui/icons/PinDrop';
import MailIcon from '@material-ui/icons/Mail';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
// import Gmap from './Gmap'

    const useStyles =makeStyles((theme)=>({
        root:{
            padding:"2%",
            flexGrow:1
        },
        headingPaper:{
            marginLeft:'7%',
            width:"86%",
            height:'120px',
            textAlign:"center",
            padding:"20px",
            
         },
        paper:{
            padding :theme.spacing(2),
            color:theme.palette.text.primary
         },
        txtfild:{
            padding:"7px",
            '& > *': {
               
                margin: theme.spacing(1),
                width: '100%',
              },
        }
        
    }))



function Contact() {
    const classess = useStyles();
    function Address(){
        return(
            <>  
             <Typography variant='h5'>Contact us</Typography>
             <Container className={classess.root}>
            <Grid container xs={12} spacing ={2} direction= "column" >
                <Grid item  container  direction= "column">
                <Grid item  container spacing ={2} > 
                    <Grid item><PinDropIcon></PinDropIcon>  </Grid>
                    <Grid item><Typography> 37 Fore Street Okehampton Exeter EX20 1HB GB </Typography></Grid>
                </Grid>
                <Grid item container spacing={2} >
                <Grid item> <MailIcon></MailIcon></Grid>
                <Grid item> <Typography>email@gmail.com  </Typography></Grid>
                </Grid>
                <Grid item container spacing={2}>
                <Grid item>    <PhonelinkRingIcon></PhonelinkRingIcon></Grid>
                <Grid item>   <Typography>01808080800</Typography></Grid>
                </Grid>
                </Grid>
                <div item xs={12}>
                {/* <Gmap/> */}
                </div>

            </Grid>
            </Container>
            </>
        )
    }
    function MessageUs(){
        return(
            <div className={classess.root}>
            <Typography variant='h5'>Message us</Typography>
            <form  className={classess.txtfild} noValidate autoComplete="off" >
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email address"  variant="outlined" />
            <TextField id="outlined-basic" label="Phone"   variant="outlined" />
            <TextField id="outlined-basic" label="Country" variant="outlined" />
            <TextField id="outlined-basic" label="Message" variant="outlined" />
          
            <Button  variant="contained"   color="primary" > Submit </Button>
                
            </form>
            </div>
        )
    }
   return(
       <div className={classess.root}>
            <Grid item xs={12}>
                <Paper className={classess.headingPaper}><Typography variant='h2'>Contact Us</Typography></Paper>
            </Grid>
            <Container>
            <Grid className={classess.root} container spacing={2}  justify="space-between">
                <Grid item  xs={12} md={6}>
                <Paper className={classess.paper}><Address /></Paper>
                </Grid>
                <Grid item  xs={12} md={6}>
                <Paper className={classess.paper}>
                <MessageUs/>
                </Paper>
                </Grid>

            </Grid>
            </Container>

       </div>
   )
}

export default Contact
