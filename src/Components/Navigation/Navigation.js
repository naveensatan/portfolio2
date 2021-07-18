import React from 'react';
import { Link } from 'react-scroll';


const Navigation = () => ( 
    <nav> 
            <div className = "nav-links" >
                <ul >
                    <li > <Link to = "articles" smooth="true"> Articles </Link> </li> 
                    <li > <Link to = "about" smooth="true"> About </Link> </li>
                    <li > <Link to = "portfolio" smooth="true"> Portfolio </Link> </li>
                </ul> 
            </div> 
    </nav>
);

export default Navigation;