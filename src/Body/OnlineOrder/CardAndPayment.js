import React, { useState, useEffect } from 'react'
import { Grid, Container, makeStyles, Paper, Typography, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { removeCard, addCard } from '../../Redux'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CardPayment from './CardPayment';
import axios from 'axios'
const useStyles = makeStyles(() => ({
    root: {
        margin: "8px"

    },
    hoverAdd: {
        "&:hover": {
            backgroundColor: '#F2E9E9'
        }
    },
    container: {
        padding: "8px",
        backgroundColor: '#f2f2f2'

    }
}))
function CardAndPayment(props) {
    const classes = useStyles();
    const [price, setPrice] = useState(0)
    const [orderItem, setOrderItem] = useState([])
    const [ok, setOk] = useState(0)

    // history item
    const [historyItems, setHistoryItems] = useState("")
    const [tempPrice, setTempPrice] = useState(0)
    const increaseItem = (index, itemPrice) => {
        console.log("increaseItem totalPrice:", props.total)
        console.log("item:Price", itemPrice)
        console.log("Sum :", props.total + itemPrice)
        props.cardItem[index].numOfItems += 1
        setPrice(price + itemPrice)
        addCard(props.cardItem, props.total + itemPrice)
        setOk(ok + 1)

    }
    const decreaseItem = (index, itemPrice) => {
        // console.log(index)
        // console.log("decreaseItem :",props.cardItem)
        if (props.cardItem[index].numOfItems > 0) {
            props.cardItem[index].numOfItems = props.cardItem[index].numOfItems - 1
        }
        // console.log(props.cardItem)
        setPrice(price - itemPrice)
        if (props.cardItem[index].numOfItems == 0) props.cardItem.splice(index, 1)
        addCard(props.cardItem, props.total - itemPrice)
        setOk(ok + 1)
    }

    const token = 'bearer ' + document.cookie.split("=")[1];
    useEffect(() => {
        setOrderItem(props.cardItem)
        console.log("order user : ", props.user)
        // order history add
        axios.get('http://localhost:5000/orderList/' + props.user, {
            headers: { 'Authorization': token }
        }, { withCredentials: true })
            .then(res => {
                // console.log(document.cookie.split("=")[1])
                console.log(res.data.data)
                // setHistoryItems(res.data.data[0].orders)
                // setTempPrice(res.data.data[0].price)
            })
        // console.log("useEffect : order item: ",orderItem)
    }, [ok, increaseItem, decreaseItem])
    const orderDone = () => {
        var orders = ""
        for (var i = 0; i < orderItem.length; i++) {
            console.log(orderItem[i].item)
            orders += orderItem[i].item + "(" + orderItem[i].numOfItems + (i != orderItem.length - 1 ? ")," : ")")
        }
        console.log("result:", orders)
        const Data = {
            person: props.user,
            orders: orders,
            price: price + props.total
        }
        axios.post('http://localhost:5000/orderList', Data, {
            headers: { 'Authorization': 'bearer ' + document.cookie.split("=")[1] }
        }, { withCredentials: true })
            .then(res => {
                console.log(res.data)
            })
        setHistoryItems(orders)
        setTempPrice(props.total+price)
        props.addCard([], 0);
        setPrice(0)


    }


    return (
        <Container >

            <Typography className={classes.root} variant='h4' align='center'>Card and Payment</Typography>
            {/* <button onClick={() =>props.removeCard()}>delete the card data</button> */}

            <div className={classes.root, classes.container} >
                <Grid container >
                    <Grid item container spacing={2}>

                        <Grid item sm={4} key={1}><Typography variant='h6'> Item    </Typography></Grid>
                        <Grid item sm={4} key={2}><Typography variant='h6' > Quantity</Typography></Grid>
                        <Grid item sm={4} key={3}><Typography variant='h6' > Price   </Typography></Grid>

                    </Grid>
                </Grid>
            </div>

            <div>

                {
                    orderItem && orderItem.map((data, index) => {
                        return <div key={index}>
                            <Paper >
                                <Grid container spacing={2} className={classes.root} >
                                    <Grid item sm={4} key={1}>
                                        <Typography variant='body1'>{data.item}</Typography>
                                    </Grid>
                                    <Grid item container sm={4} key={2}>
                                        <Grid item key={1}>    <AddIcon className={classes.hoverAdd} onClick={() => increaseItem(index, data.price)} />
                                            {/* <Button onClick={() => increaseItem(index, data.price)}><AddIcon /></Button> */}
                                        </Grid>
                                        <Grid item key={2}>
                                            <Typography variant='body1'>{data.numOfItems}</Typography>
                                        </Grid>
                                        <Grid item key={3}>
                                            <RemoveIcon className={classes.hoverAdd} onClick={() => decreaseItem(index, data.price)} />
                                            {/* <Button onClick={() => decreaseItem(index, data.price)}><RemoveIcon /></Button> */}
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={4}><Typography key={3} variant='body1'>{data.price}</Typography></Grid>
                                </Grid>
                            </Paper>
                        </div>
                    })
                }


                <hr></hr>
                <div>
                    <Container className={classes.root}>
                        <Grid container spacing={2} >
                            <Grid item sm={8} key={1}><Typography variant='h6'>Price:</Typography></Grid>
                            <Grid item sm={4} key={2}><Typography variant='h6'>{price + props.total} $</Typography></Grid>
                        </Grid>
                    </Container>
                    <hr style={{ marginTop: '80px' }}></hr>
                    <CardPayment amount={price + props.total} items={orderItem}></CardPayment>
                    <Button onClick={orderDone} variant="contained" style={{ marginTop: '10px' }}>Cash ({price + props.total})$</Button>
                </div>


            </div>
            <div>
                <hr style={{ marginTop: '80px' }}></hr>
                <h1>Order history</h1>
                <hr style={{ marginTop: '-19px' }}></hr>
                <div>
                    <h3>{historyItems}</h3>
                    <h2>Price:{tempPrice}</h2>
                </div>
            </div>

        </Container>
    )
}


const mapStateToProps = state => {
    // console.log("card and payment: ", state.card.total)
    return {
        user: state.log.user,
        cardItem: state.card.cardItem,
        total: state.card.total
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCard: (listOfItem, price) => {
            dispatch(addCard(listOfItem, price))

        },
        removeCard: () => {
            dispatch(removeCard())

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardAndPayment)
