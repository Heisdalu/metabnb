import style from "./Detail.module.css";
import NftList from "./NftList";
import NtfCard from "./NftCard";
import { images } from "../../data/HomeData";

const Detail = () => {
  return (
    <div className={style.detailMain}>
      <h1 className={style.detailHeader}>
        Inspiration for your next adventure
      </h1>
      <section className={style.detailList}>
        <NftList>
          {images.map((el, i) => (
            <NtfCard key={i} pic={el} />
          ))}
        </NftList>
      </section>
    </div>
  );
};

export default Detail;
