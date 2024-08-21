import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import confetti from "canvas-confetti";
import styles from "./BlackMythWukong.module.css";
import Erlang from "../../assets/images/BlackMythWukong/erlang.jpg";
import Bullguard from "../../assets/images/BlackMythWukong/bullguard.jpg";
import WanderingWight from "../../assets/images/BlackMythWukong/wandering_wight.jpg";
import Guangzhi from "../../assets/images/BlackMythWukong/guangzhi.jpg";
import Lingxuzi from "../../assets/images/BlackMythWukong/lingxuzi.jpg";
import BawLiGuhhLang from "../../assets/images/BlackMythWukong/baw_li_guhh_lang.jpg";
import Guangmou from "../../assets/images/BlackMythWukong/guangmou.jpg";
import WhitecladNoble from "../../assets/images/BlackMythWukong/whiteclad_noble.jpg";
import BlackWindKing from "../../assets/images/BlackMythWukong/black_wind_king.jpg";
import BlackBearGuai from "../../assets/images/BlackMythWukong/black_bear_guai.jpg";
import ElderJinchi from "../../assets/images/BlackMythWukong/elder_jinchi.jpg";
import RedLoong from "../../assets/images/BlackMythWukong/red_loong.jpg";
import LangLiGuhhBaw from "../../assets/images/BlackMythWukong/lang_li_guhh_baw.jpg";
import EarthWolf from "../../assets/images/BlackMythWukong/earth_wolf.jpg";
import KingSecondPrince from "../../assets/images/BlackMythWukong/king_second_prince.jpg";
import FirstPrinceOfFlowingSands from "../../assets/images/BlackMythWukong/first_prince_of_flowing_sands.jpg";
import TigerVanguard from "../../assets/images/BlackMythWukong/tiger_vanguard.jpg";
import TigersAcolyte from "../../assets/images/BlackMythWukong/tigers_acolyte.jpg";
import StoneVanguard from "../../assets/images/BlackMythWukong/stone_vanguard.jpg";
import GoreEyeDaoist from "../../assets/images/BlackMythWukong/gore_eye_daoist.jpg";
import MotherOfStones from "../../assets/images/BlackMythWukong/mother_of_stones.jpg";
import ManInStone from "../../assets/images/BlackMythWukong/man_in_stone.jpg";
import YellowWindSage from "../../assets/images/BlackMythWukong/yellow_wind_sage.jpg";
import Shigandang from "../../assets/images/BlackMythWukong/shigandang.jpg";
import MadTiger from "../../assets/images/BlackMythWukong/mad_tiger.jpg";
import YellowRobedSquire from "../../assets/images/BlackMythWukong/yellow_robed_squire.jpg";
import TigerVanguardSecret from "../../assets/images/BlackMythWukong/tiger_vanguard_secret.jpg";
import Fuban from "../../assets/images/BlackMythWukong/fuban.jpg";
import BlackLoong from "../../assets/images/BlackMythWukong/black_loong.jpg";
import MacaqueChief1 from "../../assets/images/BlackMythWukong/macaque_chief_1.jpg";
import KangJinLoong from "../../assets/images/BlackMythWukong/kang_jin_loong.jpg";
import CaptainLotusVision from "../../assets/images/BlackMythWukong/captain_lotus_vision.jpg";
import CaptainWiseVoice from "../../assets/images/BlackMythWukong/captain_wise_voice.jpg";
import MacaqueChief2 from "../../assets/images/BlackMythWukong/macaque_chief_2.jpg";
import KangJinStar from "../../assets/images/BlackMythWukong/kang_jin_star.jpg";
import CyanLoong from "../../assets/images/BlackMythWukong/cyan_loong.jpg";
import ApramanaBat from "../../assets/images/BlackMythWukong/apramana_bat.jpg";
import ChenLoong from "../../assets/images/BlackMythWukong/chen_loong.jpg";
import YinTiger from "../../assets/images/BlackMythWukong/yin_tiger.jpg";
import NonWhite from "../../assets/images/BlackMythWukong/non_white.jpg";
import LangLiGuhhLang from "../../assets/images/BlackMythWukong/lang_li_guhh_lang.jpg";
import OldGinsengGuai from "../../assets/images/BlackMythWukong/old_ginseng_guai.jpg";
import NonAble from "../../assets/images/BlackMythWukong/non_able.jpg";
import GreenCappedMartialist from "../../assets/images/BlackMythWukong/green_capped_martialist.jpg";
import CaptainVoidIllusion from "../../assets/images/BlackMythWukong/captain_void_illusion.jpg";
import CaptainKalpaWave from "../../assets/images/BlackMythWukong/captain_kalpa_wave.jpg";
import NonPure from "../../assets/images/BlackMythWukong/non_pure.jpg";
import NonVoid from "../../assets/images/BlackMythWukong/non_void.jpg";
import MonkFromTheSea from "../../assets/images/BlackMythWukong/monk_from_the_sea.jpg";
import YellowbrowMacaqueChief from "../../assets/images/BlackMythWukong/yellowbrow_macaque_chief.jpg";
import TheSecondSister from "../../assets/images/BlackMythWukong/the_second_sister.jpg";
import ElderAmourworm from "../../assets/images/BlackMythWukong/elder_amourworm.jpg";
import VenomDaoist1 from "../../assets/images/BlackMythWukong/venom_daoist_1.jpg";
import CentipedeGuai from "../../assets/images/BlackMythWukong/centipede_guai.jpg";
import BuddhasRightHand from "../../assets/images/BlackMythWukong/buddhas_right_hand.jpg";
import BawLiGuhhBaw from "../../assets/images/BlackMythWukong/baw_li_guhh_baw.jpg";
import ZhuBajie from "../../assets/images/BlackMythWukong/zhu_bajie.jpg";
import VioletSpider from "../../assets/images/BlackMythWukong/violet_spider.jpg";
import CommanderBeetle from "../../assets/images/BlackMythWukong/commander_beetle.jpg";
import HundredEyedDaoistMaster from "../../assets/images/BlackMythWukong/hundred_eyed_daoist_master.jpg";
import Fungiwoman from "../../assets/images/BlackMythWukong/fungiwoman.jpg";
import VenomDaoist2 from "../../assets/images/BlackMythWukong/venom_daoist_2.jpg";
import Scorpionlord from "../../assets/images/BlackMythWukong/scorpionlord.jpg";
import DaoistMi from "../../assets/images/BlackMythWukong/daoist_mi.jpg";
import Duskveil from "../../assets/images/BlackMythWukong/duskveil.jpg";
import PaleAxeStalwart from "../../assets/images/BlackMythWukong/pale_axe_stalwart.jpg";
import BrownIronCart from "../../assets/images/BlackMythWukong/brown_iron_cart.jpg";
import GrayBronzeCart from "../../assets/images/BlackMythWukong/gray_bronze_cart.jpg";
import CrimsonSilverCart from "../../assets/images/BlackMythWukong/crimson_silver_cart.jpg";
import FatherOfStones from "../../assets/images/BlackMythWukong/father_of_stones.jpg";
import FastAsWindQuickAsFire from "../../assets/images/BlackMythWukong/fast_as_wind_quick_as_fire.jpg";
import FlintChief from "../../assets/images/BlackMythWukong/flint_chief.jpg";
import CloudyMistMistyCloud from "../../assets/images/BlackMythWukong/cloudy_mist_misty_cloud.jpg";
import KeeperOfFlamingMountains from "../../assets/images/BlackMythWukong/keeper_of_flaming_mountains.jpg";
import NineCappedLingzhiGuai from "../../assets/images/BlackMythWukong/nine_capped_lingzhi_guai.jpg";
import BawLangLang from "../../assets/images/BlackMythWukong/baw_lang_lang.jpg";
import TopTakesBottomBottomTakesTop from "../../assets/images/BlackMythWukong/top_takes_bottom_bottom_takes_top.jpg";
import RedBoyYakshaKing from "../../assets/images/BlackMythWukong/red_boy_yaksha_king.jpg";
import BishuiGoldenEyedBeast from "../../assets/images/BlackMythWukong/bishui_golden_eyed_beast.jpg";
import SupremeInspector from "../../assets/images/BlackMythWukong/supreme_inspector.jpg";
import PoisonChief1 from "../../assets/images/BlackMythWukong/poison_chief_1.jpg";
import PoisonChief2 from "../../assets/images/BlackMythWukong/poison_chief_1.jpg";
import WaterWoodBeast from "../../assets/images/BlackMythWukong/water_wood_beast.jpg";
import SonOfStones from "../../assets/images/BlackMythWukong/son_of_stones.jpg";
import LangBawBaw from "../../assets/images/BlackMythWukong/lang_baw_baw.jpg";
import GiantShigandang from "../../assets/images/BlackMythWukong/giant_shigandang.jpg";
import GoldArmoredRhino from "../../assets/images/BlackMythWukong/gold_armored_rhino.jpg.png";
import CloudtreadingDeer from "../../assets/images/BlackMythWukong/cloudtreading_deer.jpg";
import FengTailGeneral from "../../assets/images/BlackMythWukong/feng_tail_general.jpg";
import EmeraldArmedMantis from "../../assets/images/BlackMythWukong/emerald_armed_mantis.jpg";
import StoneMonkey from "../../assets/images/BlackMythWukong/stone_monkey.jpg";

