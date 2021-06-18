import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles(() => ({
    root: {


    },
    hoverAdd:{
        "&:hover": {
            backgroundColor: '#F2E9E9'
          }
    },
    centerADD:{
       textAlign: 'center'
    }

}))

function Catagory(props) {
    const [items, setItem] = useState([])
    const [hoverAdd,setHoverAdd] = useState(false)
    
    
    const [renderOK, setOk] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:5000/onlineOrder/category', {
            // headers:{ 'Authorization' : token}
        }, { withCredentials: true })
            .then(res => {
                // console.log(res.data.data)
                setItem(res.data.data)
            })
    }, [renderOK])
    const classes = useStyles();
    const returnCategoryId = (id,category) => {
        // console.log(id)
        props.id(id,category)
    }
    return (
        <div className={classes.root}>
            <div className={classes.centerADD}>
                <b style={{fontSize:"35px"}}>Catagory</b>
            </div>
            <div style={{ paddingLeft: "80px" }}>
                <ul>
                    {
                        items?items.map((item, index) => (
                            <li style={{ listStyleType: "none" }} key={index}>
                                <div style={{padding: "10px 30px",fontSize:'26px'}} className = {classes.hoverAdd}
                                onClick={() => returnCategoryId(item._id,item.category)}
                                >
                                    <b>{item.category}</b>
                                </div>
                            </li>
                        )):"Loading..."
                    }

                </ul>
            </div>
        </div>
    )
}

export default Catagory
