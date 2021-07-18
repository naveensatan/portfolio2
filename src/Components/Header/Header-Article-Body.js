import React from 'react';
import {Link} from 'react-router-dom';

import Social from '../Social/Social';

import Logo from '../../logo_transparent.png';


const HeaderArticle = () => (
    <div className="header-article">
        <Link to="/"><img src={Logo} alt="logo" className="logo"/></Link>
        <Social/>
    </div>
);

export default HeaderArticle