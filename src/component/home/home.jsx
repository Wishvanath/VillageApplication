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

// define the auto hide and show the state village and taluka div section 
funstateutil(e){
  e.preventDefault();
  var showbody = document.getElementById("stateutil");
  var hidebody = document.getElementById("stateana");
  showbody.style.display = "block";
  hidebody.style.display = "none";
  var pacolor = document.getElementById("stateactive");
  pacolor.style.color = "white";
  var picolor = document.getElementById("stateinactive");
  picolor.style.color = "black";
}
funstateana(e){
  e.preventDefault();
  var showbody = document.getElementById("stateana");
  var hidebody = document.getElementById("stateutil");
  showbody.style.display = "block";
  hidebody.style.display = "none";
  var pacolor = document.getElementById("stateactive");
  pacolor.style.color = "black";
  var picolor = document.getElementById("stateinactive");
  picolor.style.color = "white";
}
funDisUtil(e){
  e.preventDefault();
  var showbody = document.getElementById("distutil");
  var hidebody = document.getElementById("distana");
  showbody.style.display= "block";
  hidebody.style.display= "none";
  var pacolor = document.getElementById("distactive");
  pacolor.style.color = "white";
  var picolor = document.getElementById("distinactive");
  picolor.style.color = "black";
}
funDistana(e){
  e.preventDefault();
  var showbody = document.getElementById("distana");
  var hidebody = document.getElementById("distutil");
  showbody.style.display = "block";
  hidebody.style.display = "none";
  var pacolor = document.getElementById("distactive");
  pacolor.style.color = "black";
  var picolor = document.getElementById("distinactive");
  picolor.style.color = "white";
}
funtalukana(e){
  e.preventDefault();
  var showbody = document.getElementById("talukana");
  var hidebody = document.getElementById("talukautil");
  showbody.style.display = "block";
  hidebody.style.display = "none";
  var pacolor = document.getElementById("talukactive");
  pacolor.style.color = "black";
  var picolor = document.getElementById("talukinactive");
  picolor.style.color = "white";
}
funtalukautil(e){
  e.preventDefault();
  var showbody = document.getElementById("talukautil");
  var hidebody = document.getElementById("talukana");
  showbody.style.display = "block";
  hidebody.style.display = "none";
  var pacolor = document.getElementById("talukactive");
  pacolor.style.color = "white";
  var picolor = document.getElementById("talukinactive");
  picolor.style.color = "black";
}





