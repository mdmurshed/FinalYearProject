import { Grid, Paper} from '@material-ui/core'
import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import HeaderFile from '../Header/HeaderFile'
import ReactRouting from '../Route/ReactRouting'
import { makeStyles } from '@material-ui/core/styles';

// Redux store 
import {Provider} from 'react-redux'
import store from '../Redux/store'

const useStyles = makeStyles({
       body:{
           width: '100%',
           height: '100%',
           margin:'20px 20px',
        //    display:'flex',
        //    justifyContent:'center'
       } 
});
function App() {    
    const classes = useStyles();
    const [login,setLogin] = useState(false)
    //some thing
    return (
        // <ThemeProvider theme = {ToggleDayNight()}> 
        <Provider store={store}>
            <Paper style={{width:"100%",height:"100%"}}>
                <Grid container>
                    <Grid item sm={12}>
                        <HeaderFile  />
                    </Grid>
                    <Grid item sm={12} className = {classes.body} >
                        <ReactRouting></ReactRouting>
                    </Grid>
                    <Grid item sm={12}>
                        <Footer></Footer>
                    </Grid>
                </Grid>
            </Paper>
        </Provider>
        // </ThemeProvider>
       
    )
}

export default App
