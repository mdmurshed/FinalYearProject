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
const token = 'bearer ' + document.cookie.split("=")[1];
function MenuItemList() {
    const [items, setItems] = useState([])
    const [update,setOk] = useState(false)
    
    useEffect(() => {
        axios.get('http://localhost:5000/admin', {
            headers: { 'Authorization': token }
        }, { withCredentials: true })
            .then(res => {
                setItems(res.data.data)
                console.log(items)
                // return <Items data = res.data.data ></Items>
            })
    },[update])
    function deleteItem(id){
        console.log(id)
        axios.delete('http://localhost:5000/admin/itemSearch/'+id, {
                headers: { 'Authorization': token }
            }, { withCredentials: true })
                .then(res => {
                    console.log("Item deleted")
                    // return <Items data = res.data.data ></Items>
                })
        setOk(true)
        
    }
    
    // const chacking = () => {
    //     console.log(items)
    //     setCount(count + 1)
    // }    
    const startEditing = (index)=>{
        console.log(index)
    }
    return <div>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow style={{backgroundColor:"#DED6D6"}}>
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
                        items.map((row,index) => (
                            <TableRow key={row._id}>
                                <TableCell component="th" scope="row">
                                    {row.item}
                                </TableCell>
                                <TableCell align="Left">{row.category}</TableCell>
                                <TableCell align="Left">{row.discription}</TableCell>
                                <TableCell align="Left">{row.price}</TableCell>
                                <TableCell align="Left"><button onClick={()=>startEditing(index)}><EditIcon></EditIcon></button></TableCell>
                                <TableCell align="Left"><button onClick={()=>deleteItem(row._id)}><DeleteIcon></DeleteIcon></button></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}


export default MenuItemList
