import style from "./Header.module.css";
import HeaderNavigation from "./HeaderNavigation";
import Illustration from "./Illustration";
import mbTokenPic from "../../../public/assets/icon/mb-token.svg";
import metamask from "../../../public/assets/icon/metamask.svg";
import opensea from "../../../public/assets/icon/opensea.svg";

const Header = () => {
  return (
    <div className={style.headerMain}>
      <HeaderNavigation />
      <div className={style.mainHeader}>
        <section className={style.headerContent}>
          <h1 className={style.headerTitle}>
            <span className={style.outerSpan}>
              Rent a <span className={style.innerSpan}>Place</span> away from
            </span>
            <span className={style.outerSpan}>
              <span className={style.innerSpan}>Home</span> in the{" "}
              <span className={style.innerSpan}>Metaverse</span>
            </span>
          </h1>
          <p className={style.headerText}>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <div className={style.searchBar}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for location"
              autoComplete="off"
              className={style.search}
            />
            <button className={style.searchBtn}>Search</button>
          </div>
        </section>
        <Illustration />
      </div>
      <div className={style.sponsor}>
        <img src={mbTokenPic} alt="" />
        <img src={metamask} alt="" />
        <img src={opensea} alt="" />
      </div>
    </div>
  );
};

export default Header;
