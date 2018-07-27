import React, { Component } from 'react';
import './home.css';

import {
  Navbar,
  NavItem,
  Nav} from 'react-bootstrap';
class Homepage extends Component {

  //define constructor
  constructor(props){
    super(props);
    this.state={

    }
    
  }// end of constructor


  render() {
    
    return (
      <div>
        {/* site nav bar section */}
        <Navbar className="sitenav">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">SkyMap Global</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  <span>Features</span>
                </NavItem>
                <NavItem eventKey={2} href="#">
                  <span>Pricing</span>
                </NavItem>
                <NavItem eventKey={2} href="#">
                  <span className="btn-login">Login</span>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        {/* end of site navbar  */}

        {/* background image section */}
        <div className="test">
            
        </div>
        {/* end of background image  */}

      </div>
    );
  }
}

export default Homepage;