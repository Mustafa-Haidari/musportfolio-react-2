import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <img src="https://raw.githubusercontent.com/Mustafa-Haidari/Mustafa/main/assets/Mustafa.png" />
      
      <div className="nav_contact">
      <h2>
        <span>&lt;h1&gt;</span>Mustafa Haidari<span>&lt;/h1&gt;</span>
      </h2>
        <h3>
          <i className="uil uil-envelope"></i> mhaidarpoor@gmail.com
        </h3>
        <h3>
          <i className="uil uil-phone"></i> +61406585283
        </h3>
        <h3>
          <i className="uil uil-location-point"></i> Brisbane, Australia
        </h3>
        <div className={styles.social_icons}>
          <a
            href="https://www.linkedin.com/in/mustafa-haidari-1299b9134/"
            target="_blank"
            className={styles.footer__social}
            rel="noopener noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://m.me/mustafa.haidari.50364/"
            target="_blank"
            className={styles.footer__social}
            rel="noopener noreferrer"
          >
            <i className="uil uil-facebook-messenger"></i>
          </a>
          <a
            href="https://github.com/mustafa-haidari"
            target="_blank"
            className={styles.footer__social}
            rel="noopener noreferrer"
          >
            <i className="uil uil-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
