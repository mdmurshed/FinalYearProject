import React,{useEffect, useState} from 'react'
import axios from 'axios'


function Account() {

    useEffect(() =>{
        axios.get('http://localhost:5000/')
        .then(res=>{

        })
    })

    return (
        <div>
            My Account
        </div>
    )
}

export default Account
