"use client";

import Navigation from "./(components)/Orb/Navigation/Navigation";
import Orb from "./(components)/Orb/Orb";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
    }
  };
  return (
    <>
      <Orb />
      <div className={styles.mainLayout}>
        <Navigation active={active} setActive={setActive} />
        <main className={styles.main_container}>{displayData}</main>
        {/* <div className={styles.innerLayout}></div> */}
      </div>
    </>
  );
}
