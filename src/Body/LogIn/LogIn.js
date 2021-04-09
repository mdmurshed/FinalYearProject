import { Grid, TextField, makeStyles, Button, Link } from '@material-ui/core'
import React, { useEffect, useState } from 'react'


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
    const [Data,setData] = useState([])
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const submitLogin= ()=>{
        setData([Email,Password]);
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
                <Grid item className={classes.genaralSpacing}>
                    Sign in to your account and start ordering from our delicious menu.
                    Don't have any account? <Link href='https://google.com'>Register here</Link>
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
