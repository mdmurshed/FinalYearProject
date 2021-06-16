import { Grid, TextField, makeStyles, Button, Link, FormControl, Input, InputLabel, FormHelperText, Hidden } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 30px',
        backgroundColor: '#F9FAE9',
        padding: '50px 100px'
    },
    signup: {
        fontSize: '20px',
        padding: '10px 0px'
    },
    genaralSpacing: {
        padding: '10px 0px 0px 0px',
    }

}))

function UpdateItem(props) {
    const token = 'bearer ' + document.cookie.split("=")[1];
    console.log(props.id)
    const classes = useStyles();
    const [category, setCategory] = useState("")
    const [item, setItem] = useState("")
    const [discription, setDiscription] = useState("")
    const [price, setPrice] = useState("")
    const [items,setItems] = useState([])
    const [ok,setOk] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:5000/admin/oneItem/'+props.id, {
            headers: { 'Authorization': token }
        }, { withCredentials: true })
            .then(res => {
                setItems(res.data.data)
                console.log(items)
                setCategory(res.data.data[0].category)
                setItem(res.data.data[0].item)
                setDiscription(res.data.data[0].discription)
                setPrice(res.data.data[0].price)
                setOk(true)
                // return <Items data = res.data.data ></Items>
            })
    },[ok])


    const submitLogin = () => {
        const token = 'bearer ' + document.cookie.split("=")[1];
        const Data = {
            category: category,
            item: item,
            discription: discription,
            price: price
        }
        console.log( "Updated data : " + Data)
        // axios.post('http://localhost:5000/admin/adminAdd',Data)
        // .then(res=>{
        //     console.log(res)
        // }).catch(err=>{
        //     console.log(err)
        // })
        axios.patch('http://localhost:5000/admin/itemSearch/'+props.id, Data,{
            headers: { 'Authorization': token }
        }, { withCredentials: true })
            .then(res => {
                console.log(res.data)
            })
        setCategory("")
        setItem("")
        setDiscription("")
        setPrice("")
        props.parentCallBack(false)
    }
    const cencleingUpdate=()=>{
        console.log(items)
        props.parentCallBack(false)
    }

    return (
        <div style={{ padding: '5px', display: 'flex', justifyContent: "center" }}>
            <div className={classes.root}>
                <Grid item className={classes.signup} >
                    Update Items
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="category" label="Category" style={{ inlineSize: '600px' }} value={category} onChange={(event) => setCategory(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="item" label="Item" style={{ inlineSize: '600px' }} value={item} onChange={(event) => setItem(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="discription" label="Discription" style={{ inlineSize: '600px' }} value={discription} onChange={(event) => setDiscription(event.target.value)} />
                </Grid>
                <Grid item className={classes.genaralSpacing}>
                    <TextField id="price" label="Price" style={{ inlineSize: '600px' }} value={price} onChange={(event) => setPrice(event.target.value)} />
                </Grid>

                <Grid item className={classes.genaralSpacing} style={{ padding: '25px 0px 0px 0px' }}>
                <Button variant="contained" color="primary" onClick={() => submitLogin()}>
                        Update Item
                    </Button>
                    <Button variant="contained" style={{backgroundColor: 'red',color:'white', marginLeft:"10px"}} onClick={() => cencleingUpdate()}>
                        Cencle 
                    </Button>
                    
                </Grid>
            </div>
        </div>
    )
}



export default UpdateItem
