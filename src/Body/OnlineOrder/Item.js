import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {


    },
    centerADD: {
        textAlign: 'center'
    }

}))
function Item() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.centerADD}>
                <b>Item</b>
            </div>
            <div>
               
            </div>
        </div>
    )
}

export default Item
