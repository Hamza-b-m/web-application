import { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import logo from "../res/logo.jpg";
import searchIcon from "../res/search.png";
import locationMarker from "../res/location-map-marker.png";
import fence1 from "../res/fence1.png";
import {
  IconButton,
  SwipeableDrawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Collapse,
  MenuItem,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import Contact from "./Contact";

const Header = () => {
  const [openList, setOpenList] = useState(false);
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState(false);

  const toggleDrawer = (e) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenList(e);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <div className="header__top">
        <div className="wrapper">
          <div className="left__menu">
            {contact && <Contact setContact={setContact} />}

            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="left"
              open={openList}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <List>
                <ListItem button>
                  <ListItemText primary="Notre magasin" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Configurateur" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Accueil" />
                </ListItem>
                <ListItem button onClick={handleClick}>
                  <ListItemText primary="Boutique" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List>
                    <ListItem button>
                      <ListItemText primary="Lame commposite" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Lame en bois" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Panneau bois" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Grille rigide" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Gabion" />
                    </ListItem>
                  </List>
                </Collapse>
                <ListItem button>
                  <ListItemText primary="Nos réalisations" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    toggleDrawer(false);
                    setContact(true);
                  }}
                >
                  <ListItemText primary="Contactez-nous" />
                </ListItem>
              </List>
            </SwipeableDrawer>
          </div>
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__search">
            <div>
              <div className="search__left">
                <img src={searchIcon} alt="Search" />
                <input type="text" placeholder="Rechercher" />
              </div>
              <div className="search__right">
                <img src={searchIcon} alt="Search" />
              </div>
            </div>
          </div>
          <div className="header__magasin">
            <div>
              <div className="magasin__left">
                <img src={locationMarker} alt="Location" />
                <p>Notre magasin</p>
              </div>
              <div className="magasin__right">
                <img src={locationMarker} alt="Location" />
              </div>
            </div>
          </div>
          <div className="header__configurateur">
            <div>
              <div className="configurateur__left">
                <img src={fence1} alt="Configurateur" />
                <p>Configurateur</p>
              </div>
              <div className="configurateur__right">
                <img src={fence1} alt="Configurateur" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="header__bottom">
        <ul className="wrapper">
          <li>Accueil</li>
          <li className="boutique">
            <div className="boutique__container">
              <ul>
                <li>Lame commposite</li>
                <Link to="/boutique">
                  <li>Lame en bois</li>
                </Link>
                <li>Panneau bois</li>
                <li>Grille rigide</li>
                <li>Gabion</li>
              </ul>
              <div>Boutique</div>
            </div>
          </li>
          <li>Nos Réalisations</li>
          <li className="contacter">
            <form onSubmit={handleSubmit}>
              <h1>Coordonnées & Map</h1>
              <p>
                Hey! Pour toute informations ou suggestions, <br /> Merci de
                remplir le formulaire suivant
              </p>
              <input type="text" placeholder="Nom & Prènom" />
              <input type="email" placeholder="E-mail" />
              <label htmlFor="contactMessage">Message</label>
              <textarea id="contactMessage" cols="30" rows="10" />
              <div>
                <span>Contacter-nous</span>
                <span>ENVOYEZ</span>
              </div>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
