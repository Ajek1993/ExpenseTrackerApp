import React from "react";
import styles from "./Incomes.module.css";

export default function Incomes() {
  return (
    <div className={styles.innerLayout}>
      <h2>Incomes</h2>

      <div className="incomes-content">
        <div className="form-container"></div>
        <div className="incomes"></div>
      </div>
    </div>
  );
}
