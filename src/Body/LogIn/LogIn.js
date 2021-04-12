import { Grid, TextField, makeStyles, Button, Link } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    login:{
        fontSize:'20px',
        padding:'10px 0px'
    },
    genaralSpacing:{
        padding:'10px 0px 0px 0px'
    }

}))


function LogIn() {
    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [Auth,setAuth] = useState("wrongPassword")
    const submitLogin= ()=>{
        const data = {
            email:email,
            password:password
        }
        axios.get(`http://localhost:3000/Login/${email}`)
        .then(res=>{
            console.log(res.data[0]);
            setAuth(res.data[0])
        });
    }
    // useEffect(()=>{
    //     console.log(Data);
    // })

    return (
        <div style={{ padding: '5px',display:'flex',justifyContent:"center"}}>
            <div  className={classes.root}>
                <Grid item className={classes.login} >
                    Login
                </Grid>
                {
                    Auth=='rightPassword' ? (<h1>loged in</h1>) : (<h1>Try again</h1>)
                }
                <Grid item className={classes.genaralSpacing}>
                    Sign in to your account and start ordering from our delicious menu.
                    Don't have any account? <Link href='http://localhost:3000/registration'>Register here</Link>
                </Grid>

                <Grid item className={classes.genaralSpacing}>
                    <TextField id="id1" label="Email or Phone Number" style={{inlineSize:'300px'}} onChange={(event)=>setEmail(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="id2" label="Password" type='password' style={{inlineSize:'300px'}} onChange={(event)=>setPassword(event.target.value)}/>
                </Grid>
                <Grid item className={classes.genaralSpacing} style={{padding:'25px 0px 0px 0px'}}>
                    <Button variant="contained" color="primary" onClick={()=>submitLogin()}>
                        Login
                    </Button>
                </Grid>

            </div>
        </div>
    )
}

export default LogIn
