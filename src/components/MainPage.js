import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";
import DarkSoulsIII from "@darkSoulsIIIImages/darksoulsiii.png";
import Sekrio from "@sekiroImages/sekiro.png";
import EldenRing from "@eldenRingImages/eldenring.png";
import LiesOfP from "@liesOfPImages/liesofp.png";
import GameIcon from "../assets/images/MainPage/Group.png";
import fromSoftwareLogo from "../assets/images/MainPage/fromsoft.png";
import Neowiz from "../assets/images/MainPage/neowiz.png";
import SoulTrackerLogo from "../assets/images/MainPage/soul-tracker-logo.png";
import SearchIcon from "../assets/images/MainPage/search-icon.png";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const trackers = [
    {
      title: "Dark Souls III",
      image: DarkSoulsIII,
      releaseDate: "March 24, 2016",
      progress: 100,
      link: "/dark-souls-iii",
      mediaType: "Game",
      company: "From Software",
      companyLogo: fromSoftwareLogo,
    },
    {
      title: "Sekiro: Shadows Die Twice",
      image: Sekrio,
      releaseDate: "March 22, 2019",
      progress: 50,
      link: "/sekiro",
      mediaType: "Game",
      company: "From Software",
      companyLogo: fromSoftwareLogo,
    },
    {
      title: "Elden Ring",
      image: EldenRing,
      releaseDate: "February 25, 2022",
      progress: 75,
      link: "/elden-ring",
      mediaType: "Game",
      company: "From Software",
      companyLogo: fromSoftwareLogo,
    },
    {
      title: "Lies of P",
      image: LiesOfP,
      releaseDate: "September 19, 2023",
      progress: 30,
      link: "/lies-of-p",
      mediaType: "Game",
      company: "Neowiz Games",
      companyLogo: Neowiz,
    },
  ];

  // Filter trackers based on search term
  const filteredTrackers = searchTerm
    ? trackers.filter((tracker) =>
        tracker.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : trackers;

  return (
    <div className={styles.mainPage}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={SoulTrackerLogo} alt="Logo" />
        </div>
        <div className={styles.searchBar}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search for title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <img src={SearchIcon} alt="Search" />
            </button>
          </div>
        </div>
      </nav>

      <div className={styles.contentWrapper}>
        <h1 className={styles.pageTitle}>Collection</h1>
        <div className={styles.trackerList}>
          {filteredTrackers.map((tracker) => (
            <Link
              key={tracker.title}
              to={tracker.link}
              className={styles.trackerCardLink}
            >
              <div className={styles.trackerCard}>
                <div className={styles.trackerImage}>
                  <img src={tracker.image} alt={tracker.title} />
                </div>
                <div className={styles.trackerDetails}>
                  <div className={styles.trackerMedia}>
                    <img src={GameIcon} alt={tracker.mediaType} />
                    {tracker.mediaType}
                  </div>
                  <div className={styles.trackerTitle}>{tracker.title}</div>
                  <div className={styles.trackerInfo}>
                    Released on: {tracker.releaseDate}
                  </div>
                  <div className={styles.progressText}>Progress</div>
                  <div className={styles.trackerProgress}>
                    <div
                      style={{ width: `${tracker.progress}%` }}
                    ></div>
                  </div>
                  <div className={styles.trackerCompany}>
                    <img src={tracker.companyLogo} alt={tracker.company} />
                    <span className={styles.byText}>by</span> {tracker.company}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
