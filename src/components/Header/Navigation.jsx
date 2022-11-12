import exitIcon from "../../../public/assets/icon/exit.svg";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <button className={style.exitBtn}>
        <img src={exitIcon} alt="" />
      </button>
      <div className={style.navigationBox}>
        <a href="" className={style.navlink}>
          Home
        </a>
        <a href="" className={style.navlink}>
          Place to stay
        </a>
        <a href="" className={style.navlink}>
          NFTs
        </a>
        <a href="" className={style.navlink}>
          Community
        </a>
      </div>
      <button className={style.navBtn}>Connect wallet</button>
    </nav>
  );
};

export default Navigation;
