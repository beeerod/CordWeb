import React, { Component } from 'react';


export default class SignUpForm extends Component {
    constructor() {
        super()
        this.state = {
            term: 'Hello'
        }
    };

    render() {
        return (
            <div className="sign-up-section">
            <div className="sign-up-head">
                <h1 className="sign-up-head-text">Sign Up</h1>
            </div>
            <div className="sign-up-body">
                <ul className="sign-up-items">
                    <li><input type="text" name="enterFirstName" className="sign-up-field" placeholder="Enter Email"/></li>
                    <li><input type="text" name="enterEmail" className="sign-up-field" placeholder="Enter Email"/></li>
                    <li><input type="text" name="enterUsername" className="sign-up-field" placeholder="Enter Username"/></li>
                    <li><input type="text" name="enterPassword" className="sign-up-field" placeholder="Enter Password"/></li>
                    <li><input type="text" name="confirmPassword" className="sign-up-field" placeholder="Confirm Password"/></li>
                </ul>
                <div className="sign-up-button row2">
                    <p className="sign-up-text">Sign Up</p>
                </div>
            </div>
            </div>
        )
    };
}