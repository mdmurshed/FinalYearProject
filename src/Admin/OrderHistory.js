import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import { Button } from '@material-ui/core';
function OrderHistory() {
    const token = 'bearer ' + document.cookie.split("=")[1];
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/orderList/orderHistoy', {
            headers: { 'Authorization': token }
        }, { withCredentials: true })
            .then(res => {
                console.log("orders:" ,res.data.status)
                setOrders(res.data.data)
                console.log("orders::" ,orders)
                // orders.map(order => console.log(order.orders))
            }).catch(err => {console.log(err)})
    }, [])
    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "#DED6D6" }}>
                            <TableCell key={1}><b>Person</b></TableCell>
                            <TableCell key={2}><b>Orders</b></TableCell>
                            <TableCell key={3}><b>Price</b></TableCell>
                            <TableCell key={4}><b>Status</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders ? orders.map((order)=> (
                                <TableRow key={order._id}>
                                    <TableCell component="th" scope="row" key={1}><b>{order.person}</b></TableCell>
                                    <TableCell key={2}><b>{order.orders}</b></TableCell>
                                    <TableCell key={3}><b>{order.price}</b></TableCell>
                                    <TableCell key={4}><b>Done</b></TableCell>
                                </TableRow>
                            )):<div>Loading ...</div>


                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default OrderHistory
