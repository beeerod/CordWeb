import React, { Component } from 'react';
import SignUpForm from './signUpForm';
import Header from './header';
import SignUpInfo from './signUpInfo';


export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            term: 'Hello'
        }
    };

    render() {
        return (
            <div class="row2">
            <Header />
            <section id="content-area">
            <SignUpForm />
            <SignUpInfo />
            </section>
            </div>
        )
    };
}