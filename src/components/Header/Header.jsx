import Logo from "../../../public/assets/icon/colored-logo.svg";
import hamburger from "../../../public/assets/icon/hamburger.svg";
import style from "./Header.module.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className={style.headerContainer}>
      <a href="" className={style.home__link}>
        <img src={Logo} alt="" />
      </a>

      <button className={style.mobileBtn}>
        <img src={hamburger} alt="" />
      </button>
      <Navigation />
      <button className={style.desktopBtn}>Connect wallet</button>
    </header>
  );
};

export default Header;
