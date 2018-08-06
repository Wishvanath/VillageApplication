import React, { Component } from 'react'
import './verify.css';
export default class Verify extends Component {
    render() {
        return (
            <div>
                <div className="verify_body">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2 col-md-2 col-lg-2"></div>
                            <div className="col-sm-8 col-md-8 col-lg-8 email_body">
                                <div className="email_icon">
                                    <img src="image/emailicon.png" alt="Email Icon"/>
                                </div>
                                <div className="email_descp">
                                    <h1>
                                    You have successfully register with Skymap Global.
                                    </h1>
                                    <p>
                                    A One Time Passcode hasbeen sent to your an email address.Please Enter the OTP below to verify your account.If you cannot see an email from "Skymap Admin" in your inbox, make sure to check your spam folder.
                                    </p>
                                </div>
                                <div className="email_form">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <input 
                                            type="password" 
                                            placeholder="Enter OTP" 
                                            className="form-control txtemail"
                                            maxLength="5"
                                            />
                                            <br/>
                                        </div>
                                        <div className="col-sm-4">
                                            <button className="btn-block  btn-verify">Verify</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2 col-md-2 col-lg-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
