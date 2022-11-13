import style from "./Footer.module.css";
import logo from "../../../public/assets/icon/white-logo.svg";
import instagram from "../../../public/assets/icon/instagram.svg";
import twitter from "../../../public/assets/icon/twitter.svg";
import fb from "../../../public/assets/icon/fb.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <a href="" className={style.homeLink}>
        <img src={logo} alt="" />
      </a>

      <div className={style.communityLink}>
        <h1 className={style.title}>Community</h1>
        <nav className={style.footerMainLink}>
          <a href="">NFT</a>
          <a href="">Tokens</a>
          <a href="">Landlords</a>
          <a href="">Discord</a>
        </nav>
      </div>

      <div className={style.placeLink}>
        <h1 className={style.title}>Places</h1>
        <nav className={style.footerMainLink}>
          <a href="">Castle</a>
          <a href="">Farms</a>
          <a href="">Beach</a>
          <a href="">Learn more</a>
        </nav>
      </div>

      <div className={style.aboutLink}>
        <h1 className={style.title}>About us</h1>
        <nav className={style.footerMainLink}>
          <a href="">Road map</a>
          <a href="">Creators</a>
          <a href="">Career</a>
          <a href="">Contact us</a>
        </nav>
      </div>

      <div className={style.socialMedia}>
        <a href="">
          <img src={fb} alt="facebook" />
        </a>
        <a href="">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="">
          <img src={twitter} alt="twitter" />
        </a>
      </div>

      <div className={style.copyright}>
        <span>&copy;</span> 2022 Metabnb
      </div>
    </footer>
  );
};

export default Footer;
