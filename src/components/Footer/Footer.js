import './Footer.sass';

import Social from './../../components/Social/Social';
import logoBlue from './../../images/logos/logo_blue.svg';

const Footer = ({ scrollRef }) => {
    return (
        <footer scroll-ref={scrollRef} className="Footer">
            <img
                className="Footer__Title"
                src={logoBlue}
                onClick={() => document.documentElement.scrollTop = 0}
                alt="Josiane Logo" />
                
            <div className="Footer__Content">
                <div className="Footer__Side Footer__Side-left">
                    <span>8 Rue Mitlon 75009 PARIS</span>
                    <span>Candidatures/Prod : work@josiane.fr</span>
                </div>
                
                <div className="Footer__Side Footer__Side-right">
                    <span>06 76 53 87 71</span>
                    <span>Brief/RP : laurent@josiane.fr</span>
                </div>
            </div>
            <div className="Footer__Bottom">
                <Social />
            </div>

        </footer>
    )
};

export default Footer;