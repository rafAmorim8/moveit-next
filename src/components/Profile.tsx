import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/rafAmorim8.png" alt="Rafael Amorim" />
      <div>
        <strong>Rafael Amorim</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}