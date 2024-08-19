import React, { useState, useEffect } from "react";
import styles from "./Sekiro.module.css";
import GyoubuOniwa from "@sekiroImages/gyoubu_oniwa.jpg";
import LadyButterfly from "@sekiroImages/lady_butterfly.jpg";
import GenichiroAshina from "@sekiroImages/genichiro_ashina.jpg";
import FoldingScreenMonkeys from "@sekiroImages/folding_screen_monkeys.jpg";
import GuardianApe from "@sekiroImages/guardian_ape.jpg";
import HeadlessApe from "@sekiroImages/headless_ape.jpg";
import CorruptedMonk from "@sekiroImages/corrupted_monk.jpg";
import IsshinAshina from "@sekiroImages/isshin_ashina.jpg";
import GreatShinobiOwl from "@sekiroImages/great_shinobi_owl.jpg";
import TrueCorruptedMonk from "@sekiroImages/true_corrupted_monk.jpg";
import DivineDragon from "@sekiroImages/divine_dragon.jpg";
import OwlFather from "@sekiroImages/owl_father.jpg";
import DemonOfHatred from "@sekiroImages/demon_of_hatred.jpg";
import IsshinTheSwordSaint from "@sekiroImages/isshin_the_sword_saint.jpg";
import confetti from "canvas-confetti";

const bosses = [
  { name: "Gyoubu Oniwa", image: GyoubuOniwa, emoji: "⚔️" },
  { name: "Lady Butterfly", image: LadyButterfly, emoji: "🦋" },
  { name: "Genichiro Ashina", image: GenichiroAshina, emoji: "🗡️" },
  { name: "Folding Screen Monkeys", image: FoldingScreenMonkeys, emoji: "🐒" },
  { name: "Guardian Ape", image: GuardianApe, emoji: "🦧" },
  { name: "Headless Ape", image: HeadlessApe, emoji: "🐵" },
  { name: "Corrupted Monk", image: CorruptedMonk, emoji: "🧘" },
  { name: "Isshin Ashina", image: IsshinAshina, emoji: "🔥" },
  { name: "Great Shinobi Owl", image: GreatShinobiOwl, emoji: "🦉" },
  { name: "True Corrupted Monk", image: TrueCorruptedMonk, emoji: "🧘" },
  { name: "Divine Dragon", image: DivineDragon, emoji: "🐉" },
  { name: "Owl (Father)", image: OwlFather, emoji: "🦉" },
  { name: "Demon of Hatred", image: DemonOfHatred, emoji: "😈" },
  { name: "Isshin, The Sword Saint", image: IsshinTheSwordSaint, emoji: "⚔️" },
];

const Sekiro = () => {
  const [deathCounts, setDeathCounts] = useState({});
  const [defeatedBosses, setDefeatedBosses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBoss, setSelectedBoss] = useState(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isGlobalResetModalOpen, setIsGlobalResetModalOpen] = useState(false);

  useEffect(() => {
    const storedCounts = JSON.parse(localStorage.getItem("deathCounts")) || {};
    setDeathCounts(storedCounts);
    const storedDefeated = JSON.parse(localStorage.getItem("defeatedBosses")) || [];
    setDefeatedBosses(storedDefeated);
  }, []);

  useEffect(() => {
    localStorage.setItem("deathCounts", JSON.stringify(deathCounts));
  }, [deathCounts]);

  useEffect(() => {
    localStorage.setItem("defeatedBosses", JSON.stringify(defeatedBosses));
  }, [defeatedBosses]);

  useEffect(() => {
    if (isModalOpen || isResetModalOpen || isGlobalResetModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, isResetModalOpen, isGlobalResetModalOpen]);

  const adjustCount = (boss, amount) => {
    setDeathCounts((prevCounts) => ({
      ...prevCounts,
      [boss]: (prevCounts[boss] || 0) + amount,
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

  const handleClickOutside = (event) => {
    if (event.target.closest(`.${styles.modalContent}`)) {
      return;
    }
    closeModal();
    closeResetModal();
    closeGlobalResetModal();
  };

  const handleKeyDown = (event) => {
    if (event.key === " ") {
      event.preventDefault();
      if (isModalOpen && selectedBoss) {
        adjustCount(selectedBoss.name, 1);
      }
    } else if (event.key === "d") {
      event.preventDefault();
      if (isModalOpen && selectedBoss) {
        adjustCount(selectedBoss.name, -1);
      }
    }
  };

  const handleImmortalitySevered = () => {
    if (defeatedBosses.includes(selectedBoss.name)) {
      setDefeatedBosses((prev) => prev.filter((boss) => boss !== selectedBoss.name));
    } else {
      setDefeatedBosses((prev) => [...prev, selectedBoss.name]);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E97451', '#FF7B00', '#DAD4CC', '#7E191B'],
      });
    }
  };

  const totalDeaths = Object.values(deathCounts).reduce(
    (acc, count) => acc + count,
    0
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sekiro Boss Tracker</h1>
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
                onChange={(e) =>
                  handleCountChange(boss.name, e.target.value)
                }
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
        <div className={styles.modal}>
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
              className={styles.immortalitySeveredButton}
              onClick={handleImmortalitySevered}
            >
              {defeatedBosses.includes(selectedBoss.name)
                ? 'UNDO IMMORTALITY SEVERED'
                : 'IMMORTALITY SEVERED'}
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
              Are you sure you want to reset the death count for {selectedBoss.name}?
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
            <p>Are you sure you want to reset the death counts for all bosses?</p>
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

export default Sekiro;
