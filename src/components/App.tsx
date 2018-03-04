import * as React from 'react';
import {Link} from "react-router-dom";
import {Route} from "react-router";

import Menu from './Menu';



export default class App extends React.Component {
    render() {
        return(
            <div>
                <nav>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
                <div>
                    <Route path="/Dashboard" component={Menu}/>
                </div>
            </div>
        )
    }
}