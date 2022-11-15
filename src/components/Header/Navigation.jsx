import { useContext } from "react";
import { Link } from "react-router-dom";
import exitIcon from "../../../public/assets/icon/exit.svg";
import { UserContext } from "../../store/userProvider";
import style from "./Navigation.module.css";

const Navigation = ({ activateBtn, toggleFunc }) => {
  const { toggle } = useContext(UserContext);

  const change = () => {
    toggle();
  };

  const exitHamburger = () => {
    toggleFunc();
  };

  return (
    <nav
      className={`${style.navigation} ${
        activateBtn && style.defaultNavigation
      }`}
    >
      <button className={style.exitBtn} onClick={exitHamburger}>
        <img src={exitIcon} alt="" />
      </button>
      <div className={style.navigationBox}>
        <Link to="/" className={style.navlink}>
          Home
        </Link>
        <Link to="/place-to-stay" className={style.navlink}>
          Place to stay
        </Link>
        <a href="" className={style.navlink}>
          NFTs
        </a>
        <a href="" className={style.navlink}>
          Community
        </a>
      </div>
      <button className={style.navBtn} onClick={change}>
        Connect wallet
      </button>
    </nav>
  );
};

export default Navigation;
