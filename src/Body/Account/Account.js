import { Grid, TextField, makeStyles, Button, Link, FormControl, Input, InputLabel, FormHelperText, Hidden } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 30px',
        backgroundColor: '#F9FAE9',
        padding: '50px 100px'
    },
    signup: {
        fontSize: '50px',
        fontWeight: 'bold',
        padding: '10px 0px'
    },
    genaralSpacing: {
        padding: '10px 0px 0px 0px',
    }

}))

function Registration(props) {
    const classes = useStyles();
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [number, setNumber] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Cpassword, setCPassword] = useState('');
    const [wrongPw, setwrongPw] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:5000/login/user/" + props.name)
            .then(res => {
                console.log(res.data.info)
                setfirstName(res.data.info.firstName)
                setlastName(res.data.info.lastName);
                setNumber(res.data.info.number)
                setEmail(res.data.info.email);
                // setPassword(res.data.info.);
            })
    }, [])
    const submitLogin = () => {
        if (Password !== Cpassword) {
            setwrongPw(true)
            setPassword("");
            setCPassword("");
            return
        }
        const Data = {
            firstName: firstName,
            lastName: lastName,
            number: number,
            email: Email,
            password: Password
        }
        console.log(Data)
        axios.post('http://localhost:5000/login/userUpdate/'+props.name, Data)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        setPassword("");
        setCPassword("");
    }



    return (
        <div style={{ padding: '5px', display: 'flex', justifyContent: "center" }}>
            <div className={classes.root}>
                <Grid item className={classes.signup} >
                    User Accout
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="FirstName" label="First Name" style={{ inlineSize: '600px' }} value={firstName} onChange={(event) => setfirstName(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="LastName" label="Last Name" style={{ inlineSize: '600px' }} value={lastName} onChange={(event) => setlastName(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="Mobile" type="number" label="Mobile" style={{ inlineSize: '600px' }} value={number} onChange={(event) => setNumber(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="Email" label="Email or Phone Number" style={{ inlineSize: '600px' }} value={Email} onChange={(event) => setEmail(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="Password" label="Change Password" type='password' style={{ inlineSize: '600px' }} value={Password} onChange={(event) => setPassword(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="CPassword" label="Confirm Password" type='password' style={{ inlineSize: '600px' }} value={Cpassword} onChange={(event) => setCPassword(event.target.value)} />
                </Grid>
                {wrongPw && <Hidden xsDown > Password not matched</Hidden>}
                <Grid item className={classes.genaralSpacing} style={{ padding: '25px 0px 0px 0px' }}>
                    <Button variant="contained" color="primary" onClick={() => submitLogin()}>
                        Update Info
                    </Button>
                </Grid>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        name: state.log.user,
        logStatus: state.log.chack
    }
}


export default connect(mapStateToProps)(Registration)