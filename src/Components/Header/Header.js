import React from 'react';
import {Link} from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Social from '../Social/Social';

import Logo from '../../logo_transparent.png';


const Header = () => (
    <div className="header">
        <Link to="/"><img src={Logo} alt="logo" className="logo"/></Link>
        <Navigation/>
        <Social/>
    </div>
);

export default Header