import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeaderNavigation from "../../components/Header/HeaderNavigation";
import PlaceList from "../../components/PlaceList/PlaceList";
import style from "./Place.module.css";

const Place = () => {
  return (
    <div className={style.placeContainer}>
      <div className={style.header}>
        <HeaderNavigation />
      </div>

      <PlaceList />
    </div>
  );
};

export default Place;
