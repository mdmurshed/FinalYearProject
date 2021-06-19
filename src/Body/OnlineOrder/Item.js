import React, { useState, useEffect } from 'react'
import {  Grid, makeStyles } from '@material-ui/core'
import axios from 'axios'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {connect} from 'react-redux'
import {addCard} from '../../Redux'
const useStyles = makeStyles(() => ({
    root: {
        padding:'10px 30px'

    },
    centerADD: {
        textAlign: 'center'
    },
    hoverAdd:{
        "&:hover": {
            backgroundColor: '#F2E9E9'
          }
    },
    addCard:{
        "&:hover": {
            backgroundColor: '#F2E9E9',
            color:'red',
            fontSize:'30px'
          }
    }
    


}))
function Item(props) {
    const [renderOK, setOk] = useState(0)
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
        props.addCard(listOfItem)
        // else  setListOfItem(preList=>[...preList ,temp])
        // console.log("listOfItem: ")
        // console.log(listOfItem)

    }
    const classes = useStyles();
    console.log(props.categoryId)
    return (
        <div className={classes.root}>
            <div className={classes.centerADD}>
                {
                     category==" "?<b style={{ fontSize: "35px" }}>All Items</b>:<h1>{category}</h1>
                }
            </div>
            <div>
                
                <div>
                    {
                        items ? items.map((item,index) => {
                            return <div key = {index} className = {classes.hoverAdd} style={{padding:'10px 20px'}}>
                                <Grid container>
                                    <Grid item sm={6}><h3>{item.item}</h3></Grid>
                                    <Grid item sm={4}><h3>price:{item.price} </h3></Grid>
                                    <Grid item sm={2} style={{justifyContent: "center",display: "flex",alignItems: "center"}}><AddCircleOutlineIcon className={classes.addCard} onClick={()=>cardAdd(item.item,item.price)}></AddCircleOutlineIcon></Grid>
                                </Grid>
                                <p>{item.discription}</p>
                                </div> 
                        }) :"...Loading"
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    
    console.log(state.card.cardItem)
    return {
        cardItem:state.card.cardItem
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addCard:listOfItem=>{
            dispatch(addCard(listOfItem))
       
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Item)