const bosses = [
  { name: "Erlang, The Sacred Divinity", image: Erlang, emoji: "🙏" },
  { name: "Bullguard", image: Bullguard, emoji: "🐂" },
  { name: "Wandering Wight", image: WanderingWight, emoji: "👻" },
  { name: "Guangzhi", image: Guangzhi, emoji: "⚔️" },
  { name: "Lingxuzi", image: Lingxuzi, emoji: "👑" },
  { name: "Baw-Li-Guhh-Lang", image: BawLiGuhhLang, emoji: "🐍" },
  { name: "Guangmou", image: Guangmou, emoji: "⚔️" },
  { name: "Whiteclad Noble", image: WhitecladNoble, emoji: "🎩" },
  { name: "Black Wind King", image: BlackWindKing, emoji: "🌬️" },
  { name: "Black Bear Guai", image: BlackBearGuai, emoji: "🐻" },
  { name: "Elder Jinchi", image: ElderJinchi, emoji: "🧙" },
  { name: "The Red Loong", image: RedLoong, emoji: "🐉" },
  { name: "Lang-Li-Guhh-Baw", image: LangLiGuhhBaw, emoji: "🐺" },
  { name: "Earth Wolf", image: EarthWolf, emoji: "🌍" },
  { name: "King + Second Prince", image: KingSecondPrince, emoji: "👑" },
  { name: "First Prince Of Flowing Sands", image: FirstPrinceOfFlowingSands, emoji: "🏜️" },
  { name: "Tiger Vanguard", image: TigerVanguard, emoji: "🐯" },
  { name: "Tiger's Acolyte", image: TigersAcolyte, emoji: "🎒" },
  { name: "Stone Vanguard", image: StoneVanguard, emoji: "🗿" },
  { name: "Gore-Eye Daoist", image: GoreEyeDaoist, emoji: "👁️" },
  { name: "Mother Of Stones", image: MotherOfStones, emoji: "👵" },
  { name: "Man-In-Stone", image: ManInStone, emoji: "🗿" },
  { name: "Yellow Wind Sage", image: YellowWindSage, emoji: "💨" },
  { name: "Shigandang", image: Shigandang, emoji: "🧙" },
  { name: "Mad Tiger", image: MadTiger, emoji: "🐅" },
  { name: "Yellow-Robed Squire", image: YellowRobedSquire, emoji: "🧑‍🎨" },
  { name: '"Tiger Vanguard"', image: TigerVanguardSecret, emoji: "🐅" },
  { name: "Fuban", image: Fuban, emoji: "⚔️" },
  { name: "Black Loong", image: BlackLoong, emoji: "🐉" },
  { name: "Macaque Chief 1", image: MacaqueChief1, emoji: "🐵" },
  { name: "Kang-Jin Loong", image: KangJinLoong, emoji: "🐉" },
  { name: "Captain Lotus-Vision", image: CaptainLotusVision, emoji: "👁️" },
  { name: "Captain Wise-Voice", image: CaptainWiseVoice, emoji: "🗣️" },
  { name: "Macaque Chief 2", image: MacaqueChief2, emoji: "🐵" },
  { name: "Kang-Jin Star", image: KangJinStar, emoji: "⭐" },
  { name: "Cyan Loong", image: CyanLoong, emoji: "🐉" },
  { name: "Apramana Bat", image: ApramanaBat, emoji: "🦇" },
  { name: "Chen Loong", image: ChenLoong, emoji: "👲" },
  { name: "Yin Tiger", image: YinTiger, emoji: "🐯" },
  { name: "Non-White", image: NonWhite, emoji: "🚫" },
  { name: "Lang-Li-Guhh-Lang", image: LangLiGuhhLang, emoji: "🐍" },
  { name: "Old Ginseng Guai", image: OldGinsengGuai, emoji: "🌱" },
  { name: "Non-Able", image: NonAble, emoji: "🚫" },
  { name: "Green-Capped Martialist", image: GreenCappedMartialist, emoji: "🥋" },
  { name: "Captain Void-Illusion", image: CaptainVoidIllusion, emoji: "🎭" },
  { name: "Captain Kalpa-Wave", image: CaptainKalpaWave, emoji: "🌊" },
  { name: "Non-Pure", image: NonPure, emoji: "🚫" },
  { name: "Non-Void", image: NonVoid, emoji: "🚫" },
  { name: "Monk From The Sea", image: MonkFromTheSea, emoji: "🌊" },
  { name: "Yellowbrow + Macaque Chief", image: YellowbrowMacaqueChief, emoji: "🐵" },
  { name: "The Second Sister", image: TheSecondSister, emoji: "👧" },
  { name: "Elder Amourworm", image: ElderAmourworm, emoji: "🐛" },
  { name: "Venom Daoist 1", image: VenomDaoist1, emoji: "🐍" },
  { name: "Centipede Guai", image: CentipedeGuai, emoji: "🐛" },
  { name: "Buddha's Right Hand", image: BuddhasRightHand, emoji: "🖐️" },
  { name: "Baw-Li-Guhh-Baw", image: BawLiGuhhBaw, emoji: "🐍" },
  { name: "Zhu Bajie", image: ZhuBajie, emoji: "🐷" },
  { name: "Violet Spider", image: VioletSpider, emoji: "🕷️" },
  { name: "Commander Beetle", image: CommanderBeetle, emoji: "🪲" },
  { name: "Hundred-Eyed Daoist Master", image: HundredEyedDaoistMaster, emoji: "👁️" },
  { name: "Fungiwoman", image: Fungiwoman, emoji: "🍄" },
  { name: "Venom Daoist 2", image: VenomDaoist2, emoji: "🐍" },
  { name: "Scorpionlord", image: Scorpionlord, emoji: "🦂" },
  { name: "Daoist Mi", image: DaoistMi, emoji: "👨‍🦲" },
  { name: "Duskveil", image: Duskveil, emoji: "🌒" },
  { name: "Pale-Axe Stalwart", image: PaleAxeStalwart, emoji: "🪓" },
  { name: "Brown-Iron Cart", image: BrownIronCart, emoji: "🛒" },
  { name: "Gray-Bronze Cart", image: GrayBronzeCart, emoji: "🛒" },
  { name: "Crimson-Silver Cart", image: CrimsonSilverCart, emoji: "🛒" },
  { name: "Father Of Stones", image: FatherOfStones, emoji: "🗿" },
  { name: "Fast As Wind + Quick As Fire", image: FastAsWindQuickAsFire, emoji: "💨🔥" },
  { name: "Flint Chief", image: FlintChief, emoji: "🔥" },
  { name: "Cloudy Mist + Misty Cloud", image: CloudyMistMistyCloud, emoji: "☁️" },
  { name: "Keeper Of Flaming Mountains / Yin-Yang Fish", image: KeeperOfFlamingMountains, emoji: "🐉" },
  { name: "Nine-Capped Lingzhi Guai", image: NineCappedLingzhiGuai, emoji: "🍄" },
  { name: "Baw-Lang-Lang", image: BawLangLang, emoji: "🐍" },
  { name: "Top Takes Bottom + Bottom Takes Top", image: TopTakesBottomBottomTakesTop, emoji: "🔄" },
  { name: "Red Boy / Yaksha King", image: RedBoyYakshaKing, emoji: "👹" },
  { name: "Bishui Golden-Eyed Beast", image: BishuiGoldenEyedBeast, emoji: "👁️" },
  { name: "Supreme Inspector", image: SupremeInspector, emoji: "👮‍♂️" },
  { name: "Poison Chief 1", image: PoisonChief1, emoji: "☠️" },
  { name: "Poison Chief 2", image: PoisonChief2, emoji: "☠️" },
  { name: "Water-Wood Beast", image: WaterWoodBeast, emoji: "🌊🌳" },
  { name: "Son Of Stones", image: SonOfStones, emoji: "🗿" },
  { name: "Lang-Baw-Baw", image: LangBawBaw, emoji: "🐺" },
  { name: "Giant Shigandang", image: GiantShigandang, emoji: "🧙" },
  { name: "Gold Armored Rhino", image: GoldArmoredRhino, emoji: "🦏" },
  { name: "Cloudtreading Deer", image: CloudtreadingDeer, emoji: "🦌" },
  { name: "Feng-Tail General", image: FengTailGeneral, emoji: "🪗" },
  { name: "Emerald-Armed Mantis", image: EmeraldArmedMantis, emoji: "🦗" },
  { name: "Stone Monkey / The Great Sage's Broken Shell", image: StoneMonkey, emoji: "🐒" },
];

