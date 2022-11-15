import style from "./Connect.module.css";
import { ExitWallet, RightArrow } from "./ExitWallet";
import metamaskLogo from "../../../public/assets/img/metamaskpic.png";
import walletConnect from "../../../public/assets/img/walletConnect.png";
import { useContext } from "react";
import { UserContext } from "../../store/userProvider";
import Overlay from "./Overlay";

const Connect = () => {
  const { active, toggle } = useContext(UserContext);

  const exitFunc = () => {
    toggle();
  };

  return (
    <div className={`${style.mainHeader} ${active && style.hidden}`}>
      <Overlay />
      <div className={style.connectMain}>
        <div className={style.header}>
          <h1 className={style.title}>Connect Wallet</h1>
          <span className={style.exitWallet} onClick={exitFunc}>
            <ExitWallet />
          </span>
        </div>

        <div className={style.walletMain}>
          <h3 className={style.text}>Choose your preferred wallet:</h3>

          <div className={style.walletType}>
            <div className={style.wallet}>
              <span className={style.walletHeader}>
                <img src={metamaskLogo} alt="" />
                <h1 className={style.walletDomain}>Metamask</h1>
              </span>

              <span className={style.rightArrow}>
                <RightArrow />
              </span>
            </div>

            <div className={style.wallet}>
              <span className={style.walletHeader}>
                <img src={walletConnect} alt="" />
                <h1 className={style.walletDomain}>WalletConnect</h1>
              </span>

              <span className={style.rightArrow}>
                <RightArrow />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
