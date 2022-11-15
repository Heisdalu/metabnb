import { useContext } from "react";
import { UserContext } from "../../store/userProvider";
import style from "./Overlay.module.css";

const Overlay = () => {
  const { toggle } = useContext(UserContext);

  const toggleFunc = () => {
    toggle();
  };

  return (
    <div
      className={`${style.overlay} ${style.hidden}`}
      onClick={toggleFunc}
    ></div>
  );
};

export default Overlay;
