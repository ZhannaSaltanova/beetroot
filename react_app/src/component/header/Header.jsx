import logo from "../../assets/img/logo.png";
import '../../assets/style/style.scss';
import MainMenu from "../mainMenu/MainMenu";
import { Link } from "react-router-dom";
import FormSignUp from "../formSignUp/FormSignUp";
import FormSignIn from "../formSignIn/FormSignIn";
import React, { useState } from 'react';


let isActive = false;
const links = {
    class: 'main-menu',
    link: [
        {
            link:'HOME',
            path: '/home',
        },
        {
            link:'COMICS',
            path: '/comics',
        },
        {
            link:'CHARACTERS',
            path: '/characters',
        },
        {
            link:'STORIES',
            path: '/stories',
        },
    ],
}

function Header() {
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [showSignInForm, setShowSignInForm] = useState(false);
    const [users, setUsers] = useState([]);

    const handleSignUp = (newUser) => {
        setUsers([...users, newUser]);
    };

    const handleSignIn = (userData) => {
        console.log('Handling sign in:', userData);
    };
    const handleSignUpClick = () => {
        setShowSignUpForm(!showSignUpForm);
    };

    const handleCloseSignUpForm = () => {
        setShowSignUpForm(false);
    };

    const handleSignInClick = () => {
        setShowSignInForm(!showSignInForm);
    };

    const handleCloseSignInForm = () => {
        setShowSignInForm(false);
    };

    const [isActive, setActive] = useState(false);

    function burgerMenu(){
        setActive(!isActive);
    }

    return (
        <header>
            <div className='header'>
                <div className="logo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className={isActive ? 'main-menu active' : 'main-menu'}>
                    <MainMenu links={links.link}/>
                </div>
                <div className="btn">
                    <button onClick={handleSignUpClick}>SIGN UP</button>
                    <button onClick={handleSignInClick}>SIGN IN</button>
                </div>
                <div
                    className={isActive ? 'burger active' : 'burger'}
                    onClick={burgerMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {showSignUpForm && <FormSignUp onClose={handleCloseSignUpForm} onSignUp={handleSignUp} />}
            {showSignInForm && <FormSignIn onClose={handleCloseSignInForm} onSignIn={handleSignIn} users={users} />}
        </header>
    );
}

export default Header;