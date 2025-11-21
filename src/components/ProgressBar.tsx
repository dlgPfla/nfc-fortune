// src/components/ProgressBar.tsx
import styles from "../styles/ProgressBar.module.css";

type Props = {
  score: number; // 0 ~ 100
};

export default function ProgressBar({ score }: Props) {
  // 83점이면 8칸 정도 채우기
  const filledCount = Math.round(score / 10);

  return (
    <div className={styles.bar}>
      {Array.from({ length: 10 }).map((_, idx) => (
        <span
          key={idx}
          className={
            idx < filledCount ? styles.blockFilled : styles.blockEmpty
          }
        />
      ))}
    </div>
  );
}
