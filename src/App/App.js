import { Grid, Paper} from '@material-ui/core'
import React from 'react'
import Footer from '../Footer/Footer'
import HeaderFile from '../Header/HeaderFile'
import ReactRouting from '../Route/ReactRouting'
function App() {    
    
    return (
        // <ThemeProvider theme = {ToggleDayNight()}> 
            <Paper style={{width:"100%",height:"100%"}}>
                <Grid container>
                    <Grid item sm={12}>
                        <HeaderFile/>
                    </Grid>
                    <Grid item sm={12}>
                        <ReactRouting></ReactRouting>
                    </Grid>
                    <Grid item sm={12}>
                        <Footer></Footer>
                    </Grid>
                </Grid>
            </Paper>
        // </ThemeProvider>
       
    )
}

export default App
