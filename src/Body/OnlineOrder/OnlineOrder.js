import React, { useState } from 'react'
import { makeStyles, Grid ,Container, Paper} from '@material-ui/core'

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
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={2}>
                 <Paper> <Catagory id={categoryIdCallBack}></Catagory> </Paper> 
                </Grid>
                <Grid item xs={12} md={6}  >
                <Paper> <Item categoryId={categoryId} category={category}></Item> </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardAndPayment></CardAndPayment>
                </Grid>
            </Grid>
         </Container>
    )
}

export default OnlineOrder
