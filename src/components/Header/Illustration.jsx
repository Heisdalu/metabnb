import style from "./Illustration.module.css";
import headerGrid from "../../../public/assets/img/header-grid.png";
import headerGridWebp from "../../../public/assets/img/header-grid.png";

const Illustration = () => {
  return (
    <figure className={style.headerPicBox}>
      <picture>
        <source srcSet={headerGridWebp} type="image/webp" />
        <img
          src={headerGrid}
          width="300px"
          height="350px"
          style={{ width: "100%", height: "auto" }}
          alt="nft images"
        />
      </picture>
    </figure>
  );
};

export default Illustration;
