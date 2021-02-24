import gsap from 'gsap';
import { useEffect } from 'react';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  useEffect(() => {
    gsap.from('.currentExperienceBar', { scaleX: 0, duration: 1, ease: 'circ' });
  }, []);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div className="currentExperienceBar" style={{ width: '50%' }}>
          <span className={styles.currentExperience} style={{ left: '50%' }}>
            300 xp
          </span>
        </div>
      </div>
      <span>600 xp</span>
    </header>
  );
}