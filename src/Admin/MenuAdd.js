import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import MenuAddForm from './MenuAddForm'
function MenuAdd(props) {

    return (
         props.log?
         <div>
             <MenuAddForm></MenuAddForm>
         </div>:<div>
             <h2 style={{color:"red",alignItems: 'center'}}>Log in First <a href="/admin/login">Click here to login</a></h2>
         </div>
    )
}
const mapStateToProps = state => {
    return {
        log:state.log.chack
    }
}

export default connect(mapStateToProps)(MenuAdd)

