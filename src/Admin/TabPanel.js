import React,{useState} from 'react'
import {Tabs,Tab,AppBar} from '@material-ui/core'
import MenuAdd from './MenuAdd'
import MenuItems from './MenuItems'
import UpdateItem from './UpdateItem'
import OrderItems from './OrderItems'

function TabPanel() {
    const [value,setValue] = useState(0)
    const handleTab = (e,value)=>{
        console.warn(value)
        setValue(value)
    }
    return (
        <div>
            <AppBar position="static" style={{backgroundColor:"#A8A8A8",color:'black'}}>
                <Tabs value={value} onChange={handleTab} >
                    <Tab style={{fontWeight:"bold"}} label="Menu Items"/>
                    <Tab style={{fontWeight:"bold"}} label="Add Menu"/>
                    <Tab style={{fontWeight:"bold"}} label="Order Items"/>
                </Tabs>
            </AppBar>
            <TabPanelPage value = {value} index={0}>
                <MenuItems></MenuItems>
            </TabPanelPage>
            <TabPanelPage value = {value} index={1}>
                <MenuAdd></MenuAdd>
            </TabPanelPage>
            <TabPanelPage value = {value} index={2}>
                <OrderItems></OrderItems>
            </TabPanelPage>
        </div>
    )
}
function TabPanelPage(props){
    const {children,value,index} = props
    return <div>
        {
          value === index &&  <h1>{children}</h1>
        }
    </div>
}

export default TabPanel
