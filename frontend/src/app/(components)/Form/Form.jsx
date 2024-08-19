import React, { useState } from "react";
import styles from "./Form.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "@/app/(context)/globalContext";
import Button from "../Button/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  const { addIncome } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
  };

  return (
    <form className={styles.income_form} onSubmit={handleSubmit}>
      <div className={styles.input_control}>
        <input
          className={styles.income_form_input}
          type="text"
          value={title}
          name="title"
          placeholder="Nazwa"
          onChange={handleInput("title")}
        />
      </div>
      <div className={styles.input_control}>
        <input
          className={styles.income_form_input}
          type="text"
          value={amount}
          name="amount"
          placeholder="Suma"
          onChange={handleInput("amount")}
        />
      </div>
      <div className={styles.input_control}>
        <DatePicker
          id="date"
          placeholderText="Podaj datę"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>
      <div className={`${styles.selects} ${styles.input_control}`}>
        <select
          className={styles.income_form_select}
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investiments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">Youtube</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className={styles.input_control}>
        <textarea
          className={styles.income_form_input}
          name="description"
          value={description}
          placeholder="Add A Reference"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
        ></textarea>
      </div>
      <div className="submit-btn">
        <Button
          name={"Add Income"}
          icon={faPlus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent"}
          color={"#fff"}
        />
      </div>
    </form>
  );
}
