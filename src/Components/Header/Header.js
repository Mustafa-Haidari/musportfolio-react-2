import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Container from "../UI/Container";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Container className={styles.grid_center}>
        <div className="intro">
          <h1><span>&lt;h1&gt;</span>Mustafa Haidari<span>&lt;/h1&gt;</span></h1>
          <div>socials</div>
        </div>
        <AboutMe />
      </Container>
    </div>
  );
};

export default Header;
