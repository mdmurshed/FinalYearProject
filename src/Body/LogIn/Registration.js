import { Grid, TextField, makeStyles, Button, Link } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    login: {
        fontSize: '20px',
        padding: '10px 0px'
    },
    genaralSpacing: {
        padding: '10px 0px 0px 0px'
    }

}))


function Registration() {
    const classes = useStyles();
    const [Data, setData] = useState([])
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [number, setNumber] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Cpassword, setCPassword] = useState('');
    const submitLogin = () => {
        setData([Email, Password]);
        axios.post('http://localhost:3000/login',Data)
        .then(res=>console.log(res.data))
    }

    return (
        <div style={{ padding: '5px', display: 'flex', justifyContent: "center" }}>
            <div className={classes.root}>
                <Grid item className={classes.login} >
                    Signup
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    Create an account to start ordering from our delicious menu.
                    Already have an account?<Link href='http://localhost:3000/Login'>  Login</Link>
                </Grid>

                <Grid item className={classes.genaralSpacing}>
                    <TextField id="FirstName" label="First Name" style={{ inlineSize: '300px' }} onChange={(event) => setfirstName(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="LastName" label="Last Name" style={{ inlineSize: '300px' }} onChange={(event) => setlastName(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="Mobile" type="number" label="Mobile" style={{ inlineSize: '300px' }} onChange={(event) => setNumber(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="Email" label="Email or Phone Number" style={{ inlineSize: '300px' }} onChange={(event) => setEmail(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="Password" label="Password" type='password' style={{ inlineSize: '300px' }} onChange={(event) => setPassword(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="CPassword" label="Confirm Password" type='password' style={{ inlineSize: '300px' }} onChange={(event) => setCPassword(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing} style={{ padding: '25px 0px 0px 0px' }}>
                    <Button variant="contained" color="primary" onClick={() => submitLogin()}>
                        Create Account
                    </Button>
                </Grid>
            </div>
        </div>
    )
}

export default Registration
