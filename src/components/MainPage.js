import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";

import { demonSoulsProgress } from "../trackers/DemonSouls/DemonSouls";
import { liesOfPProgress } from "../trackers/LiesOfP/LiesOfP";
import { sekiroProgress } from "../trackers/Sekiro/Sekiro";
import { eldenRingProgress } from "../trackers/EldenRing/EldenRing";
import { darkSoulsIProgress } from "../trackers/DarkSoulsI/DarkSoulsI";
import { darkSoulsIIProgress } from "../trackers/DarkSoulsII/DarkSoulsII";
import { BloodborneProgress } from "../trackers/Bloodborne/Bloodborne";
import { darkSoulsIIIProgress } from "../trackers/DarkSoulsIII/DarkSoulsIII";

import DemonSouls from "../assets/images/DemonSouls/demonsouls.png";
import DarkSoulsI from "../assets/images/DarkSoulsI/darksoulsi.png";
import DarkSoulsII from "../assets/images/DarkSoulsII/darksoulsii.png";
import Bloodborne from "../assets/images/Bloodborne/bloodborne.png";
import DarkSoulsIII from "@darkSoulsIIIImages/darksoulsiii.png";
import Sekiro from "@sekiroImages/sekiro.png";
import EldenRing from "@eldenRingImages/eldenring.png";
import LiesOfP from "@liesOfPImages/liesofp.png";
import GameIcon from "../assets/images/MainPage/Group.png";
import fromSoftwareLogo from "../assets/images/MainPage/fromsoft.png";
import Neowiz from "../assets/images/MainPage/neowiz.png";
import SoulTrackerLogo from "../assets/images/MainPage/soul-tracker-logo.png";
import SearchIcon from "../assets/images/MainPage/search-icon.png";
import Moon from "../assets/images/MainPage/moon.png";
import Sword from "../assets/images/MainPage/sword.png";
import Sheild from "../assets/images/MainPage/sheild.png";
import Ring from "../assets/images/MainPage/ring.png";
import Sun from "../assets/images/MainPage/sun.png";
import Estus from "../assets/images/MainPage/estus.png";
import Footer from "./Footer";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [demonSoulsProgressValue, setDemonSoulsProgressValue] = useState(0);
  const [liesOfPProgressValue, setLiesOfPProgressValue] = useState(0);
  const [sekiroProgressValue, setSekiroProgressValue] = useState(0); // State for Sekiro progress
  const [eldenRingProgressValue, setEldenRingProgressValue] = useState(0);
  const [BloodborneProgressValue, setBloodborneProgressValue] = useState(0);
  const [DarkSoulsIIIProgressValue, setDarkSoulsIIIProgressValue] = useState(0);
  const [DarkSoulsIIProgressValue, setDarkSoulsIIProgressValue] = useState(0);
  const [DarkSoulsIProgressValue, setDarkSoulsIProgressValue] = useState(0);

  useEffect(() => {
    setLiesOfPProgressValue(liesOfPProgress());
    setSekiroProgressValue(sekiroProgress());
    setEldenRingProgressValue(eldenRingProgress());
    setDarkSoulsIProgressValue(darkSoulsIProgress());
    setDarkSoulsIIProgressValue(darkSoulsIIProgress());
    setDarkSoulsIIIProgressValue(darkSoulsIIIProgress());
    setBloodborneProgressValue(BloodborneProgress());
    setDemonSoulsProgressValue(demonSoulsProgress());
  }, []);

  const trackers = [
    {
      title: "Demon Souls",
      image: DemonSouls,
      releaseDate: "November 12, 2020",
      progress: demonSoulsProgressValue,
      link: "/demon-souls",
      mediaType: "Game",
      company: "From Software",
      companyLogo: fromSoftwareLogo,
    },
    {
      title: "DARK SOULS™: REMASTERED",
      image: DarkSoulsI,
      releaseDate: "May 24, 2018",
      progress: DarkSoulsIProgressValue,
      link: "/dark-souls-i",
      mediaType: "Game",
      company: "From Software",
      companyLogo: fromSoftwareLogo,
    },
    {
      title: "DARK SOULS™ II: Scholar of the First Sin",
      image: DarkSoulsII,
      releaseDate: "April 1, 2015",
      progress: DarkSoulsIIProgressValue,
      link: "/dark-souls-ii",
      mediaType: "Game",
      company: "From Software",
      companyLogo: fromSoftwareLogo,
    },
    {
      title: "Bloodborne",
      image: Bloodborne,
      releaseDate: "March 24, 2015",
      progress: BloodborneProgressValue,
      link: "/bloodborne",
      mediaType: "Game",
      company: "From Software",
      companyLogo: fromSoftwareLogo,
    },
    {
      title: "DARK SOULS™ III",
      image: DarkSoulsIII,
      releaseDate: "March 24, 2016",
      progress: DarkSoulsIIIProgressValue,
      link: "/dark-souls-iii",
      mediaType: "Game",
      company: "From Software",
      companyLogo: fromSoftwareLogo,
    },
    {
      title: "Sekiro™: Shadows Die Twice",
      image: Sekiro,
      releaseDate: "March 22, 2019",
      progress: sekiroProgressValue,
      link: "/sekiro",
      mediaType: "Game",
      company: "From Software",
      companyLogo: fromSoftwareLogo,
    },
    {
      title: "ELDEN RING",
      image: EldenRing,
      releaseDate: "February 25, 2022",
      progress: eldenRingProgressValue, // Use the calculated Elden Ring progress
      link: "/elden-ring",
      mediaType: "Game",
      company: "From Software",
      companyLogo: fromSoftwareLogo,
    },
    {
      title: "Lies of P",
      image: LiesOfP,
      releaseDate: "September 19, 2023",
      progress: liesOfPProgressValue,
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
      <div className={styles.navContainer}>
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
          <div className={styles.profilePicture}></div>
        </nav>
      </div>
      <div className={styles.sideNav}>
        <img src={Moon}></img>
        <img src={Sword}></img>
        <img src={Sheild}></img>
        <img src={Estus}></img>
        <img src={Sun}></img>
        <img src={Ring}></img>
      </div>
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
                  <div className={styles.trackerProgressContainer}>
                    <div className={styles.trackerProgress}>
                      <div
                        className={styles.progressBar}
                        style={{
                          width: `${Math.floor(tracker.progress)}%`, // Fixing the template literal syntax
                          backgroundColor: getProgressBarColor(
                            tracker.progress
                          ),
                        }}
                      ></div>
                    </div>
                    <div className={styles.progressPercentage}>
                      {Math.floor(tracker.progress)}%
                    </div>
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
      <Footer />
    </div>
  );
};
export default MainPage;