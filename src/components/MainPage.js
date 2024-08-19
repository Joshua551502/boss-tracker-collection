import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css';
import DarkSoulsIII from '@eldenRingImages/darksoulsiii.png';



const MainPage = () => {
  const trackers = [
    {
      title: "Dark Souls III",
      image: "/path/to/dark-souls-iii.jpg",
      releaseDate: "March 24, 2016",
      progress: 100,
      link: "/dark-souls-iii"
    },
    {
      title: "Sekiro: Shadows Die Twice",
      image: "/path/to/sekiro.jpg",
      releaseDate: "March 22, 2019",
      progress: 50,
      link: "/sekiro"
    },
    {
      title: "Lies of P",
      image: "/path/to/lies-of-p.jpg",
      releaseDate: "September 19, 2023",
      progress: 30,
      link: "/lies-of-p"
    },
    {
      title: "Elden Ring",
      image: "/path/to/elden-ring.jpg",
      releaseDate: "February 25, 2022",
      progress: 75,
      link: "/elden-ring"
    }
  ];

  return (
    <div className={styles.mainPage}>
      <nav className={styles.navbar}>
        <div className={styles.logo}> 
          <img src="/path/to/your/logo.png" alt="Logo" />
        </div>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <button className={styles.dropbtn}>Dark Souls</button>
          </li>
          <li className={styles.navItem}>
            <button className={styles.dropbtn}>Sekiro</button>
          </li>
          <li className={styles.navItem}>
            <button className={styles.dropbtn}>Lies of P</button>
          </li>
          <li className={styles.navItem}>
            <button className={styles.dropbtn}>Elden Ring</button>
          </li>
        </ul>
      </nav>

      <h1 className={styles.pageTitle}>Collection</h1>
      
      <div className={styles.trackerList}>
        {trackers.map(tracker => (
          <div key={tracker.title} className={styles.trackerCard}>
            <div className={styles.trackerImage}>
              <img src={tracker.image} alt={tracker.title} />
            </div>
            <div className={styles.trackerDetails}>
              <div className={styles.trackerTitle}>
                <Link to={tracker.link} className={styles.trackerLink}>
                  {tracker.title}
                </Link>
              </div>
              <div className={styles.trackerInfo}>
                Released on: {tracker.releaseDate}
              </div>
              <div className={styles.trackerProgress}>
                <div style={{ width: `${tracker.progress}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
