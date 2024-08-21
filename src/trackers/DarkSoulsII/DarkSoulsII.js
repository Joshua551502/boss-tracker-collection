import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import styles from './DarkSoulsII.module.css';
import LastGiant from "../../assets/images/DarkSoulsII/last_giant.jpg";
import ThePursuer from "../../assets/images/DarkSoulsII/the_pursuer.jpg";
import IronDragonslayer from "../../assets/images/DarkSoulsII/iron_dragonslayer.jpg";
import Dragonrider from "../../assets/images/DarkSoulsII/dragonrider.jpg";
import FlexileSentry from "../../assets/images/DarkSoulsII/flexile_sentry.jpg";
import RuinSentinels from "../../assets/images/DarkSoulsII/ruin_sentinels.jpg";
import BelfryGargoyles from "../../assets/images/DarkSoulsII/belfry_gargoyles.jpg";
import TheLostSinner from "../../assets/images/DarkSoulsII/the_lost_sinner.jpg";
import ExecutionersChariot from "../../assets/images/DarkSoulsII/executioners_chariot.jpg";
import SkeletonLords from "../../assets/images/DarkSoulsII/skeleton_lords.jpg";
import CovetousDemon from "../../assets/images/DarkSoulsII/covetous_demon.jpg";
import MythaBanefulQueen from "../../assets/images/DarkSoulsII/mytha_baneful_queen.jpg";
import RoyalRatVanguard from "../../assets/images/DarkSoulsII/royal_rat_vanguard.jpg";
import TheRotten from "../../assets/images/DarkSoulsII/the_rotten.jpg";
import ScorpionessNajka from "../../assets/images/DarkSoulsII/scorpioness_najka.jpg";
import RoyalRatAuthority from "../../assets/images/DarkSoulsII/royal_rat_authority.jpg";
import ProwlingMagus from "../../assets/images/DarkSoulsII/prowling_magus.jpg";
import DukesDearFreya from "../../assets/images/DarkSoulsII/dukes_dear_freya.jpg";
import SmelterDemon from "../../assets/images/DarkSoulsII/smelter_demon.jpg";
import OldIronKing from "../../assets/images/DarkSoulsII/old_iron_king.jpg";
import Dragonriders from "../../assets/images/DarkSoulsII/dragonriders.jpg";
import LookingGlassKnight from "../../assets/images/DarkSoulsII/looking_glass_knight.jpg";
import DemonOfSong from "../../assets/images/DarkSoulsII/demon_of_song.jpg";
import VelstadtRoyalAegis from "../../assets/images/DarkSoulsII/velstadt_royal_aegis.jpg";
import GuardianDragon from "../../assets/images/DarkSoulsII/guardian_dragon.jpg";
import AncientDragon from "../../assets/images/DarkSoulsII/ancient_dragon.jpg";
import GiantLord from "../../assets/images/DarkSoulsII/giant_lord.jpg";
import ElenaSquallidQueen from "../../assets/images/DarkSoulsII/elena_squallid_queen.jpg";
import SinhSlumberingDragon from "../../assets/images/DarkSoulsII/sinh_slumbering_dragon.jpg";
import GraverobberAncientSoldierCerah from "../../assets/images/DarkSoulsII/graverobber_ancient_soldier_cerah.jpg";
import SmelterDemonII from "../../assets/images/DarkSoulsII/smelter_demon_ii.jpg";
import FumeKnight from "../../assets/images/DarkSoulsII/fume_knight.jpg";
import SirAlonne from "../../assets/images/DarkSoulsII/sir_alonne.jpg";
import AavaKingsPet from "../../assets/images/DarkSoulsII/aava_kings_pet.jpg";
import LudAndZellen from "../../assets/images/DarkSoulsII/lud_and_zellen.jpg";
import BurntIvoryKing from "../../assets/images/DarkSoulsII/burnt_ivory_king.jpg";
import Darklurker from "../../assets/images/DarkSoulsII/darklurker.jpg";
import Vendrick from "../../assets/images/DarkSoulsII/vendrick.jpg";
import ThroneWatcherAndDefender from "../../assets/images/DarkSoulsII/throne_watcher_and_defender.jpg";
import Nashandra from "../../assets/images/DarkSoulsII/nashandra.jpg";
import AldiaScholarOfTheFirstSin from "../../assets/images/DarkSoulsII/aldia_scholar_of_the_first_sin.jpg";
import confetti from "canvas-confetti";

