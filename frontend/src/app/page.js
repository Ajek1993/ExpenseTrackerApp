"use client";

import Navigation from "./(components)/Orb/Navigation/Navigation";
import Orb from "./(components)/Orb/Orb";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(1);
  return (
    <>
      <Orb />
      <div className={styles.mainLayout}>
        <Navigation active={active} setActive={setActive} />
        {/* <div className={styles.innerLayout}></div> */}
      </div>
    </>
  );
}
