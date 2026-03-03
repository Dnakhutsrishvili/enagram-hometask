
import { useState } from 'react';
import logo from '../assets/icons/logo.png'
import vectors from '../assets/icons/vectors.png'
import check from '../assets/icons/check.png'
import text from '../assets/icons/text.png'
import mic from '../assets/icons/mic.png'
import wave from '../assets/icons/wave.png'
import docs from '../assets/icons/docs.png'
import arrowRight from '../assets/icons/arrow-right.png'
import styles from './header.module.css'

function Header() {
 const [isOpen, setIsOpen] = useState(false);
   const userName = "Davit Nakhutsrishvili";


  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header>
        <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt='logo' />
        <h2>Enagram</h2>
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.active : ""}`}>
        <ul className={styles.navList}>
          <li>Home</li>
          <li>Map</li>
        </ul>
      </nav>

      <div
        className={`${styles.burger} ${isOpen ? styles.activeBurger : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
       <aside className={styles.sidebar}>
        <div>
        <div className={styles.arrows}>
            <img src={vectors} alt="vectors" />
        </div>
       <div className={styles.logo}>
        <img src={logo} alt='logo' />
        <h2>Enagram</h2>
      </div>

      <nav className={styles.navSidebar}>
    <ul>
        <li>
            <img src={check} alt="check" />
        <a href="#" className={styles.navItem}>მართლმწერი</a>
        </li>
        <li>
             <img src={text} alt="text" />
        <a href="#" className={styles.navItem}>ტექსტის შედარება</a>
        </li>
        <li>
         <img src={mic} alt="mic" />
        <a href="#" className={styles.navItem}>ტექსტი <img src={arrowRight} alt="arrow" /> ხმა</a>
        </li>
        <li>
            <img src={wave} alt="wave" />
        <a href="#" className={styles.navItem}>ხმა <img src={arrowRight} alt="arrow" />ტექსტი</a>
        </li>
        <li>
            <img src={docs} alt="docs" />
        <a href="#" className={styles.navItem}>PDF კონვერტაცია</a>
        </li>
    </ul>
      </nav>
    </div>
      <div className={styles.user}>
        <div className={styles.avatar}>
          {userName.charAt(0).toUpperCase()}
        </div>
        <span>{userName}</span>
      </div>
    </aside>
    </header>
  );
}

export default Header