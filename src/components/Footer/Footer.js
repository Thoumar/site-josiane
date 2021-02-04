import './Footer.sass';

const Footer = () => {
    return (
        <footer className="Footer">
            <h2 className="Footer__Footer">Josiane</h2>
            <div className="Footer__Side-left">
                <span>8 Rue Mitlon 75009 PARIS</span>
                <span>Candidatures/Prod : work@josiane.fr</span>
            </div>
            
            <div className="Footer__Side-right">
                <span>8 Rue Mitlon 75009 PARIS</span>
                <span>Candidatures/Prod : work@josiane.fr</span>
            </div>
            
            <div className="Footer__Side-right">
                <a href=""><img src={""} alt={""} /></a>
                <a href=""><img src={""} alt={""} /></a>
                <a href=""><img src={""} alt={""} /></a>
                <a href=""><img src={""} alt={""} /></a>
            </div>
        </footer>
    )
};

export default Footer;