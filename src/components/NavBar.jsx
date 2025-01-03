import styles from "./NavBar.module.css";
import Title from "./Title";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>Homepage</li>
        <li>About</li>
        <li>Categories</li>
        <li>Pages</li>
      </ul>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Title text="Note Book" />
      </div>

      <div>
        <ul>
          <li>Contact</li>
          <li>En</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
