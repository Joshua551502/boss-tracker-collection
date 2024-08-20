import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import styles from "./EldenRing.module.css";
import TreeSentinel from "@eldenRingImages/tree_sentinel.jpg";
import Margit from "@eldenRingImages/margit.jpg";
import Godrick from "@eldenRingImages/godrick.jpg";
import RedWolf from "@eldenRingImages/red_wolf.jpg";
import Rennala from "@eldenRingImages/rennala.jpg";
import Radahn from "@eldenRingImages/radahn.jpg";
import Morgott from "@eldenRingImages/morgott.jpg";
import FireGiant from "@eldenRingImages/fire_giant.jpg";
import GodskinDuo from "@eldenRingImages/godskin_duo.jpg";
import Maliketh from "@eldenRingImages/maliketh.jpg";
import HoarahLoux from "@eldenRingImages/hoarah_loux.jpg";
import Radagon from "@eldenRingImages/radagon.jpg";
import DivineBeastDancingLion from "@eldenRingImages/divine_beast_dancing_lion.jpg";
import Rellana from "@eldenRingImages/rellana.jpg";
import PutrescentKnight from "@eldenRingImages/putrescent_knight.jpg";
import MessmerTheImpaler from "@eldenRingImages/messmer_the_impaler.jpg";
import CommanderGaius from "@eldenRingImages/commander_gaius.jpg";
import ScadutreeAvatar from "@eldenRingImages/scadutree_avatar.jpg";
import MetyrMotherOfFingers from "@eldenRingImages/metyr_mother_of_fingers.jpg";
import RominaSaintOfTheBud from "@eldenRingImages/romina_saint_of_the_bud.jpg";
import MidraLordOfFrenziedFlame from "@eldenRingImages/midra_lord_of_frenzied_flame.jpg";
import BayleTheDread from "@eldenRingImages/bayle_the_dread.jpg";
import PromisedConsortRadahn from "@eldenRingImages/promised_consort_radahn.jpg";
import DraconicTreeSentinel from "@eldenRingImages/draconic_tree_sentinel.jpg";
import Mogh from "@eldenRingImages/mohg.jpg";
import Malenia from "@eldenRingImages/malenia.jpg";
import GoldenOrder from "@eldenRingImages/golden_order_logo.jpg";
import CrucibleKnight from "@eldenRingImages/crucible_knight.jpg";
import Magma from "@eldenRingImages/magma.jpg";
import FallingStar from "@eldenRingImages/falling_star.jpg";
import Godfrey from "@eldenRingImages/godfrey.jpg";
import SirGideon from "@eldenRingImages/sir_gideon.jpg";
import GoldenHippo from "@eldenRingImages/golden_hippo.jpeg";
import confetti from "canvas-confetti";

const baseGameBosses = [
  { name: "tree sentinel", image: TreeSentinel, emoji: "🐴" },
  { name: "margit, the fell omen", image: Margit, emoji: "🪓" },
  { name: "godrick the grafted", image: Godrick, emoji: "🦾" },
  { name: "red wolf of radagon", image: RedWolf, emoji: "🐺" },
  { name: "rennala, queen of the full moon", image: Rennala, emoji: "🌕" },
  { name: "crucible knight", image: CrucibleKnight, emoji: "💀" },
  { name: "magma wyrm makar", image: Magma, emoji: "🌋" },
  { name: "starscourge radahn", image: Radahn, emoji: "⭐" },
  { name: "full-grown fallingstar beast", image: FallingStar, emoji: "👹" },
  { name: "mogh, lord of blood", image: Mogh, emoji: "🩸" },
  { name: "draconic tree sentinel", image: DraconicTreeSentinel, emoji: "🐲" },
  { name: "godfrey, the first elden lord", image: Godfrey, emoji: "🤴" },
  { name: "morgott, the omen king", image: Morgott, emoji: "👑" },
  { name: "fire giant", image: FireGiant, emoji: "🔥" },
  { name: "godskin duo", image: GodskinDuo, emoji: "👥" },
  { name: "maliketh, the black blade", image: Maliketh, emoji: "⚔️" },
  { name: "malenia, blade of miquella", image: Malenia, emoji: "🌸" },
  {
    name: "sir gideon ofnir, the all-knowing",
    image: SirGideon,
    emoji: "📖",
  },
  {
    name: "hoarah loux (godfrey, first elden lord)",
    image: HoarahLoux,
    emoji: "🛡️",
  },
  {
    name: "radagon of the golden order and the elden beast",
    image: Radagon,
    emoji: "🐉",
  },
];

