import React, { useState, useEffect, useRef } from "react";
import styles from "./LiesOfP.module.css";
import confetti from "canvas-confetti";
import ParadeMaster from "@liesOfPImages/parade_master.jpg";
import MadDonkey from "@liesOfPImages/mad_donkey.jpg";
import ScrappedWatchman from "@liesOfPImages/scrapped_watchman.jpg";
import Survivor from "@liesOfPImages/survivor.jpg";
import PuppetOfTheFuture from "@liesOfPImages/puppet_of_the_future.jpg";
import KingsFlameFuoco from "@liesOfPImages/kings_flame_fuoco.jpg";
import TheAtoned from "@liesOfPImages/the_atoned.jpg";
import FallenArchbishopAndreus from "@liesOfPImages/fallen_archbishop_andreus.jpg";
import EldestOfTheBlackRabbitBrotherhood from "@liesOfPImages/eldest_of_the_black_rabbit_brotherhood.jpg";
import WhiteLady from "@liesOfPImages/white_lady.jpg";
import MadClownPuppet from "@liesOfPImages/mad_clown_puppet.jpg";
import RomeoKingOfPuppets from "@liesOfPImages/romeo_king_of_puppets.jpg";
import ChampionVictor from "@liesOfPImages/champion_victor.jpg";
import OwlDoctor from "@liesOfPImages/owl_doctor.jpg";
import GreenMonsterOfTheSwamp from "@liesOfPImages/green_monster_of_the_swamp.jpg";
import PuppetDevouringGreenMonster from "@liesOfPImages/puppet_devouring_green_monster.jpg";
import RobberWeasel from "@liesOfPImages/robber_weasel.jpg";
import WalkerOfIllusions from "@liesOfPImages/walker_of_illusions.jpg";
import CorruptedParadeMaster from "@liesOfPImages/corrupted_parade_master.jpg";
import BlackRabbitBrotherhood from "@liesOfPImages/black_rabbit_brotherhood.jpg";
import DoorGuardian from "@liesOfPImages/door_guardian.jpg";
import BlackCat from "@liesOfPImages/black_cat.jpg";
import LaxasiaTheComplete from "@liesOfPImages/laxasia_the_complete.jpg";
import RedFox from "@liesOfPImages/red_fox.jpg";
import SimonManusAwakenedGod from "@liesOfPImages/simon_manus_awakened_god.jpg";
import NamelessPuppet from "@liesOfPImages/nameless_puppet.jpg";

const bosses = [
  { name: "Parade Master", image: ParadeMaster, emoji: "🎭" },
  { name: "Mad Donkey", image: MadDonkey, emoji: "🐴" },
  { name: "Scrapped Watchman", image: ScrappedWatchman, emoji: "⏰" },
  { name: "Survivor", image: Survivor, emoji: "🔪" },
  { name: "Puppet of the Future", image: PuppetOfTheFuture, emoji: "🤖" },
  { name: "King’s Flame, Fuoco", image: KingsFlameFuoco, emoji: "🔥" },
  { name: "The Atoned", image: TheAtoned, emoji: "🙏" },
  {
    name: "Fallen Archbishop Andreus",
    image: FallenArchbishopAndreus,
    emoji: "⛪",
  },
  {
    name: "Eldest of the Black Rabbit Brotherhood",
    image: EldestOfTheBlackRabbitBrotherhood,
    emoji: "🐰",
  },
  { name: "White Lady", image: WhiteLady, emoji: "👰" },
  { name: "Mad Clown Puppet", image: MadClownPuppet, emoji: "🤡" },
  { name: "Romeo, King of Puppets", image: RomeoKingOfPuppets, emoji: "👑" },
  { name: "Champion Victor", image: ChampionVictor, emoji: "🏆" },
  { name: "Owl Doctor", image: OwlDoctor, emoji: "🦉" },
  {
    name: "Green Monster of the Swamp",
    image: GreenMonsterOfTheSwamp,
    emoji: "🐸",
  },
  {
    name: "Puppet-Devouring Green Monster",
    image: PuppetDevouringGreenMonster,
    emoji: "👹",
  },
  { name: "Robber Weasel", image: RobberWeasel, emoji: "🦊" },
  { name: "Walker of Illusions", image: WalkerOfIllusions, emoji: "👣" },
  {
    name: "Corrupted Parade Master",
    image: CorruptedParadeMaster,
    emoji: "🎭",
  },
  {
    name: "Black Rabbit Brotherhood",
    image: BlackRabbitBrotherhood,
    emoji: "🐰",
  },
  { name: "Door Guardian", image: DoorGuardian, emoji: "🚪" },
  { name: "Black Cat", image: BlackCat, emoji: "🐱" },
  { name: "Laxasia the Complete", image: LaxasiaTheComplete, emoji: "⚡" },
  { name: "Red Fox", image: RedFox, emoji: "🦊" },
  {
    name: "Simon Manus, Awakened God",
    image: SimonManusAwakenedGod,
    emoji: "🕊️",
  },
  { name: "Nameless Puppet", image: NamelessPuppet, emoji: "👤" },
];

