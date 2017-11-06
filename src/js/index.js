/**
 * Created by liaopeng on 2017/8/29.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'
import Index from "./admin/login"
import Admin from "./admin/main"
import Build from './admin/build'
export  default class Root extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route component={Index} path="/"></Route>
                <Route component={Admin} path="/admin"></Route>
                <Route component={Build} path="/build"></Route>
            </Router>
        )
    }
}
ReactDOM.render(<Root/>, document.getElementById('root'));