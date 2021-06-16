import React from 'react'
import {connect} from 'react-redux'
import TabPanel from './TabPanel'
function Admin(props) {
    console.log("admin status : " + props.log)
    return (
         props.log?
         <div>
             <div style={{textAlign: 'center'}}>
                 <h3>Admin Page</h3>
                 {/* editing option not done yet */}
                 {/* <PopUp></PopUp> */}
             </div>
             <div>
                 <TabPanel></TabPanel>
             </div>
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

export default connect(mapStateToProps)(Admin)
