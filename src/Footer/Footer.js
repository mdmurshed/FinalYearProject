import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Grid } from '@material-ui/core';
import { Link } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(()=>({
  root: {
    width:'100%',
    backgroundColor: "#808080",
  },
  back1: {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: "#333",
    color: "white",
    padding: "10px 10px",
  },
  back2: {
    backgroundColor: "	#000000",
    color: "white",
    display: 'flex',
    padding: '20px 20px',
    justifyContent: 'space-evenly'
  },
  linkCss: {
    color: 'white',
    display: 'flex',
    direction: 'row',
  },
  HeaderCss: {
    color: '#c8a97e',
    fontSize: '25px',
    padding:'5px 5px'
  },
  iconCss:{
    padding:'5px'
  }
}));





export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div  className={classes.root} >
      <Grid item className={classes.back1} style={{flexDirection: match ? 'column':'row',padding:'0px 120px'}} >
        <Grid item style={{padding:'20px'}}>
          <Grid item className={classes.HeaderCss}>
            Maida | The Feast
             </Grid>
          <Grid item style={{padding:'6px 0px'}}>
            <FacebookIcon className={classes.iconCss}></FacebookIcon>
            <TwitterIcon className={classes.iconCss}></TwitterIcon>
            <InstagramIcon className={classes.iconCss}></InstagramIcon>
          </Grid>
        </Grid>
        <Grid item style={{padding:'20px'}}>
          <Grid item className={classes.HeaderCss}>
            Important Links
          </Grid>
          <Grid item style={{padding:'6px',size:'17px'}}>
            <Link underline='none' className={classes.linkCss} href="/">Home</Link>
            <Link underline='none' className={classes.linkCss} href="/OnlineOrder">Online order</Link>
            <Link underline='none' className={classes.linkCss} href="/Gellary">Gellary</Link>
            <Link underline='none' className={classes.linkCss} href="/Contact">Contact</Link>
            <Link underline='none' className={classes.linkCss} href="/Login">Log In</Link>
          </Grid>

        </Grid>
        <Grid item style={{padding:'20px'}}>
          <Grid item className={classes.HeaderCss}>
            Contact Us
          </Grid>
          <Grid item style={{padding:"3px 0px"}}>
            <Grid item style={{display: 'flex',padding:"5px 0px"}}>
              <LocationOnIcon/> 
              <div style={{padding:'3px 20px'}}>37 Fore Street Okehampton Exeter EX20 1HB GB</div>
            </Grid>
            <Grid item style={{display: 'flex',padding:"5px 0px"}}>
                <MailOutlineIcon/> 
                <div style={{padding:'3px 20px'}}> sabirahamed78661@gmail.com </div>
            </Grid>
            <Grid item style={{display: 'flex',padding:"5px 0px"}}>
               <CallIcon fontSize='small'/>
               <div style={{padding:'3px 25px'}}> 01837318030 </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.back2} >
        <Grid item >
          Copyright © Maida | The Feast 2021
              </Grid>
        <Grid item >
          Developed By: Murshed
              </Grid>
      </Grid>

    </div>
  );
}