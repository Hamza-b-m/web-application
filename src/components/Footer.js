import "../styles/Footer.css";
import logo from "../res/logo.jpg";
import time from "../res/time.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__line"></div>
      <div className="footer__container">
        <div className="footer__detail">
          <div className="footer__logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer__lien">
            <h1>Lien Utiles</h1>
            <ul>
              <li>Configurateur</li>
              <li>Notre magasin</li>
              <li>Notice et installation</li>
              <li>Livraison Transport</li>
            </ul>
          </div>
          <div className="footer__contacter">
            <h1>Nous contacter</h1>
            <ul>
              <li className="list__color__footer">Adress :</li>
              <li>
                3 rue du champ de verger <br /> Allonnes, Pays de la Loire,
                <br /> France
              </li>
              <li className="list__color__footer">Telephone :</li>
              <li>+33 2 43 57 00 87</li>
            </ul>
          </div>
          <div className="footer__horaires">
            <h1>Horaires</h1>
            <ul>
              <li className="list__color__footer">Lundi a Vendredi</li>
              <li>
                <img src={time} alt="" />
                <p>7:30 -12:00</p>
              </li>
              <li>
                <img src={time} alt="" />
                <p>13:30 -18:00</p>
              </li>
              <li>
                Samedi <br />
                <span> ( Fermé les samedis de janvier et février)</span>
              </li>
              <li>
                <img src={time} alt="" />
                <p>9:00 -12:00</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
