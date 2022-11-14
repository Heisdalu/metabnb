import style from "./PlaceList.module.css";
import locationPic from "../../../public/assets/icon/location.svg";

const PlaceList = () => {
  return (
    <ul className={style.nftList}>
      <li>Resturant</li>
      <li>Cottage</li>
      <li>Castle</li>
      <li>fantast city</li>
      <li>beach</li>
      <li>Carbins</li>
      <li>Off-grid</li>
      <li className={style.location}>
        <span className={style.locationTitle}>Location</span>
        <span className={style.locationImg}>
          <img src={locationPic} alt="" />
        </span>
      </li>
    </ul>
  );
};

export default PlaceList;
