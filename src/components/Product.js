import "../styles/Product.css";
import productArrow from "../res/mgArrow.png";

const Product = ({ id, picture, product_name, price }) => {
  return (
    <div className="product">
      <div className="product__img">
        <img src={picture} alt="" />
      </div>
      <div className="product__bottom">
        <div className="product__bottom__container">
          <p>Voir détails</p>
          <img src={productArrow} alt="" />
        </div>
      </div>
      <div className="product__detail">
        <p className="product__title">{product_name}</p>
        <p className="product__price">{price}</p>
      </div>
      <button hidden={id === 1 || id === 5 ? false : true}>SUR COMMANDE</button>
    </div>
  );
};

export default Product;
