import './Footer.sass';

import Social from './../../components/Social/Social';
import logoBlue from './../../images/logos/logo_blue.png';

const Footer = ({ scrollRef }) => {
    return (
        <footer scroll-ref={scrollRef} className="Footer">
            <img className="Footer__Title" src={logoBlue} alt="Josiane Logo" />
            <div className="Footer__Content">
                <div className="Footer__Side Footer__Side-left">
                    <span>8 Rue Mitlon 75009 PARIS</span>
                    <span>Candidatures/Prod : work@josiane.fr</span>
                </div>
                
                <div className="Footer__Side Footer__Side-right">
                    <span>01 83 75 04 21</span>
                    <span>Brief/Rp : laurent@josiane.fr</span>
                </div>
            </div>
            <div className="Footer__Bottom">
                <Social />
            </div>

        </footer>
    )
};

export default Footer;