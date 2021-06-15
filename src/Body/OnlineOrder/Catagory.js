import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {


    },
    centerADD: {
        textAlign: 'center'
    }

}))
function Catagory() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.centerADD}>
                <b>Catagory</b>
            </div>
            <div style={{paddingLeft:"100px"}}>
                <ul>
                    <li>Catagory 1</li>
                    <li>Catagory 1</li>
                    <li>Catagory 1</li>
                    <li>Catagory 1</li>
                    <li>Catagory 1</li>
                    <li>Catagory 1</li>
                    <li>Catagory 1</li>
                </ul>
            </div>
        </div>
    )
}

export default Catagory
