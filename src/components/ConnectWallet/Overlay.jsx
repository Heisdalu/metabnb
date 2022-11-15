import { useContext } from "react";
import { UserContext } from "../../store/userProvider";
import style from "./Overlay.module.css";

const Overlay = () => {
  const userCtx = useContext(UserContext);
  console.log(userCtx);

  return <div className={`${style.overlay} ${style.hidden}`}></div>;
};

export default Overlay;
