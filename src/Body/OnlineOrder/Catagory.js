import React, { useEffect, useState } from 'react'
import { makeStyles ,Typography,Container } from '@material-ui/core'
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
       textAlign: 'center',
       padding: 8
    },  
    container:{
        padding:"8px",
        backgroundColor: '#f2f2f2'

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
        <Container className={classes.root}>
           
                <Typography variant ='h4' align="center"  className={classes.container}>Catagory</Typography> 
           
            <div >
              
                    {
                        items?items.map((item, index) => (
                            <div key={index}>
                                <div  className = {classes.hoverAdd}
                                onClick={() => returnCategoryId(item._id,item.category)}
                                >
                                    <Typography variant ='h6'>{item.category}</Typography>
                                    <hr></hr>
                                </div>
                            </div>
                        )):"Loading..."
                    }

                
            </div>
        </Container>
    )
}

export default Catagory
