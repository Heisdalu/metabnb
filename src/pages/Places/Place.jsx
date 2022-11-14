import HeaderNavigation from "../../components/Header/HeaderNavigation";
import PlaceList from "../../components/PlaceList/PlaceList";
import { dataImages } from "../../data/data";
import NftList from "../../components/NftDetail/NftList";
import NtfCard from "../../components/NftDetail/NftCard";
import Footer from "../../components/Footer/Footer";
import style from "./Place.module.css";

const Place = () => {
  return (
    <div className={style.placeContainer}>
      <div className={style.header}>
        <HeaderNavigation />
      </div>

      <PlaceList />

      <div className={style.nftGallery}>
        <NftList>
          {dataImages.map((el, i) => (
            <NtfCard key={i} pic={el} />
          ))}
        </NftList>
      </div>

      <Footer />
    </div>
  );
};

export default Place;
