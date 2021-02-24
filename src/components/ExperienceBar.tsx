import gsap from 'gsap';
import { useEffect } from 'react';

export function ExperienceBar() {
  useEffect(() => {
    gsap.from('.current-experience-bar', { scaleX: 0, duration: 1, ease: 'circ' });
  }, []);

  return (
    <header className="experience-bar">
      <span>0 xp</span>
      <div>
        <div className="current-experience-bar" style={{ width: '50%' }}>
          <span className="current-experience" style={{ left: '50%' }}>
            300 xp
          </span>
        </div>
      </div>
      <span>600 xp</span>
    </header>
  );
}