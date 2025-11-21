// src/components/Header.tsx
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* 맨 위 더블 라인 */}
      <div className={styles.doubleLine}>
        <div className={styles.line} />
        <div className={styles.line2} />
      </div>

      {/* 메인 타이틀 */}
      <h1 className={styles.title}>THE DAILY FORTUNE</h1>

      {/* credit 라인 + 텍스트 + 라인 */}
      <div className={styles.creditBlock}>
        <div className={styles.creditLine} />
        <p className={styles.credit}>Credit. NIEdu</p>
        <div className={styles.creditLine} />
        <div className={styles.line} />
      </div>
    </header>
  );
}
