import React, { useState, useEffect } from 'react'
import { Paper, Grid, Typography, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import { Container, Button } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
const axios = require('axios')
const useStyles = makeStyles((theme) => ({
    headdingPaper: {
        marginLeft: '7%',
        width: "86%",
        height: '120px',
        textAlign: "center",
        paddingTop: "20px",

    },
    root: {
        padding: "20px"
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



function Reservation(props) {
    const classess = useStyles();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [guest, setGuest] = useState("")
    const [message, setMessage] = useState("")
    const [ok, setOk] = useState(0)
    const [done, setDone] = useState(false)
    const sumbitContactInfo = () => {
        const data = {
            name: name,
            phone: phone,
            guest: guest,
            message: message
        }
        console.log(data)
        axios.post("http://localhost:5000/reservation", data)
            .then(response => {
                if (response.data.message == "We recived the reservation request.") setDone(true)
                console.log(response)
            })
        // setDone(true)
        setName("")
        setPhone("")
        setGuest("")
        setMessage("")
        setOk(ok + 1)
    }

    useEffect(() => {

    }, [ok])

    function OpeningHours() {
        return (
            <>

                <Typography variant='h4'>Opening Hours</Typography>
                <Grid className={classess.root} container direction="column">
                    <Grid item container xs={12}>
                        <Grid item xs={6} md={6}>

                            <Typography><CheckCircleOutlineRoundedIcon /> Monday :</Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={3}>
                            <Typography> 12:00 PM - 2:00 PM  / 5:00 PM - 11:00 PM</Typography>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <Typography><CheckCircleOutlineRoundedIcon /> Tuesday :</Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={3}>
                            <Typography> 12:00 PM - 2:00 PM  / 5:00 PM - 11:00 PM</Typography>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <Typography><CheckCircleOutlineRoundedIcon />  Wednesday :</Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={3}>
                            <Typography> 12:00 PM - 2:00 PM  / 5:00 PM - 11:00 PM</Typography>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <Typography><CheckCircleOutlineRoundedIcon /> Thursday :</Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={3}>
                            <Typography> 12:00 PM - 2:00 PM  / 5:00 PM - 11:00 PM</Typography>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <Typography><CheckCircleOutlineRoundedIcon /> Friday  :</Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={3}>
                            <Typography> 12:00 PM - 2:00 PM  / 5:00 PM - 11:00 PM</Typography>
                        </Grid>

                    </Grid>

                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <Typography><CheckCircleOutlineRoundedIcon />Saturday :</Typography>
                        </Grid>
                        <Grid item xs={6} md={6} lg={3}>
                            <Typography> 12:00 PM - 2:00 PM  / 5:00 PM - 11:00 PM</Typography>
                        </Grid>

                    </Grid>

                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <Typography><CheckCircleOutlineRoundedIcon /> Sunday :</Typography>


                        </Grid>
                        <Grid item xs={6} md={6} lg={3}>
                            <Typography> 12:00 PM - 2:00 PM  / 5:00 PM - 11:00 PM</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }

    // function TableBook() {
    //     return (
    //         <>
    //             <Typography variant='h4'>Book a Table Online</Typography>
    //             {
    //                 done && <div style={{ color: 'green', display: 'flex' }}><div><CheckCircleOutlineIcon></CheckCircleOutlineIcon></div> <div style={{ paddingLeft: '5px', paddingTop: '5px' }}>We will contact with you as soon as possible.</div></div>
    //             }
    //             <Grid>
    //                 <Grid item key={1}>
    //                     <TextField onChange={e => setName(e.target.value)} id="name" label="Name" style={{ inlineSize: '530px' }} value={name} />
    //                 </Grid>
    //                 <Grid item key={2}>
    //                     <TextField onChange={e => setPhone(e.target.value)} id="phone" label="Phone Number" style={{ inlineSize: '530px' }} value={phone} />
    //                 </Grid>
    //                 <Grid item key={3}>
    //                     <TextField onChange={e => setGuest(e.target.value)} id="numberOfGuest" label="Number of Guest" style={{ inlineSize: '530px' }} value={guest} />
    //                 </Grid>
    //                 <Grid item key={4}>
    //                     <TextField onChange={e => setMessage(e.target.value)} id="message" label="Message" style={{ inlineSize: '530px' }} value={message} />
    //                 </Grid>
    //                 <Grid>
    //                     <Button onClick={() => sumbitContactInfo()} variant="contained" color="primary" > Submit </Button>
    //                 </Grid>
    //             </Grid>
    //         </>
    //     )
    // }

    return (
        <>

            <Grid style={{ paddingTop: "20px" }} item xs={12}>
                {props.falsePaper ?
                    <Typography > </Typography>
                    :
                    <Paper className={classess.headdingPaper}><Typography variant='h2' >Reservation</Typography></Paper>

                }
            </Grid>
            <Container>

                <div className={classess.root}>
                    <Grid container justify="space-between" spacing={2}>

                        <Grid item xs={12} md={6}>
                            <Paper className={classess.paper}> <OpeningHours /> </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper className={classess.paper} >
                                <Typography variant='h4'>Book a Table Online</Typography>
                                {
                                    done && <div style={{ color: 'green', display: 'flex' }}><div><CheckCircleOutlineIcon></CheckCircleOutlineIcon></div> <div style={{ paddingLeft: '5px', paddingTop: '5px' }}>We will contact with you as soon as possible.</div></div>
                                }
                                <Grid>
                                    <Grid item key={1}>
                                        <TextField onChange={e => setName(e.target.value)} id="name" label="Name" style={{ inlineSize: '530px' }} value={name} />
                                    </Grid>
                                    <Grid item key={2}>
                                        <TextField onChange={e => setPhone(e.target.value)} id="phone" label="Phone Number" style={{ inlineSize: '530px' }} value={phone} />
                                    </Grid>
                                    <Grid item key={3}>
                                        <TextField onChange={e => setGuest(e.target.value)} id="numberOfGuest" label="Number of Guest" style={{ inlineSize: '530px' }} value={guest} />
                                    </Grid>
                                    <Grid item key={4}>
                                        <TextField onChange={e => setMessage(e.target.value)} id="message" label="Message" style={{ inlineSize: '530px' }} value={message} />
                                    </Grid>
                                    <Grid>
                                        <Button onClick={() => sumbitContactInfo()} variant="contained" color="primary" > Submit </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    )
}

export default Reservation
