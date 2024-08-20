import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import styles from './DarkSoulsIII.module.css';
import IudexGundyr from "@darkSoulsIIIImages/iudex_gundyr.jpg";
import Vordt from "@darkSoulsIIIImages/vordt.jpg";
import Greatwood from "@darkSoulsIIIImages/greatwood.jpg";
import CrystalSage from "@darkSoulsIIIImages/crystal_sage.jpg";
import Deacons from "@darkSoulsIIIImages/deacons.jpg";
import AbyssWatchers from "@darkSoulsIIIImages/abyss_watchers.jpg";
import Wolnir from "@darkSoulsIIIImages/wolnir.jpg";
import OldDemonKing from "@darkSoulsIIIImages/old_demon_king.jpg";
import Pontiff from "@darkSoulsIIIImages/pontiff.jpg";
import Yhorm from "@darkSoulsIIIImages/yhorm.jpg";
import Aldrich from "@darkSoulsIIIImages/aldrich.jpg";
import Dancer from "@darkSoulsIIIImages/dancer.jpg";
import Dragonslayer from "@darkSoulsIIIImages/dragonslayer.jpg";
import Oceiros from "@darkSoulsIIIImages/oceiros.jpg";
import ChampionGundyr from "@darkSoulsIIIImages/champion_gundyr.jpg";
import Lothric from "@darkSoulsIIIImages/lothric.jpg";
import AncientWyvern from "@darkSoulsIIIImages/ancient_wyvern.jpg";
import NamelessKing from "@darkSoulsIIIImages/nameless_king.jpg";
import SoulOfCinder from "@darkSoulsIIIImages/soul_of_cinder.jpg";
import ChampionsGravetender from "@darkSoulsIIIImages/champions_gravetender.jpg";
import SisterFriede from "@darkSoulsIIIImages/sister_friede.jpg";
import DemonPrince from "@darkSoulsIIIImages/demon_prince.jpg";
import Halflight from "@darkSoulsIIIImages/halflight.jpg";
import Midir from "@darkSoulsIIIImages/midir.jpg";
import Gael from "@darkSoulsIIIImages/gael.jpg";
import confetti from "canvas-confetti";

const baseGameBosses = [
  { name: "iudex gundyr", image: IudexGundyr, emoji: "🗡️" },
  { name: "vordt of the boreal valley", image: Vordt, emoji: "❄️" },
  { name: "curse-rotted greatwood", image: Greatwood, emoji: "🌳" },
  { name: "crystal sage", image: CrystalSage, emoji: "🔮" },
  { name: "deacons of the deep", image: Deacons, emoji: "🕯️" },
  { name: "abyss watchers", image: AbyssWatchers, emoji: "🔥" },
  { name: "high lord wolnir", image: Wolnir, emoji: "💀" },
  { name: "old demon king", image: OldDemonKing, emoji: "👹" },
  { name: "pontiff sulyvahn", image: Pontiff, emoji: "🗡️" },
  { name: "yhorm, the giant", image: Yhorm, emoji: "🗿" },
  { name: "aldrich, devourer of gods", image: Aldrich, emoji: "🍴" },
  { name: "dancer of the boreal valley", image: Dancer, emoji: "💃" },
  { name: "dragonslayer armour", image: Dragonslayer, emoji: "🛡️" },
  { name: "oceiros, the consumed king", image: Oceiros, emoji: "👑" },
  { name: "champion gundyr", image: ChampionGundyr, emoji: "⚔️" },
  { name: "lothric, younger prince", image: Lothric, emoji: "👑" },
  { name: "ancient wyvern", image: AncientWyvern, emoji: "🐉" },
  { name: "nameless king", image: NamelessKing, emoji: "⚡" },
  { name: "soul of cinder", image: SoulOfCinder, emoji: "🔥" }
];

const dlcBosses = [
  { name: "champion's gravetender and gravetender greatwolf", image: ChampionsGravetender, emoji: "🐺" },
  { name: "sister friede", image: SisterFriede, emoji: "☃️" },
  { name: "demon in pain, demon from below, and demon prince", image: DemonPrince, emoji: "🔥" },
  { name: "halflight, spear of the church", image: Halflight, emoji: "🛡️" },
  { name: "darkeater midir", image: Midir, emoji: "🐉" },
  { name: "slave knight gael", image: Gael, emoji: "🛡️" }
];

