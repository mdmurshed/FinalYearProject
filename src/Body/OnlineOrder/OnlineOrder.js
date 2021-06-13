import React from 'react'
import {makeStyles,Grid} from '@material-ui/core'

import CardAndPayment from './CardAndPayment'
import Catagory from './Catagory'
import Item from './Item'
const useStyles = makeStyles(() => ({
    root:{
        display: 'flex'
    }

}))
function OnlineOrder() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Catagory></Catagory>
                </Grid>
                <Grid item xs>
                    <Item></Item>
                </Grid>
                <Grid item xs>
                    <CardAndPayment></CardAndPayment>
                </Grid>
            </Grid>
        </div>
    )
}

export default OnlineOrder
