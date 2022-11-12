import style from "./Illustration.module.css";
import headerGrid from "../../../public/assets/img/header-grid.png";
import headerGridWebp from "../../../public/assets/img/header-grid.png";

const Illustration = () => {
  return (
    <figure className={style.headerPicBox}>
      <picture>
        <source srcset={headerGridWebp} type="image/webp" />
        <img src={headerGrid} alt="" />
      </picture>
    </figure>
  );
};

export default Illustration;
