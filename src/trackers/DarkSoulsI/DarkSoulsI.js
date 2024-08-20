import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import styles from './DarkSoulsI.module.css';
import AsylumDemon from "../../assets/images/DarkSoulsI/asylum_demon.jpg";
import TaurusDemon from "../../assets/images/DarkSoulsI/taurus_demon.jpg";
import MoonlightButterfly from "../../assets/images/DarkSoulsI/moonlight_butterfly.jpg";
import BellGargoyle from "../../assets/images/DarkSoulsI/bell_gargoyle.jpg";
import CapraDemon from "../../assets/images/DarkSoulsI/capra_demon.jpg";
import GapingDragon from "../../assets/images/DarkSoulsI/gaping_dragon.jpg";
import ChaosWitchQuelaag from "../../assets/images/DarkSoulsI/chaos_witch_quelaag.jpg";
import CeaselessDischarge from "../../assets/images/DarkSoulsI/ceaseless_discharge.jpg";
import StrayDemon from "../../assets/images/DarkSoulsI/stray_demon.jpg";
import IronGolem from "../../assets/images/DarkSoulsI/iron_golem.jpg";
import DragonSlayerOrnstein from "../../assets/images/DarkSoulsI/dragon_slayer_ornstein.jpg";
import ExecutionerSmough from "../../assets/images/DarkSoulsI/executioner_smough.jpg";
import Pinwheel from "../../assets/images/DarkSoulsI/pinwheel.jpg";
import SeathTheScaleless from "../../assets/images/DarkSoulsI/seath_the_scaleless.jpg";
import CrossbreedPriscilla from "../../assets/images/DarkSoulsI/crossbreed_priscilla.jpg";
import DarkSunGwyndolin from "../../assets/images/DarkSoulsI/dark_sun_gwyndolin.jpg";
import GreatGreyWolfSif from "../../assets/images/DarkSoulsI/great_grey_wolf_sif.jpg";
import DemonFiresage from "../../assets/images/DarkSoulsI/demon_firesage.jpg";
import CentipedeDemon from "../../assets/images/DarkSoulsI/centipede_demon.jpg";
import BedOfChaos from "../../assets/images/DarkSoulsI/bed_of_chaos.jpg";
import FourKings from "../../assets/images/DarkSoulsI/four_kings.jpg";
import GravelordNito from "../../assets/images/DarkSoulsI/gravelord_nito.jpg";
import SanctuaryGuardian from "../../assets/images/DarkSoulsI/sanctuary_guardian.jpg";
import KnightArtorias from "../../assets/images/DarkSoulsI/knight_artorias.jpg";
import BlackDragonKalameet from "../../assets/images/DarkSoulsI/black_dragon_kalameet.jpg";
import ManusFatherOfTheAbyss from "../../assets/images/DarkSoulsI/manus_father_of_the_abyss.jpg";
import GwynLordOfCinder from "../../assets/images/DarkSoulsI/gwyn_lord_of_cinder.jpg";
import confetti from "canvas-confetti";

const baseGameBosses = [
  { name: "asylum demon", image: AsylumDemon, emoji: "👹" },
  { name: "taurus demon", image: TaurusDemon, emoji: "🐂" },
  { name: "moonlight butterfly", image: MoonlightButterfly, emoji: "🦋" },
  { name: "bell gargoyle", image: BellGargoyle, emoji: "🔔" },
  { name: "capra demon", image: CapraDemon, emoji: "👹" },
  { name: "gaping dragon", image: GapingDragon, emoji: "🐉" },
  { name: "chaos witch quelaag", image: ChaosWitchQuelaag, emoji: "🔥" },
  { name: "ceaseless discharge", image: CeaselessDischarge, emoji: "💧" },
  { name: "stray demon", image: StrayDemon, emoji: "👹" },
  { name: "iron golem", image: IronGolem, emoji: "🦾" },
  { name: "dragon slayer ornstein", image: DragonSlayerOrnstein, emoji: "🗡️" },
  { name: "executioner smough", image: ExecutionerSmough, emoji: "⚔️" },
  { name: "pinwheel", image: Pinwheel, emoji: "🎭" },
  { name: "seath the scaleless", image: SeathTheScaleless, emoji: "🐉" },
  { name: "crossbreed priscilla", image: CrossbreedPriscilla, emoji: "❄️" },
  { name: "dark sun gwyndolin", image: DarkSunGwyndolin, emoji: "🌕" },
  { name: "great grey wolf sif", image: GreatGreyWolfSif, emoji: "🐺" },
  { name: "demon firesage", image: DemonFiresage, emoji: "🔥" },
  { name: "centipede demon", image: CentipedeDemon, emoji: "🐍" },
  { name: "bed of chaos", image: BedOfChaos, emoji: "🔥" },
  { name: "four kings", image: FourKings, emoji: "👑" },
  { name: "gravelord nito", image: GravelordNito, emoji: "💀" }
];

const dlcBosses = [
  { name: "sanctuary guardian", image: SanctuaryGuardian, emoji: "🛡️" },
  { name: "knight artorias", image: KnightArtorias, emoji: "⚔️" },
  { name: "black dragon kalameet", image: BlackDragonKalameet, emoji: "🐉" },
  { name: "manus, father of the abyss", image: ManusFatherOfTheAbyss, emoji: "🌑" },
  { name: "gwyn, lord of cinder", image: GwynLordOfCinder, emoji: "🔥" }
];
const DarkSoulsI = () => {
  const [deathCounts, setDeathCounts] = useState(() => JSON.parse(Cookies.get("darkSoulsIDeathCounts") || "{}"));
  const [dlcDeathCounts, setDlcDeathCounts] = useState(() => JSON.parse(Cookies.get("darkSoulsIDlcDeathCounts") || "{}"));
  const [defeatedBosses, setDefeatedBosses] = useState(() => JSON.parse(Cookies.get("darkSoulsIDefeatedBosses") || "[]"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBoss, setSelectedBoss] = useState(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isGlobalResetModalOpen, setIsGlobalResetModalOpen] = useState(false);
  const [isDlc, setIsDlc] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    Cookies.set("darkSoulsIDeathCounts", JSON.stringify(deathCounts), { expires: 365 });
  }, [deathCounts]);

  useEffect(() => {
    Cookies.set("darkSoulsIDlcDeathCounts", JSON.stringify(dlcDeathCounts), { expires: 365 });
  }, [dlcDeathCounts]);

  useEffect(() => {
    Cookies.set("darkSoulsIDefeatedBosses", JSON.stringify(defeatedBosses), { expires: 365 });
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
          ? "DARK SOULS I DLC BOSS TRACKER"
          : "DARK SOULS I BOSS TRACKER"}
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
export const darkSoulsIProgress = () => {
  const storedDefeated = JSON.parse(Cookies.get("darkSoulsIDefeatedBosses") || "[]");
  const totalBosses = baseGameBosses.length + dlcBosses.length;
  return (storedDefeated.length / totalBosses) * 100;
};

export default DarkSoulsI;