const baseGameBosses = [
  { name: "last giant", image: LastGiant, emoji: "👹" },
  { name: "the pursuer", image: ThePursuer, emoji: "🛡️" },
  { name: "iron dragonslayer", image: IronDragonslayer, emoji: "🗡️" },
  { name: "dragonrider", image: Dragonrider, emoji: "🐉" },
  { name: "flexile sentry", image: FlexileSentry, emoji: "⚔️" },
  { name: "ruin sentinels", image: RuinSentinels, emoji: "👹" },
  { name: "belfry gargoyles", image: BelfryGargoyles, emoji: "🔔" },
  { name: "the lost sinner", image: TheLostSinner, emoji: "🔥" },
  { name: "executioner's chariot", image: ExecutionersChariot, emoji: "🚪" },
  { name: "skeleton lords", image: SkeletonLords, emoji: "💀" },
  { name: "covetous demon", image: CovetousDemon, emoji: "🐍" },
  { name: "mytha, baneful queen", image: MythaBanefulQueen, emoji: "👑" },
  { name: "royal rat vanguard", image: RoyalRatVanguard, emoji: "🐀" },
  { name: "the rotten", image: TheRotten, emoji: "🪓" },
  { name: "scorpioness najka", image: ScorpionessNajka, emoji: "🦂" },
  { name: "royal rat authority", image: RoyalRatAuthority, emoji: "🐀" },
  { name: "prowling magus and congregation", image: ProwlingMagus, emoji: "🔮" },
  { name: "duke's dear freya", image: DukesDearFreya, emoji: "🕷️" },
  { name: "smelter demon", image: SmelterDemon, emoji: "🔥" },
  { name: "old iron king", image: OldIronKing, emoji: "🛡️" },
  { name: "dragonriders", image: Dragonriders, emoji: "🐉" },
  { name: "looking glass knight", image: LookingGlassKnight, emoji: "🛡️" },
  { name: "demon of song", image: DemonOfSong, emoji: "🎵" },
  { name: "velstadt, the royal aegis", image: VelstadtRoyalAegis, emoji: "🛡️" },
  { name: "guardian dragon", image: GuardianDragon, emoji: "🐉" },
  { name: "ancient dragon", image: AncientDragon, emoji: "🐉" },
  { name: "giant lord", image: GiantLord, emoji: "👹" },
  { name: "vendrick", image: Vendrick, emoji: "🛡️" },
  { name: "throne watcher and defender", image: ThroneWatcherAndDefender, emoji: "⚔️" },
  { name: "nashandra", image: Nashandra, emoji: "💀" },
  
];

const dlcBosses = [
  { name: "elena, squallid queen", image: ElenaSquallidQueen, emoji: "👑" },
  { name: "sinh, the slumbering dragon", image: SinhSlumberingDragon, emoji: "🐉" },
  { name: "graverobber, ancient soldier, cerah", image: GraverobberAncientSoldierCerah, emoji: "⚔️" },
  { name: "smelter demon ii", image: SmelterDemonII, emoji: "🔥" },
  { name: "fume knight", image: FumeKnight, emoji: "🗡️" },
  { name: "sir alonne", image: SirAlonne, emoji: "⚔️" },
  { name: "aava, the king's pet", image: AavaKingsPet, emoji: "🐾" },
  { name: "lud and zellen", image: LudAndZellen, emoji: "🐺" },
  { name: "burnt ivory king", image: BurntIvoryKing, emoji: "🔥" },
  { name: "darklurker", image: Darklurker, emoji: "🌑" },
  { name: "aldia, scholar of the first sin", image: AldiaScholarOfTheFirstSin, emoji: "📜" },
];

const DarkSoulsII = () => {
  const navigate = useNavigate();
  const [deathCounts, setDeathCounts] = useState(() => JSON.parse(Cookies.get("darkSoulsIIDeathCounts") || "{}"));
  const [dlcDeathCounts, setDlcDeathCounts] = useState(() => JSON.parse(Cookies.get("darkSoulsIIDlcDeathCounts") || "{}"));
  const [defeatedBosses, setDefeatedBosses] = useState(() => JSON.parse(Cookies.get("darkSoulsIIDefeatedBosses") || "[]"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBoss, setSelectedBoss] = useState(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isGlobalResetModalOpen, setIsGlobalResetModalOpen] = useState(false);
  const [isDlc, setIsDlc] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    Cookies.set("darkSoulsIIDeathCounts", JSON.stringify(deathCounts), { expires: 365 });
  }, [deathCounts]);

  useEffect(() => {
    Cookies.set("darkSoulsIIDlcDeathCounts", JSON.stringify(dlcDeathCounts), { expires: 365 });
  }, [dlcDeathCounts]);

  useEffect(() => {
    Cookies.set("darkSoulsIIDefeatedBosses", JSON.stringify(defeatedBosses), { expires: 365 });
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
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedBoss) return;
  
      if (e.code === "Space") {
        e.preventDefault(); // Prevent the default action for the space key (e.g., scrolling down)
        adjustCount(selectedBoss.name, 1);
      } else if (e.key === "d" || e.key === "D") {
        adjustCount(selectedBoss.name, -1);
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedBoss]);
  
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
          ? "DARK SOULS II DLC BOSS TRACKER"
          : "DARK SOULS II BOSS TRACKER"}
      </h1>
      <button className={styles.homeButton} onClick={() => navigate("/")}>
        BACK TO HOME
      </button>
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
export const darkSoulsIIProgress = () => {
  const storedDefeated = JSON.parse(Cookies.get("darkSoulsIIDefeatedBosses") || "[]");
  const totalBosses = baseGameBosses.length + dlcBosses.length;
  return (storedDefeated.length / totalBosses) * 100;
};

export default DarkSoulsII;
