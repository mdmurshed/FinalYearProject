import React, { useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { Grid, Typography, Paper, Container, TextField, Button } from '@material-ui/core'
import PinDropIcon from '@material-ui/icons/PinDrop';
import MailIcon from '@material-ui/icons/Mail';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const axios = require('axios')
// import Gmap from './Gmap'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2%",
        flexGrow: 1
    },
    headingPaper: {
        marginLeft: '7%',
        width: "86%",
        height: '120px',
        textAlign: "center",
        padding: "20px",

    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.primary
    },
    txtfild: {
        padding: "7px",
        '& > *': {

            margin: theme.spacing(1),
            width: '100%',
        },
    }

}))



function Contact() {
    const classess = useStyles();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [ok,setOk] = useState(0)
    const [done,setDone] = useState(false)
    const sumbitContactInfo = () => {
        const data = {
            name:name,
            email:email,
            phone:phone,
            message:message
        }
        console.log(data)
        axios.post("http://localhost:5000/contact", data)
            .then(response =>{
                if(response.data.message == "We are informed.") setDone(true)
                console.log(response)
            })
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
        setOk(ok+1)
    }

    useEffect(() => {

    },[ok])

    function Address() {
        return (
            <>
                <Typography variant='h5'>Contact us</Typography>
                <Container className={classess.root}>
                    <Grid container xs={12} spacing={2} direction="column" >
                        <Grid item container direction="column">
                            <Grid item container spacing={2} >
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
    // function MessageUs() {
    //     return (
    //         <div className={classess.root}>
    //             <Typography variant='h5'>Message us</Typography>
    //             <Grid>
    //                 <Grid item >
    //                     <TextField onChange={e => setName(e.target.value)} id="Name" label="Name" style={{ inlineSize: '530px' }} />
    //                 </Grid>
    //                 <Grid item >
    //                     <TextField onChange={e => setEmail(e.target.value)} id="email" label="Email" style={{ inlineSize: '530px' }} />
    //                 </Grid>
    //                 <Grid item >
    //                     <TextField onChange={e => setPhone(e.target.value)} id="phone" label="Phone Number" style={{ inlineSize: '530px' }} />
    //                 </Grid>
    //                 <Grid item>
    //                     <TextField onChange={e => setMessage(e.target.value)} id="message" label="Phone Number" style={{ inlineSize: '530px' }} />
    //                 </Grid>
    //                 <br></br>
    //                 <Button onClick={() => sumbitContactInfo} variant="contained" color="primary" > Submit </Button>

    //             </Grid>
    //         </div>
    //     )
    // }
    return (
        <div className={classess.root}>
            <Grid item xs={12}>
                <Paper className={classess.headingPaper}><Typography variant='h2'>Contact Us</Typography></Paper>
            </Grid>
            <Container>
                <Grid className={classess.root} container spacing={2} justify="space-between">
                    <Grid item xs={12} md={6}>
                        <Paper className={classess.paper}><Address /></Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper className={classess.paper}>
                            <Typography variant='h5'>Message us</Typography>
                            {
                                done && <div style={{color: 'green',display:'flex'}}><div><CheckCircleOutlineIcon></CheckCircleOutlineIcon></div> <div style={{paddingLeft:'5px',paddingTop:'5px'}}>We are informed.</div></div>
                            }
                            <Grid>
                                <Grid item >
                                    <TextField onChange={e => setName(e.target.value)} id="Name" label="Name" style={{ inlineSize: '530px' }} value={name} />
                                </Grid>
                                <Grid item >
                                    <TextField onChange={e => setEmail(e.target.value)} id="email" label="Email" style={{ inlineSize: '530px' }} value={email} />
                                </Grid>
                                <Grid item >
                                    <TextField onChange={e => setPhone(e.target.value)} id="phone" label="Phone Number" style={{ inlineSize: '530px' }} value={phone}/>
                                </Grid>
                                <Grid item>
                                    <TextField onChange={e => setMessage(e.target.value)} id="message" label="Message" style={{ inlineSize: '530px' }}value={message}/>
                                </Grid>
                                <br></br>
                                <Button onClick={() => sumbitContactInfo()} variant="contained" color="primary" > Submit </Button>

                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>

        </div>
    )
}

export default Contact