const BlackMythWukong = () => {
  const [deathCounts, setDeathCounts] = useState(() =>
    JSON.parse(Cookies.get("blackMythWukongDeathCounts") || "{}")
  );
  const [defeatedBosses, setDefeatedBosses] = useState(() =>
    JSON.parse(Cookies.get("blackMythWukongDefeatedBosses") || "[]")
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBoss, setSelectedBoss] = useState(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isGlobalResetModalOpen, setIsGlobalResetModalOpen] = useState(false);
  const navigate = useNavigate();

  const modalRef = useRef(null);

  useEffect(() => {
    Cookies.set("blackMythWukongDeathCounts", JSON.stringify(deathCounts), {
      expires: 365,
    });
  }, [deathCounts]);

  useEffect(() => {
    Cookies.set("blackMythWukongDefeatedBosses", JSON.stringify(defeatedBosses), {
      expires: 365,
    });
  }, [defeatedBosses]);

  const handleVictoryAchieved = () => {
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
        colors: ["#b8860b", "#8b0000", "#2e2e2e"], // Gold color scheme for victory
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
      <h1 className={styles.title}>BLACK MYTH WUKONG BOSS TRACKER</h1>
      <button className={styles.homeButton} onClick={() => navigate("/")}>
        BACK TO HOME
      </button>
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
                ? "UNDO ENEMY DEFEATED"
                : "ENEMY DEFEATED"}
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
            <button
              className={styles.modalButton}
              onClick={closeGlobalResetModal}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Export the progress calculation for use in the main page
export const blackMythWukongProgress = () => {
  const storedDefeated = JSON.parse(
    Cookies.get("blackMythWukongDefeatedBosses") || "[]"
  );
  const totalBosses = bosses.length;
  return (storedDefeated.length / totalBosses) * 100;
};

export default BlackMythWukong;