const LiesOfP = () => {
  const [deathCounts, setDeathCounts] = useState({});
  const [defeatedBosses, setDefeatedBosses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBoss, setSelectedBoss] = useState(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isGlobalResetModalOpen, setIsGlobalResetModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    // Initialize state from localStorage
    const initializeState = () => {
      const storedCounts = JSON.parse(localStorage.getItem("deathCounts")) || {};
      const storedDefeated = JSON.parse(localStorage.getItem("defeatedBosses")) || [];
      setDeathCounts(storedCounts);
      setDefeatedBosses(storedDefeated);
    };

    initializeState();
  }, []);

  const updateLocalStorage = (counts, defeated) => {
    localStorage.setItem("deathCounts", JSON.stringify(counts));
    localStorage.setItem("defeatedBosses", JSON.stringify(defeated));
  };

  const adjustCount = (boss, amount) => {
    const newDeathCounts = {
      ...deathCounts,
      [boss]: Math.max(0, (deathCounts[boss] || 0) + amount),
    };
    setDeathCounts(newDeathCounts);
    updateLocalStorage(newDeathCounts, defeatedBosses);
  };

  const resetCount = (boss) => {
    const newDeathCounts = {
      ...deathCounts,
      [boss]: 0,
    };
    const newDefeatedBosses = defeatedBosses.filter((b) => b !== boss);
    setDeathCounts(newDeathCounts);
    setDefeatedBosses(newDefeatedBosses);
    updateLocalStorage(newDeathCounts, newDefeatedBosses);
  };

  const resetAllCounts = () => {
    const resetCounts = {};
    bosses.forEach((boss) => {
      resetCounts[boss.name] = 0;
    });
    setDeathCounts(resetCounts);
    setDefeatedBosses([]);
    updateLocalStorage(resetCounts, []);
    setIsGlobalResetModalOpen(false);
  };

  const handleVictoryAchieved = (event) => {
    event.stopPropagation(); // Prevent modal from closing
    let updatedDefeatedBosses;
    if (defeatedBosses.includes(selectedBoss.name)) {
      updatedDefeatedBosses = defeatedBosses.filter(
        (boss) => boss !== selectedBoss.name
      );
    } else {
      updatedDefeatedBosses = [...defeatedBosses, selectedBoss.name];
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#f4b400", "#8b0000", "#2e2e2e"],
        zIndex: 9999, // Set a high z-index to ensure confetti appears in front
      });
    }
    setDefeatedBosses(updatedDefeatedBosses);
    updateLocalStorage(deathCounts, updatedDefeatedBosses);
  };

  const handleCountChange = (boss, value) => {
    const newValue = parseInt(value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      const newDeathCounts = {
        ...deathCounts,
        [boss]: newValue,
      };
      setDeathCounts(newDeathCounts);
      updateLocalStorage(newDeathCounts, defeatedBosses);
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
      closeResetModal();
      closeGlobalResetModal();
    }
  };

  const totalDeaths = Object.values(deathCounts).reduce(
    (acc, count) => acc + count,
    0
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LIES OF P BOSS TRACKER</h1>
      <ul className={styles.bossList}>
        {bosses.map((boss) => (
          <li
            key={boss.name}
            className={`${styles.bossItem} ${
              defeatedBosses.includes(boss.name) ? styles.defeated : ""
            }`}
            onClick={() => openModal(boss)}
          >
            <span className={styles.bossName}>
              <img
                src={boss.image}
                alt={boss.name}
                className={styles.bossImage}
              />
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
        <div className={styles.modalOverlay} onClick={handleBackdropClick}>
          <div className={styles.modalContent} ref={modalRef}>
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
            <div className={styles.modalButtonsSeperator}>
              <button
                className={styles.victoryAchievedButton}
                onClick={handleVictoryAchieved}
              >
                {defeatedBosses.includes(selectedBoss.name)
                  ? "UNDO VICTORY ACHIEVED"
                  : "VICTORY ACHIEVED"}
              </button>
              <button className={styles.resetButton2} onClick={openResetModal}>
                RESET
              </button>
            </div>
          </div>
        </div>
      )}

      {isResetModalOpen && (
        <div className={styles.modalOverlay} onClick={handleBackdropClick}>
          <div
            className={`${styles.modalContent} ${styles.confirmationModal}`}
            ref={modalRef}
          >
            <div className={styles.modalContent}>
              <p>
                Are you sure you want to reset the death count for{" "}
                {selectedBoss.name}?
              </p>
              <button className={styles.modalButton} onClick={handleReset}>
                Yes
              </button>
              <button
                className={styles.modalButton}
                onClick={closeResetModal}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {isGlobalResetModalOpen && (
        <div className={styles.modalOverlay} onClick={handleBackdropClick}>
          <div
            className={`${styles.modalContent} ${styles.confirmationModal}`}
            ref={modalRef}
          >
            <div className={styles.modalContent}>
              <p>
                Are you sure you want to reset the death counts for all bosses?
              </p>
              <button className={styles.modalButton} onClick={resetAllCounts}>
                Yes
              </button>
              <button
                className={styles.modalButton}
                onClick={closeGlobalResetModal}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Export the progress calculation for use in the main page
export const liesOfPProgress = () => {
  const storedDefeated = JSON.parse(localStorage.getItem("defeatedBosses")) || [];
  const totalBosses = bosses.length;
  return (storedDefeated.length / totalBosses) * 100;
};

export default LiesOfP;
