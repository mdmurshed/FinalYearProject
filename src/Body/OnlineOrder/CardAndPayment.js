import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root:{
        border: '1px solid'
        
    },
    centerADD:{
        textAlign: 'center'
    }
}))
function CardAndPayment() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.centerADD}>
                <b>card and payment</b>
            </div>
        </div>
    )
}

export default CardAndPayment
