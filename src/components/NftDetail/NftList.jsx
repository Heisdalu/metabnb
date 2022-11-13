import style from "./NftList.module.css";

const NftList = ({ children }) => {
  return <section className={style.nftList}>{children}</section>;
};

export default NftList;
