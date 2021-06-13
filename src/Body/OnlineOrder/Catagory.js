import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root:{
        
        
    },
    centerADD:{
        textAlign: 'center'
    }

}))
function Catagory() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.centerADD}>
                <b>Catagory</b>
            </div>
        </div>
    )
}

export default Catagory
