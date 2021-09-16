import { Link } from "react-router-dom";
import classes from "./HeaderMenu.module.css";
import logo from "./logo.png";
const HeaderMenu = () => {
  return (
    <div className={classes.header}>
      <Link to='/kittygram'><img src={logo} alt="logo" /></Link>
      
      <Link className={classes.link} to='/kittygram/favs'>Избранное</Link>
    </div>
  );
};

export default HeaderMenu;
