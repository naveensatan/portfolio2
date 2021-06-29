import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

const Social = () => (
    <div className="social-container">
        <div className="social-facebook-container">
            <a href="https://www.facebook.com/kasunjith.satanarachchi" className="social-facebook" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
        </div>
        <div className="social-twitter-container">
            <a href="https://twitter.com/KasunGeemitha" className="social-facebook" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
        </div>
        <div className="social-linkedin-container">
            <a href="https://www.linkedin.com/in/kasunjith-satanarachchi-15a059bb/" className="social-facebook" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
    </div>

);

export default Social