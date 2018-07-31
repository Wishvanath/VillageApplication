import React, { Component } from 'react';
import './home.css';
import {Carousel} from 'react-bootstrap';
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
                <NavItem eventKey={1} href="#features">
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
              <div className="family_image">
                  <img src="image/hfamily.png" alt="Family" style={{height:'400px'}}/>
                </div>
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1"></div>
          </div>
        </div>
        {/* end of family body section */}  
      
        {/* start of features section */}
        <div className="site_features" id="features">
         <div className="container">
           <div className="row first_row">
             <div className="col-sm-6">
              <div className="app_image">
                <img src="image/app1.png" alt="Dashboard"/>
              </div>
             </div>
             <div className="col-sm-6 app_body">
                <div className="app_heading">
                  <h3>Heading</h3>
                </div>
                <div className="app_descp">
                  <p>
                  Manage your entire organizational structure from a single page. Create new teams or add new team members.
                  </p>
                </div>
                <div className="app_heading">
                  <h3>Heading</h3>
                </div>
                <div className="app_descp">
                  <p>
                  Manage your entire organizational structure from a single page. Create new teams or add new team members.
                  </p>
                </div>
             </div>
           </div>
            {/*end of first row section  */}
           <div className="row secondrow">
             <div className="col-sm-6 app_body">
                <div className="app_heading">
                  <h3>Heading</h3>
                </div>
                <div className="app_descp">
                  <p>
                  Manage your entire organizational structure from a single page. Create new teams or add new team members.
                  </p>
                </div>
                <div className="app_heading">
                  <h3>Heading</h3>
                </div>
                <div className="app_descp">
                  <p>
                  Manage your entire organizational structure from a single page. Create new teams or add new team members.
                  </p>
                </div>
             </div>
             <div className="col-sm-6">
              <div className="app_image">
                <img src="image/app1.png" alt="Dashboard"/>
              </div>
             </div>
           </div> 
            {/* end of second row section */}

         </div>
        </div>
        {/* end of features section */}

        {/* start of slider sub features section */}
        <div className="container">
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 "></div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 app_middle">
          <div className="app_header">
            <h3>How do we serve you.?</h3>
          </div>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 "></div>
        </div>

        <div className="row">
        <Carousel className="fooslider">
        {/* first slider item */}
          <Carousel.Item>
            <Carousel.Caption>
              <div className="row slider_body">
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_image">
                    <img src="image/waterdrop.png" alt="Water droplet"/>
                </div>
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_descp">
                  <h3>Source Of water</h3>
                  <p>
                  Helps to address the general issues with water management.
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

        {/* second slider item */}
          <Carousel.Item>
             <Carousel.Caption>
             <div className="row slider_body">
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_image">
                    <img src="image/worship.png" alt="Temple"/>
                    
                </div>
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_descp">
                <h3>Worship</h3>
                  <p>
                  Management related to conflicts and maintenance of the place.
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Third slider item */}
          <Carousel.Item>
          <Carousel.Caption>
              <div className="row slider_body">
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_image">
                    <img src="image/women.png" alt="Women Walefare"/>
                </div>
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_descp">
                <h3>WOMEN WELFARE</h3>
                  <p>
                    Helps to redesign the support and services for women who need assistent to meet basic needs for themselves.
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Fourth slider item */}
          <Carousel.Item>
          <Carousel.Caption>
              <div className="row slider_body">
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_image">
                    <img src="image/child.png" alt="Child Walefare"/>
                </div>
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_descp">
                <h3>CHILD WELFARE</h3>
                  <p>
                  By analysing and using the data the information system collects, organizations can enhance program efficiency and improve outcomes for the children they serve.
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Fifth slider item */}
          <Carousel.Item>
          <Carousel.Caption>
              <div className="row slider_body">
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_image">
                    <img src="image/health.png" alt="Health"/>
                </div>
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_descp">
                <h3>HOSPITAL</h3>
                  <p>
                  Helps to manage the lack of facilities for the villagers.
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>


          {/* sixth slider item */}
          <Carousel.Item>
          <Carousel.Caption>
              <div className="row slider_body">
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_image">
                    <img src="image/hospital.png" alt="Health_checkup"/>
                </div>
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_descp">
                <h3>TEST CENTERS</h3>
                  <p>
                  Helps the government to provide better test facilities and services nearby.
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* seventh slider item */}
          <Carousel.Item>
          <Carousel.Caption>
              <div className="row slider_body">
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_image">
                    <img src="image/bank.png" alt="Bank"/>
                </div>
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_descp">
                <h3>BANK</h3>
                  <p>
                  Manages financial trouble of the village.
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* eight slider item */}
          <Carousel.Item>
          <Carousel.Caption>
              <div className="row slider_body">
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_image">
                    <img src="image/shoping_cart.png" alt="Shoping Cart"/>
                </div>
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_descp">
                <h3>SHOPS</h3>
                  <p>
                  Helps the government to fulfil the basic requirement of the villagers.
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* nineth slider item */}
          <Carousel.Item>
          <Carousel.Caption>
              <div className="row slider_body">
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_image">
                    <img src="image/education.png" alt="Education"/>
                </div>
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_descp">
                <h3>EDUCATION</h3>
                  <p>
                  Helps government to focus on academic achievement or student development.
                  Management related to conflicts and maintenance of the place.
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* tenth slider item */}
          <Carousel.Item>
          <Carousel.Caption>
              <div className="row slider_body">
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_image">
                    <img src="image/electricity.png" alt="Bulb"/>
                </div>
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_descp">
                <h3>ELECTRICITY BOARD</h3>
                  <p>
                  This insures the electricity facility and consumption is properly managed and accessible to all the houses.
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* eleventh slider item */}
          <Carousel.Item>
          <Carousel.Caption>
              <div className="row slider_body">
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_image">
                    <img src="image/panchayat.png" alt="Panchayat"/>
                </div>
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_descp">
                <h3>PANCHAYAT</h3>
                  <p>
                  Facilitates organization of contents for simple and easy access of data and management of necessities.
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        </div>
        {/* end of slider sub features section */}



        
      </div>
    );
  }
}

export default Homepage;