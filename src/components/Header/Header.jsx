import style from "./Header.module.css";
import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
  return (
    <div className={style.headerMain}>
      <HeaderNavigation />
    
    </div>
  );
};

export default Header;
