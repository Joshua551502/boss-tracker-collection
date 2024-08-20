import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";
import { liesOfPProgress } from "../trackers/LiesOfP/LiesOfP";
import { sekiroProgress } from "../trackers/Sekiro/Sekiro"; // Import the Sekiro progress function
import DarkSoulsIII from "@darkSoulsIIIImages/darksoulsiii.png";
import Sekiro from "@sekiroImages/sekiro.png";
import EldenRing from "@eldenRingImages/eldenring.png";
import LiesOfP from "@liesOfPImages/liesofp.png";
import GameIcon from "../assets/images/MainPage/Group.png";
import fromSoftwareLogo from "../assets/images/MainPage/fromsoft.png";
import Neowiz from "../assets/images/MainPage/neowiz.png";
import SoulTrackerLogo from "../assets/images/MainPage/soul-tracker-logo.png";
import SearchIcon from "../assets/images/MainPage/search-icon.png";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [liesOfPProgressValue, setLiesOfPProgressValue] = useState(0);
  const [sekiroProgressValue, setSekiroProgressValue] = useState(0); // State for Sekiro progress

  useEffect(() => {
    // Fetch and set the progress value from the Lies of P tracker
    setLiesOfPProgressValue(liesOfPProgress());
    
    // Fetch and set the progress value from the Sekiro tracker
    setSekiroProgressValue(sekiroProgress());
  }, []);

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
      image: Sekiro,
      releaseDate: "March 22, 2019",
      progress: sekiroProgressValue, // Use the calculated Sekiro progress
      link: "/sekiro",
      mediaType: "Game",
      company: "From Software",
      companyLogo: fromSoftwareLogo,
    },
    {
      title: "Elden Ring",
      image: EldenRing,
      releaseDate: "February 25, 2022",
      progress: 39,
      link: "/elden-ring",
      mediaType: "Game",
      company: "From Software",
      companyLogo: fromSoftwareLogo,
    },
    {
      title: "Lies of P",
      image: LiesOfP,
      releaseDate: "September 19, 2023",
      progress: liesOfPProgressValue, // Use the calculated Lies of P progress
      link: "/lies-of-p",
      mediaType: "Game",
      company: "Neowiz Games",
      companyLogo: Neowiz,
    },
  ];

  // Determine the color based on the progress value
  const getProgressBarColor = (progress) => {
    if (progress === 100) return "#4AB1BF";
    if (progress >= 40) return "#4ABF85";
    if (progress >= 20) return "#BF904A";
    return "#BF4A4A";
  };

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
                  <div className={styles.progressText}>
                    {tracker.progress === 100 ? "Complete" : "Progress"}
                  </div>
                  <div className={styles.trackerProgress}>
                    <div
                      className={styles.progressBar}
                      style={{
                        width: `${tracker.progress}%`,
                        backgroundColor: getProgressBarColor(tracker.progress),
                      }}
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
