import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Body/Home/Home'
import OnlineOrder from '../Body/OnlineOrder/OnlineOrder'
import Gallery from '../Body/Gallery/Gallery'
import Contact from '../Body/Contact/Contact'
import LogIn from '../Body/LogIn/LogIn'

export default class ReactRouting extends Component {
    render() {
        return (
                <Switch>
                    <Route path="/OnlineOrder"><OnlineOrder></OnlineOrder></Route>
                    <Route path="/Gellary"><Gallery></Gallery></Route>
                    <Route path="/Contact"><Contact></Contact></Route>
                    <Route path="/Login"><LogIn></LogIn></Route>
                    <Route path="/"><Home></Home></Route>
                </Switch>
        )
    }
}
