import Header from "../../components/Header/Header";
import Detail from "../../components/NftDetail/Detail";
import NftGift from "../../components/NftGift/NftGift";
import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <Detail />
      <NftGift />
    </div>
  );
};

export default HomePage;
