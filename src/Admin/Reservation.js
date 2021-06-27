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
import ClearIcon from '@material-ui/icons/Clear';
function Reservation() {
    const token = 'bearer ' + document.cookie.split("=")[1];
    const [orders, setOrders] = useState([])
    const [ok,setOk] = useState(0)
    const acceptReservation = (id) => {
        console.log(id)
        axios.get('http://localhost:5000/reservation/update/'+id, {
            headers: { 'Authorization': token }
        }, { withCredentials: true })
            .then(res => {
                console.log(res)
            }).catch(err => { console.log(err) })
        setOk(ok+1)
    }
    const deleteReservation = (id)=>{
        console.log(id)
        axios.delete('http://localhost:5000/reservation/'+id, {
            headers: { 'Authorization': token }
        }, { withCredentials: true })
            .then(res => {
                console.log(res)
            }).catch(err => { console.log(err) })
        setOk(ok+1)
    }
    useEffect(() => {
        axios.get('http://localhost:5000/reservation', {
            // headers: { 'Authorization': token }
        }, { withCredentials: true })
            .then(res => {
                console.log("reservation:", res.data)
                setOrders(res.data.data)
                console.log("orders::", orders)
            }).catch(err => { console.log(err) })
    }, [ok])
    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "#DED6D6" }}>
                            <TableCell key={1}><b>Name</b></TableCell>
                            <TableCell key={2}><b>Phone Number</b></TableCell>
                            <TableCell key={3}><b>Number of Guest</b></TableCell>
                            <TableCell key={4}><b>Message</b></TableCell>
                            <TableCell key={5}><b>Status</b></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders ? orders.map((order) => (
                                <TableRow key={order._id}>
                                    <TableCell component="th" scope="row" key={1}><b>{order.name}</b></TableCell>
                                    <TableCell key={2}><b>{order.phone}</b></TableCell>
                                    <TableCell key={3}><b>{order.guest}</b></TableCell>
                                    <TableCell key={4}><b>{order.message}</b></TableCell>
                                    {
                                        !order.recived ? <TableCell key={5}>
                                            <CheckIcon style={{ color: 'green' }} onClick={() => acceptReservation(order._id)}></CheckIcon>
                                            <ClearIcon style={{ color: 'red' }} onClick={() => deleteReservation(order._id)}></ClearIcon>
                                        </TableCell>:<TableCell key={5}><b>Reservation Accepted.</b></TableCell>
                                    }
                                </TableRow>
                            )) : <div>Loading ...</div>


                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Reservation
