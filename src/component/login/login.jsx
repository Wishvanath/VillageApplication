import React, { Component } from 'react'
import './login.css';
export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="login_body">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-4"></div>
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <div className="loginimage">
                                    <img src="image/userlogin.png" alt="User"/>
                                </div>
                                <div className="loginform">
                                    <form>
                                    <div className="form-group">
                                        <input 
                                        type="email" 
                                        placeholder="Email" 
                                        className="form-control txtlogin"
                                        required
                                        maxlength ="30"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        type="password" 
                                        placeholder="Password" 
                                        className="form-control txtlogin"
                                        required
                                        maxlength ="20"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-warning btn-block btn_login">Login</button>
                                    </div>
                                    <div className="sign_para">
                                        <span>
                                            <h3>Don't have an Account..?&nbsp;&nbsp;<a className="signupref" href="http://localhost:3000/#getstartedbody">Signup</a></h3>
                                        </span>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
