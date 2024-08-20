import React, { useState } from 'react';
import styles from './Footer.module.css';
import SoulTrackerLogo from "../assets/images/MainPage/soul-tracker-logo.png";
import GitHubIcon from "../assets/images/MainPage/githublogo.png";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case 'About':
        return (
          <div>
            <h2>About Us</h2>
            <p>Welcome to Soul Tracker! We specialize in tracking your progress in challenging games like Soulslike titles and more.</p>
          </div>
        );
      case 'Contact':
        return (
          <div>
            <h2>Contact Us</h2>
            <p>No option yet!</p>
          </div>
        );
      case 'Privacy Policy':
        return (
          <div>
            <h2>Privacy Policy</h2>
            <p>Your privacy is important to us. We do not collect personal data without your consent and we ensure your information is kept secure.</p>
          </div>
        );
      case 'Terms of Service':
        return (
          <div>
            <h2>Terms of Service</h2>
            <p>By using Soul Tracker, you agree to our terms of service. Please make sure to review them carefully.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoContainer}>
          <img src={SoulTrackerLogo} alt="Soul Tracker Logo" className={styles.logo} />
        </div>
        <div className={styles.links}>
          <button className={styles.footerLink} onClick={() => openModal('About')}>About</button>
          <button className={styles.footerLink} onClick={() => openModal('Contact')}>Contact</button>
          <button className={styles.footerLink} onClick={() => openModal('Privacy Policy')}>Privacy Policy</button>
          <button className={styles.footerLink} onClick={() => openModal('Terms of Service')}>Terms of Service</button>
        </div>
        <div className={styles.socials}>
          <a href="https://github.com/Joshua551502" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Soul Tracker. All rights not reserved.</p>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>&times;</button>
            {renderModalContent()}
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
