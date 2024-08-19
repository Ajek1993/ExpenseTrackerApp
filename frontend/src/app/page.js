"use client";

import Dashboard from "./(components)/Dashboard/Dashboard";
import Expenses from "./(components)/Expenses/Expenses";
import Incomes from "./(components)/Incomes/Incomes";
import Navigation from "./(components)/Navigation/Navigation";
import Orb from "./(components)/Orb/Orb";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Incomes />;
      case 4:
        return <Expenses />;
      default:
        <Dashboard />;
    }
  };
  return (
    <>
      <Orb />
      <div className={styles.mainLayout}>
        <Navigation active={active} setActive={setActive} />
        <main className={styles.main_container}>{displayData()}</main>
      </div>
    </>
  );
}
