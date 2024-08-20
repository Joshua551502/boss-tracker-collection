import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import styles from './Bloodborne.module.css';
import ClericBeast from "../../assets/images/Bloodborne/cleric_beast.jpg";
import FatherGascoigne from "../../assets/images/Bloodborne/father_gascoigne.jpg";
import BloodStarvedBeast from "../../assets/images/Bloodborne/blood_starved_beast.jpg";
import WitchOfHemwick from "../../assets/images/Bloodborne/witch_of_hemwick.jpg";
import VicarAmelia from "../../assets/images/Bloodborne/vicar_amelia.jpg";
import ShadowsOfYharnam from "../../assets/images/Bloodborne/shadows_of_yharnam.jpg";
import Rom from "../../assets/images/Bloodborne/rom.jpg";
import TheOneReborn from "../../assets/images/Bloodborne/the_one_reborn.jpg";
import MartyrLogarius from "../../assets/images/Bloodborne/martyr_logarius.jpg";
import Amygdala from "../../assets/images/Bloodborne/amygdala.jpg";
import DarkbeastPaarl from "../../assets/images/Bloodborne/darkbeast_paarl.jpg";
import Micolash from "../../assets/images/Bloodborne/micolash.jpg";
import CelestialEmissary from "../../assets/images/Bloodborne/celestial_emissary.jpg";
import Ebrietas from "../../assets/images/Bloodborne/ebrietas.jpg";
import MergosWetNurse from "../../assets/images/Bloodborne/mergos_wet_nurse.jpg";
import Gehrman from "../../assets/images/Bloodborne/gehrman.jpg";
import MoonPresence from "../../assets/images/Bloodborne/moon_presence.jpg";
import Ludwig from "../../assets/images/Bloodborne/ludwig.jpg";
import Laurence from "../../assets/images/Bloodborne/laurence.jpg";
import TheLivingFailures from "../../assets/images/Bloodborne/the_living_failures.jpg";
import LadyMaria from "../../assets/images/Bloodborne/lady_maria.jpg";
import OrphanOfKos from "../../assets/images/Bloodborne/orphan_of_kos.jpg";
import confetti from "canvas-confetti";

const baseGameBosses = [
  { name: "Cleric Beast", image: ClericBeast, emoji: "🦍" },
  { name: "Father Gascoigne", image: FatherGascoigne, emoji: "👨‍⚕️" },
  { name: "Blood-starved Beast", image: BloodStarvedBeast, emoji: "🧛" },
  { name: "The Witch of Hemwick", image: WitchOfHemwick, emoji: "🧙‍♀️" },
  { name: "Vicar Amelia", image: VicarAmelia, emoji: "🦌" },
  { name: "Shadows of Yharnam", image: ShadowsOfYharnam, emoji: "👥" },
  { name: "Rom, the Vacuous Spider", image: Rom, emoji: "🕷️" },
  { name: "The One Reborn", image: TheOneReborn, emoji: "👹" },
  { name: "Martyr Logarius", image: MartyrLogarius, emoji: "⚰️" },
  { name: "Amygdala", image: Amygdala, emoji: "🧠" },
  { name: "Darkbeast Paarl", image: DarkbeastPaarl, emoji: "⚡" },
  { name: "Micolash, Host of the Nightmare", image: Micolash, emoji: "🎭" },
  { name: "Celestial Emissary", image: CelestialEmissary, emoji: "👽" },
  { name: "Ebrietas, Daughter of the Cosmos", image: Ebrietas, emoji: "🐙" },
  { name: "Mergo's Wet Nurse", image: MergosWetNurse, emoji: "🧚‍♀️" },
  { name: "Gehrman, The First Hunter", image: Gehrman, emoji: "💀" },
  { name: "Moon Presence", image: MoonPresence, emoji: "🌕" },
];

const dlcBosses = [
  { name: "Ludwig the Accursed/Holy Blade", image: Ludwig, emoji: "🗡️" },
  { name: "Laurence, the First Vicar", image: Laurence, emoji: "🔥" },
  { name: "The Living Failures", image: TheLivingFailures, emoji: "👾" },
  { name: "Lady Maria of the Astral Clocktower", image: LadyMaria, emoji: "🕰️" },
  { name: "Orphan of Kos", image: OrphanOfKos, emoji: "🌊" }
];


const Bloodborne = () => {
  const [deathCounts, setDeathCounts] = useState(() => JSON.parse(Cookies.get("bloodborneDeathCounts") || "{}"));
  const [dlcDeathCounts, setDlcDeathCounts] = useState(() => JSON.parse(Cookies.get("bloodborneDlcDeathCounts") || "{}"));
  const [defeatedBosses, setDefeatedBosses] = useState(() => JSON.parse(Cookies.get("bloodborneDefeatedBosses") || "[]"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBoss, setSelectedBoss] = useState(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isGlobalResetModalOpen, setIsGlobalResetModalOpen] = useState(false);
  const [isDlc, setIsDlc] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    Cookies.set("bloodborneDeathCounts", JSON.stringify(deathCounts), { expires: 365 });
  }, [deathCounts]);

  useEffect(() => {
    Cookies.set("bloodborneDlcDeathCounts", JSON.stringify(dlcDeathCounts), { expires: 365 });
  }, [dlcDeathCounts]);

  useEffect(() => {
    Cookies.set("bloodborneDefeatedBosses", JSON.stringify(defeatedBosses), { expires: 365 });
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
          ? "The Old Hunters"
          : "Bloodborne Boss Tracker"}
      </h1>

      <div className={styles.titleItems}>
        <button className={styles.toggleButton} onClick={() => setIsDlc(!isDlc)}>
          {isDlc ? "BASE GAME BOSSES" : "THE OLD HUNTERS"}
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
                ? 'UNDO PREY SLAUGHTERED'
                : 'PREY SLAUGHTERED'}
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
export const BloodborneProgress = () => {
  const storedDefeated = JSON.parse(Cookies.get("bloodborneDefeatedBosses") || "[]");
  const totalBosses = baseGameBosses.length + dlcBosses.length;
  return (storedDefeated.length / totalBosses) * 100;
};

export default Bloodborne;
