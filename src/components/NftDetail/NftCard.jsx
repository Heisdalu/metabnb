import style from "./NftCard.module.css";
import Star from "./Star";

const NtfCard = ({ pic }) => {
  return (
    <div className={style.nftCard}>
      <figure className={style.nftPic}>
        <img src={pic} alt="desert king" />
      </figure>
      <div className={style.nftDetail}>
        <h1 className={style.title}>Desert king</h1>
        <p className={style.rate}>1MBT per night</p>
        <address className={style.address}>2345km away</address>
        <time className={style.time}>available for 2weeks stay</time>
        <div className={style.rating}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    </div>
  );
};

export default NtfCard;
