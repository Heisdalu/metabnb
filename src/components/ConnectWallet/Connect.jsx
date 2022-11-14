import style from "./Connect.module.css";
import { ExitWallet, RightArrow } from "./ExitWallet";
import metamaskLogo from "../../../public/assets/img/metamaskpic.png";
import walletConnect from "../../../public/assets/img/walletConnect.png";

const Connect = () => {
  return (
    <div className={style.overlay}>
      <div className={style.connectMain}>
        <div className={style.header}>
          <h1 className={style.title}>Connect Wallet</h1>
          <span className={style.exitWallet}>
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
