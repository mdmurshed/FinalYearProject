import React, { useState } from 'react'
import { makeStyles, Grid } from '@material-ui/core'

import CardAndPayment from './CardAndPayment'
import Catagory from './Catagory'
import Item from './Item'
const useStyles = makeStyles(() => ({
    root: {
        display: 'flex'
    },
    boxStyle: {
        border: "1px solid",
        padding:"10px",
        boxShadow: "2px 5px #888888"
}

}))
function OnlineOrder() {
    const classes = useStyles();
    const [categoryId, setCategoryId] = useState()
    const [category, setCategory] = useState()
    const categoryIdCallBack = (id, category) => {
        setCategoryId(id)
        setCategory(category)
        console.log('parent id :' + id)
        console.log('parent category :' + category)
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Catagory id={categoryIdCallBack}></Catagory>
                </Grid>
                <Grid item xs={6} className = {classes.boxStyle} >
                    <Item categoryId={categoryId} category={category}></Item>
                </Grid>
                <Grid item xs={3}>
                    <CardAndPayment></CardAndPayment>
                </Grid>
            </Grid>
        </div>
    )
}

export default OnlineOrder
