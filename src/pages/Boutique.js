import "../styles/Boutique.css";
import Product from "../components/Product";
import back from "../res/back.png";
import toolbox from "../res/toolbox.png";
import toolboxArrow from "../res/toolboxArrow.png";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction } from "../actions/productActions";
import { useEffect } from "react";

const Boutique = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAction());
  }, []);

  const productReducer = useSelector((state) => state.productReducer);

  return (
    <>
      <div className="boutique__banner">
        <div className="banner__detail wrapper">
          <h1>Nos Produits</h1>
          <div>
            <p>Accueil</p>
            <img src={back} alt="" />
            <p>Boutique</p>
          </div>
        </div>
      </div>
      <div className="boutique__body">
        <div className="boutique__middle">
          <div className="boutique__middle__left">
            <div className="categories">
              <h1>CATÉGORIES</h1>
              <ul>
                <li>
                  <div>Lame Bois</div> <img src={back} alt="" />
                </li>
                <li>Lame Composite</li>
                <li>Panneau Bois</li>
                <li>Grille Rigide</li>
                <li>Gabion</li>
              </ul>
            </div>

            <div className="under__categories">
              <img src={toolbox} alt="" />
              <h2>Configurez votre espace</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidu.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42.09"
                height="62.734"
                viewBox="0 0 42.09 62.734"
              >
                <g transform="translate(-122.347 -60.728)">
                  <path
                    className="a"
                    d="M223.7,23.548V12.186H181.611V23.548Z"
                    transform="translate(-59.264 48.542)"
                  />
                  <path
                    className="a"
                    d="M223.7,59.515H193.773V44.631H223.7V33.909h-42.09V70.877H223.7Z"
                    transform="translate(-59.264 52.585)"
                  />
                </g>
              </svg>
              <img src={toolboxArrow} alt="" />
            </div>
          </div>

          <div className="boutique__middle__right">
            <div className="choix">
              <p>Nouveautés</p>
              <p>Populaire</p>
              <p>Meilleures Ventes</p>
            </div>

            <div className="product__container">
              {productReducer.productTable.length !== 0 &&
                productReducer.productTable.map((el) => (
                  <Product
                    key={el.id}
                    id={el.id}
                    picture={el.picture}
                    product_name={el.product_name}
                    price={el.price}
                  />
                ))}
            </div>

            <div className="afficher">Afficher plus</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Boutique;
