import React from 'react'

import './Social.sass'

import facebookIcon from './../../images/icons/facebook.png';
import instagramIcon from './../../images/icons/instagram.png';
import twitterIcon from './../../images/icons/twitter.png';
import linkedinIcon from './../../images/icons/linkedin.png';

const Social = () => {
    return (
        <div className="Social">
            <a href="#facebook">
                <img src={facebookIcon} alt="Facebook link" />
            </a>
            <a href="#instagram">
                <img src={instagramIcon} alt="Instagram link" />
            </a>
            <a href="#twitter">
                <img src={twitterIcon} alt="Twitter link" />
            </a>
            <a href="#linkedin">
                <img src={linkedinIcon} alt="Linkdein link" />
            </a>
        </div>
    )
}

export default Social