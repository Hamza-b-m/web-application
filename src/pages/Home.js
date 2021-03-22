import "../styles/Home.css";
import banner from "../res/banner.png";
import img0 from "../res/img-0.png";
import img1 from "../res/img-1.png";
import img2 from "../res/img-2.png";
import img3 from "../res/img-3.png";
import img4 from "../res/img-4.png";
import espacebg from "../res/espace-bg.png";
import fence from "../res/fence2.png";
import espaceArrow from "../res/espace-arrow.png";
import Esymbole from "../res/E.png";
import realisationImg from "../res/realisation-img.png";
import realisationArrowLeft from "../res/realisation-arrow-left.png";
import realisationArrowRight from "../res/realisation-arrow-right.png";
import noticeArrow from "../res/noticeArrow.png";
import notice1 from "../res/notice1.png";
import notice2 from "../res/notice2.png";
import notice3 from "../res/notice3.png";
import notice4 from "../res/notice4.png";
import notice5 from "../res/notice5.png";
import magasinImage from "../res/magasinImage.png";
import magasinDetail from "../res/magasinDetail.png";
import mgArrow from "../res/mgArrow.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home__top">
        <div className="banner">
          <img src={banner} alt="Banner" width="inherit" />
        </div>

        <div className="boutique__items">
          <div className="container">
            <div className="container__img">
              <img src={img0} alt="" />
            </div>
            <div className="container__detail">
              Lame <br />
              commposite
            </div>
          </div>
          <div className="container">
            <div className="container__img">
              <img src={img1} alt="" />
            </div>
            <div className="container__detail">
              Lame <br /> en bois
            </div>
          </div>
          <div className="container">
            <div className="container__img">
              <img src={img2} alt="" />
            </div>
            <div className="container__detail">
              Panneau <br /> bois
            </div>
          </div>
          <div className="container">
            <div className="container__img">
              <img src={img3} alt="" />
            </div>
            <div className="container__detail">
              Grille <br /> rigide
            </div>
          </div>
          <div className="container">
            <div className="container__img">
              <img src={img4} alt="" />
            </div>
            <div className="container__detail">Gabion</div>
          </div>
        </div>
      </div>

      <div className="home__body">
        <div className="configurez__espace wrapper">
          <div className="espace__bottom">
            <img src={espacebg} alt="" />
          </div>
          <div className="espace__middle"></div>
          <div className="espace__top">
            <div className="espace__img">
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
            </div>
            <div className="espace__icon">
              <img src={fence} alt="" />
            </div>
            <div className="espace__detail">
              <h1>Configurez votre espace</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidu.
              </p>
            </div>
            <div className="espace__arrow">
              <img src={espaceArrow} alt="" />
            </div>
          </div>
        </div>

        <div className="realisation wrapper">
          <div className="realisation__left">
            <h1>Nos realisations</h1>
            <div className="realisation__box">
              <h2>Panneau bois</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasdundefined
              </p>
            </div>
            <div className="boxBottom__left">
              <img src={realisationArrowLeft} alt="" />
              <div className="realisation__pagination">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="boxBottom__right">
              <img src={realisationArrowRight} alt="" />
            </div>
          </div>
          <div className="realisation__right">
            <div>
              <img src={realisationImg} alt="" />
            </div>
            <div>
              <img src={Esymbole} alt="" />
            </div>
          </div>
        </div>

        <div className="notice">
          <div className="notice__1">
            <div></div>
            <div>
              <h1>
                Notice <br /> & Installation
              </h1>
              <p>
                Avant de commencer, calculez la quantité de bois, de béton et de
                quincaillerie dont vous aurez besoin.
              </p>
              <div>
                <p>EN SAVOIR PLUS</p>
                <img src={noticeArrow} alt="" />
              </div>
            </div>
          </div>
          <div className="notice__2">
            <div className="noticeImage__bottom">
              <img src={notice1} alt="" />
            </div>
            <div className="noticeImage__top">
              <img src={Esymbole} alt="" />
            </div>
          </div>
          <div className="notice__2">
            <div className="noticeImage__bottom">
              <img src={notice2} alt="" />
            </div>
            <div className="noticeImage__top">
              <img src={Esymbole} alt="" />
            </div>
          </div>
          <div className="notice__2">
            <div className="noticeImage__bottom">
              <img src={notice3} alt="" />
            </div>
            <div className="noticeImage__top">
              <img src={Esymbole} alt="" />
            </div>
          </div>
          <div className="notice__2">
            <div className="noticeImage__bottom">
              <img src={notice4} alt="" />
            </div>
            <div className="noticeImage__top">
              <img src={Esymbole} alt="" />
            </div>
          </div>
          <div className="notice__2">
            <div className="noticeImage__bottom">
              <img src={notice5} alt="" />
            </div>
            <div className="noticeImage__top">
              <img src={Esymbole} alt="" />
            </div>
          </div>
        </div>

        <div className="mg wrapper">
          <div className="mg__left">
            <div>
              <img src={magasinImage} alt="" />
            </div>
            <div>
              <img src={Esymbole} alt="" />
            </div>
          </div>
          <div className="mg__right">
            <div className="mg__box">
              <h1>Notre magasin</h1>
              <div className="mg__detail">
                <div className="mg__top">
                  <img src={magasinDetail} alt="" />
                </div>
                <div className="mg__after__top"></div>
                <div className="mg__middle">
                  <p>
                    Dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
                <div className="mg__bottom">
                  <p>EN SAVOIR PLUS</p>
                  <img src={mgArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
