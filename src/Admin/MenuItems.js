import React from 'react'
import {connect} from 'react-redux'
import MenuItemList from './MenuItemList'
function MenuItems(props) {

    return (
         props.log?
         <div>
             <MenuItemList></MenuItemList>
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

export default connect(mapStateToProps)(MenuItems)

