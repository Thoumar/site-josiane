import './Footer.sass';

import Social from './../../components/Social/Social'

const Footer = ({ scrollRef }) => {
    return (
        <footer scroll-ref={scrollRef} className="Footer">
            <h2 className="Footer__Title">Josiane</h2>
            <div className="Footer__Side Footer__Side-left">
                <span>8 Rue Mitlon 75009 PARIS</span>
                <span>Candidatures/Prod : work@josiane.fr</span>
            </div>
            
            <div className="Footer__Side Footer__Side-right">
                <span>01 83 75 04 21</span>
                <span>Brief/Rp : laurent@josiane.fr</span>
            </div>
            
            <div className="Footer__Bottom">
                <Social />
            </div>

        </footer>
    )
};

export default Footer;