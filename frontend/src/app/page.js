import Orb from "./(components)/Orb/Orb";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Orb />
      <div className={styles.mainLayout}>
        {/* <div className={styles.innerLayout}></div> */}
      </div>
    </>
  );
}