const DarkSoulsIII = () => {
  const [deathCounts, setDeathCounts] = useState(() => JSON.parse(Cookies.get("darkSoulsIIIDeathCounts") || "{}"));
  const [dlcDeathCounts, setDlcDeathCounts] = useState(() => JSON.parse(Cookies.get("darkSoulsIIIDlcDeathCounts") || "{}"));
  const [defeatedBosses, setDefeatedBosses] = useState(() => JSON.parse(Cookies.get("darkSoulsIIIDefeatedBosses") || "[]"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBoss, setSelectedBoss] = useState(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isGlobalResetModalOpen, setIsGlobalResetModalOpen] = useState(false);
  const [isDlc, setIsDlc] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    Cookies.set("darkSoulsIIIDeathCounts", JSON.stringify(deathCounts), { expires: 365 });
  }, [deathCounts]);

  useEffect(() => {
    Cookies.set("darkSoulsIIIDlcDeathCounts", JSON.stringify(dlcDeathCounts), { expires: 365 });
  }, [dlcDeathCounts]);

  useEffect(() => {
    Cookies.set("darkSoulsIIIDefeatedBosses", JSON.stringify(defeatedBosses), { expires: 365 });
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
    if (isDlc) {
      setDlcDeathCounts((prevCounts) => ({
        ...prevCounts,
        [boss]: Math.max(0, (prevCounts[boss] || 0) + amount),
      }));
    } else {
      setDeathCounts((prevCounts) => ({
        ...prevCounts,
        [boss]: Math.max(0, (prevCounts[boss] || 0) + amount),
      }));
    }
  };

  const resetCount = (boss) => {
    if (isDlc) {
      setDlcDeathCounts((prevCounts) => ({
        ...prevCounts,
        [boss]: 0,
      }));
    } else {
      setDeathCounts((prevCounts) => ({
        ...prevCounts,
        [boss]: 0,
      }));
    }
    setDefeatedBosses((prev) => prev.filter((b) => b !== boss));
  };

  const resetAllCounts = () => {
    if (isDlc) {
      const resetCounts = {};
      dlcBosses.forEach((boss) => {
        resetCounts[boss.name] = 0;
      });
      setDlcDeathCounts(resetCounts);
    } else {
      const resetCounts = {};
      baseGameBosses.forEach((boss) => {
        resetCounts[boss.name] = 0;
      });
      setDeathCounts(resetCounts);
    }
    setDefeatedBosses([]);
    setIsGlobalResetModalOpen(false);
  };

  const handleCountChange = (boss, value) => {
    const newValue = parseInt(value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      if (isDlc) {
        setDlcDeathCounts((prevCounts) => ({
          ...prevCounts,
          [boss]: newValue,
        }));
      } else {
        setDeathCounts((prevCounts) => ({
          ...prevCounts,
          [boss]: newValue,
        }));
      }
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
  const totalDlcDeaths = Object.values(dlcDeathCounts).reduce(
    (acc, count) => acc + count,
    0
  );

  const currentBosses = isDlc ? dlcBosses : baseGameBosses;
  const currentTotalDeaths = isDlc ? totalDlcDeaths : totalDeaths;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {isDlc
          ? "DARK SOULS III DLC BOSS TRACKER"
          : "DARK SOULS III BOSS TRACKER"}
      </h1>

      <div className={styles.titleItems}>
        <button className={styles.toggleButton} onClick={() => setIsDlc(!isDlc)}>
          {isDlc ? "BASE GAME BOSSES" : "DLC BOSSES"}
        </button>
      </div>
      <ul className={styles.bossList}>
        {currentBosses.map((boss) => (
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
                disabled={
                  (isDlc
                    ? dlcDeathCounts[boss.name]
                    : deathCounts[boss.name]) === 0
                }
              >
                -
              </button>
              <input
                className={styles.countInput}
                type="number"
                value={
                  (isDlc
                    ? dlcDeathCounts[boss.name]
                    : deathCounts[boss.name]) || 0
                }
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
      <div className={styles.totalDeaths}>TOTAL DEATHS: {currentTotalDeaths}</div>
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
                disabled={
                  (isDlc
                    ? dlcDeathCounts[selectedBoss.name]
                    : deathCounts[selectedBoss.name]) === 0
                }
              >
                -
              </button>
              <input
                className={styles.countInput}
                type="number"
                value={
                  (isDlc
                    ? dlcDeathCounts[selectedBoss.name]
                    : deathCounts[selectedBoss.name]) || 0
                }
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
export const darkSoulsIIIProgress = () => {
  const storedDefeated = JSON.parse(Cookies.get("darkSoulsIIIDefeatedBosses") || "[]");
  const totalBosses = baseGameBosses.length + dlcBosses.length;
  return (storedDefeated.length / totalBosses) * 100;
};

export default DarkSoulsIII;
