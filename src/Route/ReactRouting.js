import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Body/Home/Home'
import OnlineOrder from '../Body/OnlineOrder/OnlineOrder'
import Gallery from '../Body/Gallery/Gallery'
import Contact from '../Body/Contact/Contact'
import LogIn from '../Body/LogIn/LogIn'
import Registration from '../Body/LogIn/Registration'

export default class ReactRouting extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Switch>
                    <Route path="/OnlineOrder"><OnlineOrder {...this.props.children}></OnlineOrder></Route>
                    <Route path="/Gellary"><Gallery {...this.props.children}></Gallery></Route>
                    <Route path="/Contact"><Contact {...this.props.children}></Contact></Route>
                    <Route path="/Registration"><Registration {...this.props.children}></Registration></Route>
                    <Route path="/Login"><LogIn {...this.props.children}></LogIn></Route>
                    <Route path="/"><Home {...this.props.children}></Home></Route>
                </Switch>
        )
    }
}
