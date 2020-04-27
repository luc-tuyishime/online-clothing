import React, { Component } from 'react';

import FormInput from '../common/form-input/form-input.component';
import CustomButton from '../common/custom-button/custom-button.component';

import { ReactComponent as LOGIN_WITH_GOOGLE } from '../../assets/brands-and-logotypes.svg';
import { signInWithGoogle } from '../../firebase/firebase.utils';


import './sign-in.styles.scss';

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label="password"
                        required
                    />
                    <CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
                    <LOGIN_WITH_GOOGLE className="login-google-style" onClick={signInWithGoogle} />
                </form>
            </div>
        )
    }
}

export default SignIn;