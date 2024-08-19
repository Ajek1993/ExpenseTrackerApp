import React from "react";
import styles from "./Incomes.module.css";
import { useGlobalContext } from "@/app/(context)/globalContext";
import Form from "../Form/Form";

export default function Incomes() {
  const { addIncome } = useGlobalContext();
  return (
    <div className={styles.innerLayout}>
      <h2>Przychody</h2>

      <div className="incomes-content">
        <div className="form-container">
          <Form />
        </div>
        <div className="incomes"></div>
      </div>
    </div>
  );
}
