import * as React from 'react';
import {Link} from "react-router-dom";
import {Route} from "react-router";

import SubMenu1 from "./SubMenu1";
import SubMenu2 from "./SubMenu2";

export interface MenuProps {
    match: any;
}


export default class Menu extends React.Component<MenuProps, {}> {
    render() {
        return(
          <div>
              <nav>
                  <Link to={this.props.match.url + '/sub-menu1'}>Sub Menu 1</Link>
                  <br />
                  <Link to={this.props.match.url + '/sub-menu2'}>Sub Menu 1</Link>
              </nav>
              <Route
                  path={this.props.match.url + '/sub-menu1'}
                  component={SubMenu1}
              />
              <Route
                  path={this.props.match.url + '/sub-menu2'}
                  component={SubMenu2}
              />
          </div>
        );
    }
}