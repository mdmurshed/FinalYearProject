import { Grid, TextField, makeStyles, Button } from '@material-ui/core'
import React, { useState } from 'react'
import {connect} from 'react-redux'
import {login,logout} from '../Redux'
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
        padding: '10px 0px'
    },
    genaralSpacing: {
        padding: '10px 0px 0px 0px'
    }

}))


  
var value = false
function LogIn(props) {
    const history = useHistory();
    const [ok,setOk] = useState(false)
    const handleRoute = () =>{ 
        history.push("/admin");
      }
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitLogin = () => {
        const data = {
            email: email,
            password: password
        }
        axios.post('http://localhost:5000/admin/login', data, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                if(res.data.message === "wrong password"){
                    setOk(true)
                }else{
                    console.log(res.data.massage)
                    handleRoute()
                }
                // console.log(document.cookie.valueOf('token'))
            })
            .catch(err=>{
                console.log(err)
            })
        // console.log(cookie.token)
           setEmail('');
           setPassword('');
           props.login(email)
    }
    

    return (
        <div style={{ padding: '5px', display: 'flex', justifyContent: "center" }}>
            <div className={classes.root}>
                <Grid item className={classes.login} >
                    Admin Login
                </Grid>
                {
                    ok && <h2 style={{color:'red'}}>Wrong password , Try again.</h2>
                }
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
