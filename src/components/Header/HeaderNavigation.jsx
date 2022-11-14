import { Link } from "react-router-dom";
import Logo from "../../../public/assets/icon/colored-logo.svg";
import hamburger from "../../../public/assets/icon/hamburger.svg";
import style from "./HeaderNavigation.module.css";
import Navigation from "./Navigation";

const HeaderNavigation = () => {
  return (
    <header className={style.headerContainer}>
      <Link to="/" className={style.home__link}>
        <img src={Logo} alt="" />
      </Link>

      <button className={style.mobileBtn}>
        <img src={hamburger} alt="" />
      </button>
      <Navigation />
      <button className={style.desktopBtn}>Connect wallet</button>
    </header>
  );
};

export default HeaderNavigation;
