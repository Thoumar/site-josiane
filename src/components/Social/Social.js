import React from 'react'

import './Social.sass'

import facebookIcon from './../../images/icons/facebook.png';
import instagramIcon from './../../images/icons/instagram.png';
import twitterIcon from './../../images/icons/twitter.png';
import linkedinIcon from './../../images/icons/linkedin.png';

const Social = () => {
    return (
        <div className="Social">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/agencejosiane">
                <img src={facebookIcon} alt="Facebook link" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/followjosiane/?hl=fr">
                <img src={instagramIcon} alt="Instagram link" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/FollowJosiane">
                <img src={twitterIcon} alt="Twitter link" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/5286351/">
                <img src={linkedinIcon} alt="Linkdein link" />
            </a>
        </div>
    )
}

export default Social