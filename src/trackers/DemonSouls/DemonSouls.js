import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import styles from './DemonSouls.module.css';
import Vanguard from "../../assets/images/DemonSouls/vanguard.jpg";
import Phalanx from "../../assets/images/DemonSouls/phalanx.jpg";
import TowerKnight from "../../assets/images/DemonSouls/tower_knight.jpg";
import ArmoredSpider from "../../assets/images/DemonSouls/armored_spider.jpg";
import Flamelurker from "../../assets/images/DemonSouls/flamelurker.jpg";
import DragonGod from "../../assets/images/DemonSouls/dragon_god.jpg";
import FoolsIdol from "../../assets/images/DemonSouls/fools_idol.jpg";
import Maneater from "../../assets/images/DemonSouls/maneater.jpg";
import OldMonk from "../../assets/images/DemonSouls/old_monk.jpg";
import Adjudicator from "../../assets/images/DemonSouls/adjudicator.jpg";
import OldHero from "../../assets/images/DemonSouls/old_hero.jpg";
import StormKing from "../../assets/images/DemonSouls/storm_king.jpg";
import Leechmonger from "../../assets/images/DemonSouls/leechmonger.jpg";
import DirtyColossus from "../../assets/images/DemonSouls/dirty_colossus.jpg";
import MaidenAstraea from "../../assets/images/DemonSouls/maiden_astraea.jpg";
import Penetrator from "../../assets/images/DemonSouls/penetrator.jpg";
import FalseKingAllant from "../../assets/images/DemonSouls/false_king_allant.jpg";
import OldKingAllant from "../../assets/images/DemonSouls/old_king_allant.jpg";
import OldKingDoran from "../../assets/images/DemonSouls/old_king_doran.jpg";
import confetti from "canvas-confetti";

const bosses = [
  { name: "VANGUARD", image: Vanguard, emoji: "💀" },
  { name: "PHALANX", image: Phalanx, emoji: "🛡️" },
  { name: "TOWER KNIGHT", image: TowerKnight, emoji: "🏰" },
  { name: "ARMORED SPIDER", image: ArmoredSpider, emoji: "🕷️" },
  { name: "FLAMELURKER", image: Flamelurker, emoji: "🔥" },
  { name: "DRAGON GOD", image: DragonGod, emoji: "🐉" },
  { name: "FOOL’S IDOL", image: FoolsIdol, emoji: "🎭" },
  { name: "MANEATER", image: Maneater, emoji: "🧛" },
  { name: "OLD MONK", image: OldMonk, emoji: "🧙" },
  { name: "ADJUDICATOR", image: Adjudicator, emoji: "⚖️" },
  { name: "OLD HERO", image: OldHero, emoji: "🦸" },
  { name: "STORM KING", image: StormKing, emoji: "🌪️" },
  { name: "LEECHMONGER", image: Leechmonger, emoji: "🪱" },
  { name: "DIRTY COLOSSUS", image: DirtyColossus, emoji: "💩" },
  { name: "MAIDEN ASTRAEA", image: MaidenAstraea, emoji: "👼" },
  { name: "PENETRATOR", image: Penetrator, emoji: "⚔️" },
  { name: "FALSE KING ALLANT", image: FalseKingAllant, emoji: "👑" },
  { name: "OLD KING ALLANT", image: OldKingAllant, emoji: "👴" },
  { name: "OLD KING DORAN", image: OldKingDoran, emoji: "🗡️" }
  
];

