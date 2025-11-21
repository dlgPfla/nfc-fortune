// src/pages/FortunePage.tsx
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import styles from "../styles/FortunePage.module.css";
import fortunes from "../data/fortunes.json"; // 🔹 JSON import

type Fortune = {
  id: number;
  score: number;
  mainText: string;
  routineText: string;
  imageSrc: string;   // 🔹 추가
};

const randomIndex = Math.floor(Math.random() * fortunes.length);

export default function FortunePage() {
  const base: Fortune = fortunes[randomIndex];

  // 공통으로 쓰는 값들 + JSON 값 합치기
  const fortune = {
    ...base,
    routineTitle: "오늘의 행운의 루틴은?",
    bottomCaption:
      "오늘의 운세가 궁금한 당신,\n그렇다면 오늘 세상에 어떤 소식이 흘러오는지 궁금하지는 않나요?",
    
  };

  return (
    <div className={styles.viewport}>
      <div className={styles.container}>
        <Header />

        <section className={styles.scoreSection}>
          <div className={styles.scoreBox}>
            <span className={styles.scoreLabel}>운세 점수</span>
            <div className={styles.scoreBarWrapper}>
              <ProgressBar score={fortune.score} />
            </div>
            <span className={styles.scoreValue}>{fortune.score}/100</span>
          </div>
        </section>

        <section className={styles.contentSection}>
          <p className={styles.smallQuestion}>오늘의 운세는?</p>

          {/* mainText는 줄바꿈 없이, CSS가 알아서 줄바꿈 */}
          <h1 className={styles.mainFortune}>{fortune.mainText}</h1>

          <div className={styles.divider} />

          <p className={styles.routineTitle}>{fortune.routineTitle}</p>
          <p className={styles.routineText}>{fortune.routineText}</p>

          <img
            src={fortune.imageSrc}
            alt="운세 일러스트"
            className={styles.illustration}
          />

          <p className={styles.bottomCaption}>
            오늘의 운세가 궁금한 당신,
            <br />
            그렇다면 오늘 <span className={styles.emphasis}>세상</span>에 어떤
            <span className={styles.emphasis}> 소식 </span>
            이 흘러오는지 궁금하지는 않나요?
          </p>

          <button className={styles.instagramButton}>
            <span className={styles.instagramIcon}>
              <img src="/images/NIEdu_logo.svg" alt="" />
            </span>
            NIEdu 인스타 방문하기
          </button>

          <div className={styles.lineThin}></div>
          <div className={styles.lineThick}></div>
        </section>
      </div>
    </div>
  );
}
