import style from "./NftGift.module.css";
import nftGiftPic from "../../../public/assets/img/nftgift.png";

const NftGift = () => {
  return (
    <div className={style.giftMain}>
      <header className={style.headerMain}>
        <h1 className={style.title}>Metabnb NFTs</h1>
        <p className={style.text}>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>

        <button className={style.submit}>Learn more</button>
      </header>

      <figure className={style.imageBox}>
        <img src={nftGiftPic} alt="house nfts" />
      </figure>
    </div>
  );
};

export default NftGift;