const DemonSouls = () => {
  const [deathCounts, setDeathCounts] = useState(() => JSON.parse(Cookies.get("demonSoulsDeathCounts") || "{}"));
  const [defeatedBosses, setDefeatedBosses] = useState(() => JSON.parse(Cookies.get("demonSoulsDefeatedBosses") || "[]"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBoss, setSelectedBoss] = useState(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isGlobalResetModalOpen, setIsGlobalResetModalOpen] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    Cookies.set("demonSoulsDeathCounts", JSON.stringify(deathCounts), { expires: 365 });
  }, [deathCounts]);

  useEffect(() => {
    Cookies.set("demonSoulsDefeatedBosses", JSON.stringify(defeatedBosses), { expires: 365 });
  }, [defeatedBosses]);

  const handleVictoryAchieved = () => {
    let updatedDefeatedBosses;
    if (defeatedBosses.includes(selectedBoss.name)) {
      updatedDefeatedBosses = defeatedBosses.filter((boss) => boss !== selectedBoss.name);
    } else {
      updatedDefeatedBosses = [...defeatedBosses, selectedBoss.name];
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#b8860b', '#8b0000', '#2e2e2e'], // Gold color scheme for victory
      });
    }
    setDefeatedBosses(updatedDefeatedBosses);
  };

  const adjustCount = (boss, amount) => {
    setDeathCounts((prevCounts) => ({
      ...prevCounts,
      [boss]: Math.max(0, (prevCounts[boss] || 0) + amount),
    }));
  };

  const resetCount = (boss) => {
    setDeathCounts((prevCounts) => ({
      ...prevCounts,
      [boss]: 0,
    }));
    setDefeatedBosses((prev) => prev.filter((b) => b !== boss));
  };

  const resetAllCounts = () => {
    const resetCounts = {};
    bosses.forEach((boss) => {
      resetCounts[boss.name] = 0;
    });
    setDeathCounts(resetCounts);
    setDefeatedBosses([]);
    setIsGlobalResetModalOpen(false);
  };

  const handleCountChange = (boss, value) => {
    const newValue = parseInt(value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      setDeathCounts((prevCounts) => ({
        ...prevCounts,
        [boss]: newValue,
      }));
    }
  };

  const openModal = (boss) => {
    setSelectedBoss(boss);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBoss(null);
  };

  const openResetModal = () => {
    setIsResetModalOpen(true);
  };

  const closeResetModal = () => {
    setIsResetModalOpen(false);
  };

  const handleReset = () => {
    if (selectedBoss) {
      resetCount(selectedBoss.name);
    }
    closeResetModal();
    closeModal();
  };

  const openGlobalResetModal = () => {
    setIsGlobalResetModalOpen(true);
  };

  const closeGlobalResetModal = () => {
    setIsGlobalResetModalOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const totalDeaths = Object.values(deathCounts).reduce(
    (acc, count) => acc + count,
    0
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        DEMON SOULS BOSS TRACKER
      </h1>
      <ul className={styles.bossList}>
        {bosses.map((boss) => (
          <li
            key={boss.name}
            className={`${styles.bossItem} ${defeatedBosses.includes(boss.name) ? styles.defeated : ''}`}
            onClick={() => openModal(boss)}
          >
            <span className={styles.bossName}>
              <img src={boss.image} alt={boss.name} className={styles.bossImage} />
              {boss.name} {boss.emoji}
            </span>
            <div className={styles.buttonGroup}>
              <button
                className={styles.button}
                onClick={(e) => {
                  e.stopPropagation();
                  adjustCount(boss.name, -1);
                }}
                disabled={deathCounts[boss.name] === 0}
              >
                -
              </button>
              <input
                className={styles.countInput}
                type="number"
                value={deathCounts[boss.name] || 0}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => handleCountChange(boss.name, e.target.value)}
              />
              <button
                className={styles.button}
                onClick={(e) => {
                  e.stopPropagation();
                  adjustCount(boss.name, 1);
                }}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.totalDeaths}>TOTAL DEATHS: {totalDeaths}</div>
      <button className={styles.resetButton} onClick={openGlobalResetModal}>
        RESET ALL
      </button>

      {isModalOpen && selectedBoss && (
        <div
          className={styles.modal}
          onClick={handleBackdropClick} // Close modal when clicking outside
          ref={modalRef}
        >
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedBoss.name}</h2>
            <img
              src={selectedBoss.image}
              alt={selectedBoss.name}
              className={styles.modalBossImage}
            />
            <div className={styles.buttonGroup}>
              <button
                className={styles.button}
                onClick={() => adjustCount(selectedBoss.name, -1)}
                disabled={deathCounts[selectedBoss.name] === 0}
              >
                -
              </button>
              <input
                className={styles.countInput}
                type="number"
                value={deathCounts[selectedBoss.name] || 0}
                onChange={(e) =>
                  handleCountChange(selectedBoss.name, e.target.value)
                }
              />
              <button
                className={styles.button}
                onClick={() => adjustCount(selectedBoss.name, 1)}
              >
                +
              </button>
            </div>
            <p className={styles.descriptionText}>
              Press <strong>Space</strong> to add one, <strong>D</strong> to go
              back one.
            </p>
            <button
              className={styles.victoryAchievedButton}
              onClick={handleVictoryAchieved}
            >
              {defeatedBosses.includes(selectedBoss.name)
                ? 'UNDO VICTORY ACHIEVED'
                : 'VICTORY ACHIEVED'}
            </button>
            <button className={styles.resetButton2} onClick={openResetModal}>
              RESET
            </button>
          </div>
        </div>
      )}

      {isResetModalOpen && (
        <div className={`${styles.modal} ${styles.confirmationModal}`}>
          <div className={styles.modalContent}>
            <p>
              Are you sure you want to reset the death count for{" "}
              {selectedBoss.name}?
            </p>
            <button className={styles.modalButton} onClick={handleReset}>
              Yes
            </button>
            <button className={styles.modalButton} onClick={closeResetModal}>
              No
            </button>
          </div>
        </div>
      )}

      {isGlobalResetModalOpen && (
        <div className={`${styles.modal} ${styles.confirmationModal}`}>
          <div className={styles.modalContent}>
            <p>
              Are you sure you want to reset the death counts for all bosses?
            </p>
            <button className={styles.modalButton} onClick={resetAllCounts}>
              Yes
            </button>
            <button className={styles.modalButton} onClick={closeGlobalResetModal}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Export the progress calculation for use in the main page
export const demonSoulsProgress = () => {
  const storedDefeated = JSON.parse(Cookies.get("demonSoulsDefeatedBosses") || "[]");
  const totalBosses = bosses.length;
  return (storedDefeated.length / totalBosses) * 100;
};

export default DemonSouls;
