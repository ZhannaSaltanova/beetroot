import React, { useState } from 'react';
import FormSignIn from '../formSignIn/FormSignIn';  // Путь к вашему компоненту SignIn
import FormSignUp from '../formSignUp/FormSignUp';

function AuthContainer() {
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [showSignInForm, setShowSignInForm] = useState(false);

    const handleSignUpClick = () => {
        setShowSignUpForm(true);
        setShowSignInForm(false);
    };

    const handleCloseSignUpForm = () => {
        setShowSignUpForm(false);
    };

    const handleSignInClick = () => {
        setShowSignInForm(true);
        setShowSignUpForm(false);
    };

    const handleCloseSignInForm = () => {
        setShowSignInForm(false);
    };

    const handleSignUpSubmit = (values) => {
        console.log('Sign up:', values);
        handleCloseSignUpForm();
    };

    const handleSignInSubmit = (values) => {
        console.log('Sign in:', values);
        handleCloseSignInForm();
    };

    return (
        <div>
            <button onClick={handleSignUpClick}>SIGN UP</button>
            <button onClick={handleSignInClick}>SIGN IN</button>

            {showSignUpForm && <FormSignUp onSubmit={handleSignUpSubmit} onClose={handleCloseSignUpForm} />}
            {showSignInForm && <FormSignIn onSubmit={handleSignInSubmit} onClose={handleCloseSignInForm} />}
        </div>
    );
}

export default AuthContainer;