const dlcBosses = [
  {
    name: "divine beast dancing lion",
    image: DivineBeastDancingLion,
    emoji: "🦁",
  },
  { name: "rellana, twin moon knight", image: Rellana, emoji: "🌙" },
  { name: "golden hippopotamus", image: GoldenHippo, emoji: "🦛" },
  { name: "putrescent knight", image: PutrescentKnight, emoji: "💀" },
  { name: "messmer the impaler", image: MessmerTheImpaler, emoji: "🗡️" },
  { name: "commander gaius", image: CommanderGaius, emoji: "⚔️" },
  { name: "scadutree avatar", image: ScadutreeAvatar, emoji: "🌳" },
  {
    name: "metyr, mother of fingers",
    image: MetyrMotherOfFingers,
    emoji: "🖐️",
  },
  { name: "romina, saint of the bud", image: RominaSaintOfTheBud, emoji: "🌸" },
  {
    name: "midra, lord of frenzied flame",
    image: MidraLordOfFrenziedFlame,
    emoji: "🔥",
  },
  { name: "bayle the dread", image: BayleTheDread, emoji: "😱" },
  {
    name: "promised consort radahn",
    image: PromisedConsortRadahn,
    emoji: "🔮",
  },
];

const EldenRing = () => {
  const [deathCounts, setDeathCounts] = useState(() => JSON.parse(Cookies.get("eldenRingDeathCounts") || "{}"));
  const [dlcDeathCounts, setDlcDeathCounts] = useState(() => JSON.parse(Cookies.get("eldenRingDlcDeathCounts") || "{}"));
  const [defeatedBosses, setDefeatedBosses] = useState(() => JSON.parse(Cookies.get("eldenRingDefeatedBosses") || "[]"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBoss, setSelectedBoss] = useState(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isGlobalResetModalOpen, setIsGlobalResetModalOpen] = useState(false);
  const [isDlc, setIsDlc] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    Cookies.set("eldenRingDeathCounts", JSON.stringify(deathCounts), { expires: 365 });
  }, [deathCounts]);

  useEffect(() => {
    Cookies.set("eldenRingDlcDeathCounts", JSON.stringify(dlcDeathCounts), { expires: 365 });
  }, [dlcDeathCounts]);

  useEffect(() => {
    Cookies.set("eldenRingDefeatedBosses", JSON.stringify(defeatedBosses), { expires: 365 });
  }, [defeatedBosses]);

  const handleEnemySlain = () => {
    let updatedDefeatedBosses;
    if (defeatedBosses.includes(selectedBoss.name)) {
      updatedDefeatedBosses = defeatedBosses.filter((boss) => boss !== selectedBoss.name);
    } else {
      updatedDefeatedBosses = [...defeatedBosses, selectedBoss.name];
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffcc00', '#ffffff', '#121212'],
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
          ? "SHADOW OF THE ERDTREE BOSS TRACKER"
          : "ELDEN RING BOSS TRACKER"}
      </h1>

      <div className={styles.titleItems}>
        <button className={styles.toggleButton} onClick={() => setIsDlc(!isDlc)}>
          {isDlc ? "BASE GAME BOSSES" : "SHADOW OF THE ERDTREE BOSSES"}
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
      <div className={styles.buttonRow}>
        <button className={styles.resetButton2} onClick={openGlobalResetModal}>
          RESET ALL
        </button>
      </div>

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
            <div className={styles.buttonRow}>
              <button
                className={styles.enemySlainButton}
                onClick={handleEnemySlain}
              >
                {defeatedBosses.includes(selectedBoss.name)
                  ? "UNDO ENEMY SLAIN"
                  : "ENEMY SLAIN"}
              </button>
              <button className={styles.resetButton2} onClick={openResetModal}>
                RESET
              </button>
            </div>
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
export const eldenRingProgress = () => {
  const storedDefeated = JSON.parse(Cookies.get("eldenRingDefeatedBosses") || "[]");
  const totalBosses = baseGameBosses.length + dlcBosses.length;
  return (storedDefeated.length / totalBosses) * 100;
};

export default EldenRing;
