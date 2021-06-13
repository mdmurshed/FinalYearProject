import { Grid, TextField, makeStyles, Button, Link, FormGroup } from '@material-ui/core'
import React, { useState } from 'react'
import {connect} from 'react-redux'
import {login,logout} from '../../Redux'
import axios from 'axios'

axios.defaults.withCredentials = true;

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F9FAE9',
        padding: '50px 100px'
    },
    login: {
        fontSize: '20px',
        padding: '10px 0px'
    },
    genaralSpacing: {
        padding: '10px 0px 0px 0px'
    }

}))

var value = false
function LogIn(props) {

    const classes = useStyles();
    const [ok, setOk] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Auth, setAuth] = useState(true)
    const submitLogin = () => {
        const data = {
            email: email,
            password: password
        }
        axios.post('http://localhost:5000/Login/', data, { withCredentials: true })
            .then(res => {
                console.log(res.data.massage)
                // console.log(document.cookie.valueOf('token'))
            });
        // console.log(cookie.token)
           setEmail('');
           setPassword('');
           props.login(email)
    }
    // const users = () => {
    //     const token  = 'bearer ' + document.cookie.split("=")[1];
    //     axios.get('http://localhost:5000/login/users', {
    //         headers:{ 'Authorization' : token}
    //     }, { withCredentials: true })
    //         .then(res => {
    //             console.log(res.data.info)
    //         })
    // }
    const logout = () => {
        const token  = 'bearer ' + document.cookie.split("=")[1];
        axios.get('http://localhost:5000/login/logout', {
            headers:{ 'Authorization' : token}
        }, { withCredentials: true })
            .then(res => {
                console.log(res.data.massage)
            })
        props.logout()
    }
    

    return (
        <div style={{ padding: '5px', display: 'flex', justifyContent: "center" }}>
            <div className={classes.root}>
                <Grid item className={classes.login} >
                    Login
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    Sign in to your account and start ordering from our delicious menu.
                    Don't have any account? <Link href='http://localhost:3000/registration'>Register here</Link>
                </Grid>

                <Grid item className={classes.genaralSpacing}>
                    <TextField id="id1" label="Email or Phone Number" style={{ inlineSize: '300px' }} value={email} onChange={(event) => setEmail(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="id2" label="Password" type='password' style={{ inlineSize: '300px' }} value={password} onChange={(event) => setPassword(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing} style={{ padding: '25px 0px 0px 0px' }}>
                    <Button variant="contained" color="primary" style={{margin:'0px 15px 5px 0px'}} onClick={() => submitLogin()}>
                        Login
                    </Button>
                    <Button variant="contained" color="primary" style={{margin:'0px 15px 5px 0px'}} onClick={() => logout()}>
                        Logout
                    </Button>
                </Grid>
                
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    value = state.log.chack
    console.log(value)
    return {
        name:state.log.user
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        login:name=>{
            dispatch(login(name))
        },
        logout:()=>{
            dispatch(logout())
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LogIn)
