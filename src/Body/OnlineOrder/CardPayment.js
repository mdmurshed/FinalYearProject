import { Button } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
function CardPayment(props) {
    console.log("payment:",props.items)
    const [product,setProduct] = useState({
        name:"Order item",
        items:[],
        price:0
    })
    useEffect(() =>{
        product.items = props.items
        product.price = props.price
        console.log("payment : ",product.items,product.price)
    },[])
    const makePayment = token =>{

        const body={
            token,
            product
        }
        return axios.post('http://localhost:5000/payment/', body, { withCredentials: true })
            .then(res => {
                console.log("RESUTL:", res)
                console.log(res.statusText)
            }).catch(err => {
                console.log(err)
            })
    }
        // const headers = {
        //     "Content-Type": "application/"
        // }
        // return fetch("http://localhost:5000/payment",{
        //     method: "POST",
        //     headers,
        //     body:JSON.stringify(body)
        // })
        // .then(response =>{
        //     console.log(response)
        //     const {status} = response
        //     console.log(status)
        // }).catch(err=>{
        //     console.log("Status : ",err)
        // })
    // }
    return (
        <div>
            <StripeCheckout
                stripeKey="pk_test_51J4tH5Ait3FweL0Ljk27dorgfQ01ZdGpW9C1lWZ28X1r6GkM1vejh2Muo66RoP4IQwtCrGExXiJMNeN7VuTr3nDj00WomIiq3S"
                token={makePayment}
                name="Online Order"
                amount={props.amount+100}
            >
                <Button variant="contained" color="primary">Card Payment {props.amount}$</Button>
            </StripeCheckout>
        </div>
    )
}

export default CardPayment
