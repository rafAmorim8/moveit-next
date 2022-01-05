import { useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';
import gsap from 'gsap';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round((currentExperience * 100 / experienceToNextLevel));
  useEffect(() => {
    gsap.from('.currentExperienceBar', { scaleX: 0, duration: 1, ease: 'circ' });
  }, [currentExperience]);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div className="currentExperienceBar" style={{ width: `${currentExperience > 0 ? percentToNextLevel : 0}%` }}>
          <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
            {currentExperience} xp
          </span>
        </div>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}