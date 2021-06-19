import React, { useState,useEffect } from 'react'
import { Grid, makeStyles,Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { removeCard,addCard } from '../../Redux'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const useStyles = makeStyles(() => ({
    root: {


    },
    centerADD: {
        textAlign: 'center'
    }
}))

function CardAndPayment(props) {
    const classes = useStyles();
    const [price, setPrice] = useState(0)
    const [orderItem,setOrderItem] = useState([])
    const increaseItem=(index)=>{
        console.log("increaseItem :",props.cardItem)
        props.cardItem[index].numOfItems=props.cardItem[index].numOfItems + 1
        console.log(props.cardItem)

        // props.cardItem[index].numOfItems+=1
        addCard(props.cardItem)
    }
    const decreaseItem=(index)=>{
        // console.log(index)
        console.log("decreaseItem :",props.cardItem)
        if(props.cardItem[index].numOfItems>0) props.cardItem[index].numOfItems=props.cardItem[index].numOfItems - 1
        console.log(props.cardItem)
        if(props.cardItem[index].numOfItems == 0) props.cardItem.splice(index,1)
        addCard(props.cardItem)
    }
    useEffect(() => {
        setOrderItem(props.cardItem)
    },[decreaseItem,increaseItem])
   
    return (
        <div className={classes.root}>
            <div className={classes.centerADD} style={{ fontSize: "35px", margin: '50px' }}>
                <b>Card and Payment</b>
                {/* <button onClick={() =>props.removeCard()}>delete the card data</button> */}
            </div>
            <div>
                <div style={{ padding: '10px 10px 10px 50px',fontSize: '20px',backgroundColor:"#F7F7F7"}}>
                    <Grid container >
                        <Grid item sm={6}style={{}} key={1}><b>Item</b></Grid>
                        <Grid item sm={4}style={{padding: '0px 24px'}} key={2}><b>Quantity</b></Grid>
                        <Grid item sm={2}style={{}} key={3}><b>Price</b></Grid>
                    </Grid>
                </div>
                <div>
                {
                    orderItem && orderItem.map((data,index )=>
                        <div style={{ padding: '10px 10px 10px 50px' }} key={index}>
                            <Grid container >
                                <Grid item sm={6} style={{}} key={1}><b style={{ fontSize: "20px" }}>{data.item}</b></Grid>
                                <Grid item sm={4} key={2}>
                                    <Button onClick={()=>increaseItem(index)}><div><AddIcon></AddIcon></div></Button>
                                    <b style={{ fontSize: "20px" }}>{data.numOfItems}</b>
                                    <Button onClick={()=>decreaseItem(index)}><div><RemoveIcon></RemoveIcon></div></Button>
                                </Grid>
                                <Grid item sm={2} style={{padding:'0px 10px'}}><b style={{ fontSize: "20px" }} key={3}>{data.price}</b></Grid>
                            </Grid>
                        </div>
                    )
                }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {

    console.log("card and payment: ", state.card.cardItem)
    return {
        cardItem: state.card.cardItem
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCard:listOfItem=>{
            dispatch(addCard(listOfItem))
       
        },
        removeCard: () => {
            dispatch(removeCard())

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardAndPayment)
