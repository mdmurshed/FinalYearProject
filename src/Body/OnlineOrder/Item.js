import React, { useState, useEffect } from 'react'
import {  Grid, makeStyles,Typography,Container,Paper } from '@material-ui/core'
import axios from 'axios'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {connect} from 'react-redux'
import {addCard} from '../../Redux'
const useStyles = makeStyles(() => ({
    root: {
        padding:'8px',
        marginBottom:'20px'

    },
    centerADD: {
        textAlign: 'center',
        padding:20
    },
    hoverAdd:{
        "&:hover": {
            backgroundColor: '#F2E9E9',
            
          }
    },
    addCard:{
        "&:hover": {
            backgroundColor: '#F2E9E9',
            color:'red',
            
          }
    },
    container:{
        backgroundColor: '#f2f2f2'

    }
    


}))
function Item(props) {
    const [renderOK, setOk] = useState(0)
    // const [orderList,setOrderList] = useState("")
    const [items, setItem] = useState([])
    // const [listOfItem, setListOfItem] = useState([])
    const listOfItem = []
    const categoryId = props.categoryId
    const category = props.category || " "
    useEffect(() => {
        
        // console.log("category Item:" )
        // console.log(category==" "?'http://localhost:5000/onlineOrder':'http://localhost:5000/onlineOrder/itemSearch/'+category)
        axios.get(category==" "?'http://localhost:5000/onlineOrder':'http://localhost:5000/onlineOrder/itemSearch/'+category, {
            // headers:{ 'Authorization' : token}
        }, { withCredentials: true })
            .then(res => {
                console.log(res.data.data)
                setItem(res.data.data)
                console.log("items---")
                console.log(items)
              
                // setOk(renderOK+1)
            }).catch(err => {console.log(err)})
    }, [category])
    const cardAdd = (item,price)=>{
        console.log('card Card :',props.cardItem)
        // setListOfItem(props.cardItem )
        // console.log(props.cardItem)
        // console.log(listOfItem)
        // console.log(price)
        const temp = {
            item:item,
            numOfItems:1,
            price:price
        }
        // setOrderList(orderList+item+",")
        // listOfItem[0].numOfItems=4
        // console.log(listOfItem[0].numOfItems)
        // listOfItem[0].price=40
        let ok = true
        for(let i = 0;i<props.cardItem.length;i++){
            if(props.cardItem[i].item === item){
                props.cardItem[i].numOfItems +=1
                ok = false
            }
            listOfItem.push(props.cardItem[i])
        }
        if(ok) listOfItem.push(temp)
        props.addCard(listOfItem,props.total+price)
        // else  setListOfItem(preList=>[...preList ,temp])
        // console.log("listOfItem: ")
        // console.log(listOfItem)

    }
    const classes = useStyles();
    console.log(props.categoryId)
    return (
        <Container  className={classes.container}>
            <div className={classes.centerADD}>
                {
                     category==" "?<Typography variant='h4'>All Items</Typography>:<Typography variant="h4">{category}</Typography>
                }
            </div>
            <div>
                
                <div className={classes.root} >
                    {
                        items ? items.map((item,index) => {
                            return <Grid container spacing={1} key = {index} className = {classes.hoverAdd} >
                               <Paper className={classes.root} key = {index}>
                                <Grid  item container spacing={1} key={index}>
                                    <Grid item container sm={6} key={1}>
                                         <Grid item key={1}>  <Typography variant='h6'>{item.item}</Typography> </Grid> 
                                         <Grid item key={2}><Typography variant="body1" gutterBottom>{item.discription}</Typography></Grid>  
                                    </Grid>
                                    <Grid item sm={3} key={2}><Typography variant='h6'>price:{item.price}</Typography></Grid>
                                    <Grid item sm={3} key={3} style={{paddingRight:'10px'}}><AddCircleOutlineIcon  className={classes.addCard} onClick={()=>cardAdd(item.item,item.price)}></AddCircleOutlineIcon></Grid>
                                    {/* <Grid item sm={12}><Typography variant="body1" gutterBottom>{item.discription}</Typography></Grid> */}
                                </Grid>
                                </Paper>
                                
                               
                                </Grid> 
                        }) :"...Loading"
                    }
                </div>
            </div>
        </Container>
    )
}

const mapStateToProps = state => {
    
    console.log(state.card.cardItem)
    return {
        cardItem:state.card.cardItem,
        total:state.card.total
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addCard:(listOfItem,price)=>{
            dispatch(addCard(listOfItem,price))
       
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Item)