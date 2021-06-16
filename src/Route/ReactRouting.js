import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Body/Home/Home'
import OnlineOrder from '../Body/OnlineOrder/OnlineOrder'
import Gallery from '../Body/Gallery/Gallery'
import Contact from '../Body/Contact/Contact'
import LogIn from '../Body/LogIn/LogIn'
import Registration from '../Body/LogIn/Registration'
import Reservation from '../Body/Reservation/Reservation'
import Admin from '../Admin/Admin'
import MenuAdd from '../Admin/MenuAdd'
import Login from '../Admin/Login'
export default class ReactRouting extends Component {
    render() {
        return (
                <Switch>
                    <Route path="/OnlineOrder"><OnlineOrder {...this.props.children}></OnlineOrder></Route>
                    <Route path="/Gallery"><Gallery {...this.props.children}></Gallery></Route>
                    <Route path="/Contact"><Contact {...this.props.children}></Contact></Route>
                    <Route path="/Registration"><Registration {...this.props.children}></Registration></Route>
                    <Route path="/Reservation"><Reservation {...this.props.children}></Reservation></Route>
                    <Route path="/Login"><LogIn {...this.props.children}></LogIn></Route>
                    {/* <Route path="/admin/menuAdd"><MenuAdd></MenuAdd></Route> */}
                    <Route path="/admin/login"><Login></Login></Route>
                    <Route path="/admin"><Admin></Admin></Route>
                    <Route path="/"><Home {...this.props.children}></Home></Route>
                </Switch>
        )
    }
}
