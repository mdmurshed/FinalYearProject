import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EditTable from './Notworking/EditTable';
import UpdateItem from './UpdateItem';
const token = 'bearer ' + document.cookie.split("=")[1];
function MenuItemList() {
    const [items, setItems] = useState([])
    const [ok, setOk] = useState(0)
    const [update, setUpdate] = useState(false)
    const [id, setId] = useState()
    useEffect(() => {
        axios.get('http://localhost:5000/admin', {
            headers: { 'Authorization': token }
        }, { withCredentials: true })
            .then(res => {
                setItems(res.data.data)
                console.log(items)
                // return <Items data = res.data.data ></Items>
            })
            .catch(err => {console.log(err)})
    }, [ok])
    function deleteItem(id) {
        console.log(id)
        axios.delete('http://localhost:5000/admin/itemSearch/' + id, {
            headers: { 'Authorization': token }
        }, { withCredentials: true })
            .then(res => {
                console.log("Item deleted")
                // return <Items data = res.data.data ></Items>
            })
            .catch(err => console.log(err))
        setOk(ok+1)

    }

    // const chacking = () => {
    //     console.log(items)
    //     setCount(count + 1)
    // }    
    const startEditing = (id) => {
        console.log(id)
        setUpdate(true)
        setId(id)
        setOk(ok+1)
    }
    // const cencleEdit = () => {
    //     setUpdate(false)
    // }

    const callbackFunction = (chack) => {
        setUpdate(chack)
        setOk(ok+1)
    }

    return < div >
        {
            
            update ? <UpdateItem id={id} parentCallBack = {callbackFunction}></UpdateItem> :
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow style={{ backgroundColor: "#DED6D6" }}>
                                <TableCell><b>Items</b></TableCell>
                                <TableCell align="left"><b>Category</b></TableCell>
                                <TableCell align="left"><b>Discription</b></TableCell>
                                <TableCell align="left"><b>Price</b></TableCell>
                                <TableCell align="left"><b>Edit</b></TableCell>
                                <TableCell align="left"><b>Delete</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                items ? items.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell component="th" scope="row">
                                            {row.item}
                                        </TableCell>
                                        <TableCell align="Left">{row.category}</TableCell>
                                        <TableCell align="Left">{row.discription}</TableCell>
                                        <TableCell align="Left">{row.price}</TableCell>
                                        <TableCell align="Left"><button onClick={(e) => startEditing(row._id)}><EditIcon></EditIcon></button></TableCell>
                                        <TableCell align="Left"><button onClick={() => deleteItem(row._id)}><DeleteIcon></DeleteIcon></button></TableCell>
                                    </TableRow>
                                )) : <div>Loading...</div>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
        }
    </div>
}
export default MenuItemList
