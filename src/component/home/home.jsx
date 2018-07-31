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
              <Navbar.Brand className="brand_image">
                <a href="#home">
                  <img src="image/site_logo.png" alt="Logo"/>
                </a>
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
                <NavItem eventKey={3} href="#">
                  <span className="btn-login">Login</span>
                </NavItem>
                <NavItem eventKey={4} href="#">
                  <i className="fa fa-search search_tag"></i>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        {/* end of site navbar  */}

        {/* start body intro section */}
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6 village_img">
              <img src="image/villageapp_banner.png" alt="Banner"/>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 app_head">
              <h2>Village <span className="app">App</span></h2>
              <div className="village_util">
                <h1>
                  The Simplest Way To Manage Your Village Utilities.
                </h1>
              </div>
              <div className="village_content">
                <p>
                Village Utilities the is best source of data collection for facilities that are said to deliver important primary services in the everyday lives of villagers, allowing them to shop for groceries, take their children to school, and engage in leisure activities and many more within the village.
                </p>
              </div>
              <div className="getstarted">
                <button className="getstarted_btn"><span>Get Started Now >></span></button>
              </div>
            </div>
          </div>
        </div>
        {/* end of body intro section */}

        {/* family body section */}
        <div className="family_body">
          <div className="row">
                <div className="family_heading">
                  <h3>Hierarchy of Family</h3>
                </div>
            <div className="col-sm-1 col-md-1 col-lg-1"></div>
            <div className="col-sm-10 col-md-10 col-lg-10 family_descp">
             <p>
              The application serves enumeration of the population and households in the country. Data collection and production of information is helpful for government ministries and local authorities, for budgeting purposes.Collection of socio-economic information on a large sample of people in the population, which makes it possible to acquire data and information on small, unique groups in the population and production of information which serves bodies, organizations and various other elements in the fields of education, the economy, business, research, etc.
              </p>
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1"></div>
          </div>
        </div>
        {/* end of family body section */}  

        {/* start of family heirarchy */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="family_image">
                  <img src="image/family_hierarchy.png" alt="Family" style={{height:'400px'}}/>
                </div>
               
            </div>
          </div>
        </div>

        {/* end of family heirarchy */}


        
      </div>
    );
  }
}

export default Homepage;