import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/assets/icon/colored-logo.svg";
import hamburger from "../../../public/assets/icon/hamburger.svg";
import { UserContext } from "../../store/userProvider";
import style from "./HeaderNavigation.module.css";
import Navigation from "./Navigation";

const HeaderNavigation = () => {
  const { toggle } = useContext(UserContext);
  const activate = () => {
    console.log("kdkdk");
    toggle();
  };

  const moveLeft = () => {

  }
  
  return (
    <header className={style.headerContainer}>
      <Link to="/" className={style.home__link}>
        <img src={Logo} alt="" />
      </Link>

      <button className={style.mobileBtn} onClick={moveLeft}>
        <img src={hamburger} alt="" />
      </button>
      <Navigation />
      <button className={style.desktopBtn} onClick={activate}>
        Connect wallet
      </button>
    </header>
  );
};

export default HeaderNavigation;
