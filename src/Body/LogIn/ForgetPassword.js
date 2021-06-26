import { Grid, TextField, makeStyles, Button, Link, FormGroup } from '@material-ui/core'
import React, { useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {login,logout} from '../../Redux'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
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
        padding: '10px 0px',
        color:'red',
        fontSize:'20px'
    },
    genaralSpacing: {
        padding: '10px 0px 0px 0px'
    }

}))

var value = false
function ForgetPassword(props) {

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
                // console.log(res.data.massage)
                // console.log(document.cookie.valueOf('token'))
            });
        // console.log(cookie.token)
           setEmail('');
           setPassword('');
           handleRoute()
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
    const history = useHistory();
    const handleRoute = () =>{ 
        history.push("/onlineOrder");
      }
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
    useEffect(() => {
        axios.get('http://localhost:5000/login/chack', {
            headers:{ 'Authorization' :  'bearer ' + document.cookie.split("=")[1]}
        }, { withCredentials: true })
            .then(res => {
                console.log("Cookies:")
                console.log(document.cookie.valueOf('token'))
            })
    },[])

    return (
        <div style={{ padding: '5px', display: 'flex', justifyContent: "center",margin:'130px'}}>
            <div className={classes.root}>
                <Grid item className={classes.login} >
                    Forget Password
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="id1" label="Enter the Email" style={{ inlineSize: '300px' }} value={email} onChange={(event) => setEmail(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing} style={{ padding: '25px 0px 0px 0px' }}>
                    <Button variant="contained" color="primary" style={{margin:'0px 15px 5px 0px'}} onClick={() => submitLogin()}>
                        Submit
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
        name:state.log.user,
        logStatus:state.log.chack
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


export default connect(mapStateToProps,mapDispatchToProps)(ForgetPassword)
