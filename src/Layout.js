import HeaderMenu from "./HeaderMenu";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <section className={classes.layout}>
      <HeaderMenu />
      <main className={classes.main}>{props.children}</main>
    </section>
  );
};

export default Layout;