// end of auto hide and show div section

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
                <NavItem eventKey={2} href="#pricing">
                  <span>Pricing</span>
                </NavItem>
                <NavItem eventKey={3} href="/login">
                  <span className="btn-login">Login</span>
                </NavItem>
                <NavItem eventKey={4} href="#">
                  <i className="fa fa-search search_tag"></i>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        {/* end of site navbar  */}

        {/* start of bodyintro section */}
        <div className="appbody">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-8 col-lg-8 village_body">
                <h1>Village Trekk</h1>
                <h4>
                  The Simplest Way To Manage Your Village Utilities.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                </h4>
                <div className="getstarted">
                <a href="#getstartedbody">
                 <button className="getstarted_btn"><span>Get Started Now >></span></button>
                </a>
              </div>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4"></div>
            </div>
          </div>
        </div>

        {/* end of bodyintro section */}

        {/* start village utilities section */}
        <div className="container">
          <div className="row">
            <div className="villageutil">
              <h3>Village Utilities</h3>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 village_img">
              <img src="image/village.png" alt="Banner"/>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="village_content">
                <p>
                Village Utilities the is best source of data collection for facilities that are said to deliver important primary services in the everyday lives of villagers, allowing them to shop for groceries, take their children to school, and engage in leisure activities and many more within the village.
                </p>
              </div>
              
            </div>
          </div>
        </div>
        {/* end of village utilities section */}

        {/* family body section */}
        <div className="family_body">
        <div className="container">
          <div className="row">
               <div className="family_heading">
                  <h3>Hierarchy of Family</h3>
               </div>
            <div className="col-sm-6 col-md-6 family_descp">
              <p>
                The application serves enumeration of the population and households in the country. Data collection and production of information is helpful for government ministries and local authorities, for budgeting purposes.Collection of socio-economic information on a large sample of people in the population, which makes it possible to acquire data and information on small, unique groups in the population and production of information which serves bodies, organizations and various other elements in the fields of education, the economy, business, research, etc.
              </p>
            </div>
            <div className="col-sm-6 col-md-6 family_image">
               <img src="image/familyvector.png" alt="Family"/>
            </div>
          </div>
        </div>
        </div>   
        {/* end of family body section */}  
      
        {/* start of features section */}
        <div className="site_features" id="features">
         <div className="container">
           <div className="row first_row">
              <div className="dashboard_heading">
                  <h3>Application Dashboard</h3>
              </div>
             <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="app_image">
                <img src="image/appdash.png" alt="Dashboard"/>
              </div>
             </div>
             <div className="col-sm-6 col-md-6 col-lg-6 app_body">
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
             <div className="col-sm-6 col-md-6 col-lg-6 app_body">
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
             <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="app_image">
                <img src="image/appdash.png" alt="Dashboard"/>
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
              <div className="resource_heading">
                  <h3>How do we serve you ?</h3>
               </div>
        <Carousel className="fooslider">
        {/* first slider item */}
          <Carousel.Item>
            <Carousel.Caption>
              <div className="row slider_body">
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 slider_image">
                    <img src="image/water.png" alt="Water droplet"/>
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

        {/* start of application pricing section */}
        <div className="app_price" id="pricing">
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <div className="pricing_heading">
                 <h3>
                 <i className="fa fa-usd">Pricing</i>
                 </h3>
                 <p>Choose a Plane that fits your business</p>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <div className="thumbnail price_card1">
                        <div className="thumb_head">
                          <h6>State </h6>
                        </div>
                        <hr/>
                        <div className="thubm_body" id="stateutil">
                            <h1>
                            $21.90
                            </h1>
                            <p>
                            It is a long established fact that a reader will be distracted by the readable content
                            </p>
                        </div>
                        <div className="thubm_body" id="stateana" style={{display:'none'}}>
                            <h1>
                            $25.90 
                            </h1>
                            <p>
                            It is a long established fact that a reader will be distracted by the readable content
                            </p>
                        </div>
                        <hr/>
                        <div className="thumb_foo">
                          <div className="row">
                            <div className="col-sm-6 village_util_btn">
                              <p id="stateactive" onClick={this.funstateutil.bind(this)}>State Utilities</p>
                            </div>
                            <div className="col-sm-6 village_analytics_btn">
                              <p id = "stateinactive" onClick={this.funstateana.bind(this)}>State Analytics</p>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <div className="thumbnail price_card2">
                        <div className="thumb_head">
                          <h6>District </h6>
                        </div>
                        <hr/>
                        <div className="thubm_body" id="distutil">
                            <h1>
                            $21.90
                            </h1>
                            <p>
                            It is a long established fact that a reader will be distracted by the readable content
                            </p>
                        </div>
                        <div className="thubm_body" id="distana" style={{display:'none'}}>
                            <h1>
                            $25.90
                            </h1>
                            <p>
                            It is a long established fact that a reader will be distracted by the readable content
                            </p>
                        </div>
                        <hr/>
                        <div className="thumb_foo">
                          <div className="row">
                            <div className="col-sm-6 village_util_btn">
                              <p id = "distactive" onClick={this.funDisUtil.bind(this)}>District Utilities</p>
                            </div>
                            <div className="col-sm-6 village_analytics_btn">
                              <p id = "distinactive" onClick={this.funDistana.bind(this)}>District Analytics</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <div className="thumbnail price_card3">
                        <div className="thumb_head">
                          <h6>Taluka </h6>
                        </div>
                        <hr/>
                        <div className="thubm_body" id="talukautil">
                            <h1>
                            $21.90
                            </h1>
                            <p>
                            It is a long established fact that a reader will be distracted by the readable content
                            </p>
                        </div>
                        <div className="thubm_body" id="talukana" style={{display:'none'}}>
                            <h1>
                            $25.90
                            </h1>
                            <p>
                            It is a long established fact that a reader will be distracted by the readable content
                            </p>
                        </div>
                        <hr/>
                        <div className="thumb_foo">
                          <div className="row">
                            <div className="col-sm-6 village_util_btn">
                              <p id="talukactive" onClick={this.funtalukautil.bind(this)}>Taluka Utilities</p>
                            </div>
                            <div className="col-sm-6 village_analytics_btn">
                              <p id="talukinactive" onClick={this.funtalukana.bind(this)}>Taluka Analytics</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
        {/* end of application pricing section */}


        {/* get started section */}
        <div className="getstartedbody" id="getstartedbody">
        <div className="container">
          <div className="getstarted_header">
            <h3>Village App is built for business of all sizes</h3>
            <p>
              Please fill in the following details to get started.
            </p>
          </div>
          <div className="row signupbody">
            <form>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control txtinput" 
                  placeholder="Name" 
                  required
                  maxlength ="30"
                  pattern="^[a-zA-Z][a-zA-Z- _\.]{1,30}$"
                  />
                </div>
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control txtinput" 
                  placeholder="Phone Number"
                  pattern="[7|8|9][0-9]{9}"
                  required
                  maxlength="10"
                  />
                </div>
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control txtinput" 
                  placeholder="Company Name"
                  maxlength ="30"
                  pattern="^[a-zA-Z][a-zA-Z- _\.]{1,30}$"
                  required
                  />
                </div> 
                <div className="form-group">
                  <select class="form-control txtinput" id="sel1" required>
                    <option value="">Select State</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Secunderabad">Secunderabad</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Jharkhand">Jharkhand</option> 
                  </select>
                </div>
                <div className="form-group">
                  <select class="form-control txtinput" id="sel2" required>
                    <option value="">Select District</option>
                    <option value="District1">District1</option>
                    <option value="District2">District2</option>
                    <option value="District3">District3</option>
                  </select>
                </div>
                <div className="form-group">
                  <input 
                  type="password" 
                  className="form-control txtinput" 
                  placeholder="Choose Password" 
                  maxLength="20" 
                  required
                  />
                </div>
              </div>
              
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control txtinput" 
                  placeholder="Designation"
                  maxlength ="30"
                  pattern="^[a-zA-Z][a-zA-Z- _\.]{1,30}$"
                  required
                  />
                </div>
                <div className="form-group">
                  <input 
                  type="email" 
                  className="form-control txtinput" 
                  placeholder="Email"
                  maxlength="30"
                  required
                  />
                </div>
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control txtinput" 
                  placeholder="Company Website"
                  maxlength="30"
                  required
                  />
                </div>
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control txtinput" 
                  placeholder="Your Industry"
                  maxlength ="30"
                  pattern="^[a-zA-Z][a-zA-Z- _\.]{1,30}$"
                  required
                  />
                </div>
                <div className="form-group">
                  <select class="form-control txtinput" id="sel3" required>
                    <option value="">Select Taluka</option>
                    <option value="Taluka1">Taluka1</option>
                    <option value="Taluka2">Taluka2</option>
                    <option value="Taluka3">Taluka3</option>
                  </select>
                </div>
                <div className="form-group">
                  <input 
                  type="password" 
                  className="form-control txtinput" 
                  placeholder="Confirm Password" 
                  maxLength="20" 
                  required
                  />
                </div>
              </div>
              <div className="row btn_panel">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <button className="getsignup_btn">Get Started</button>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
              </div>
            </form>
          </div>
        </div>  
        </div>
        {/* end of get started section */}

        {/* start of fotter section */}
        <div className="footer">
          <div className="container">
            <div className="row">
              <p>
              © 2018 Skymap Global. All rights reserved.
              </p>
            </div>
          </div>
        </div> 
        {/* end of footer section */}






        
      </div>
    );
  }
}

export default Homepage;