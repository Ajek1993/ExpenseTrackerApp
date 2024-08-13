import React from "react";
import styles from "./Navigation.module.css";
import Image from "next/image";
import { menuItems, signout } from "@/app/(utils)/menuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation({ active, setActive }) {
  return (
    <nav className={styles.navigation}>
      <div className={styles.user_container}>
        <Image
          className={styles.user_icon}
          src="/avatar.png"
          alt="avatar"
          height={100}
          width={100}
        />
        <div className={styles.user_info}>
          <h2>Patrycjusz</h2>
          <p>Twoje środki</p>
        </div>
      </div>
      <ul className={styles.menu_items}>
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? styles.active : ""}
          >
            <FontAwesomeIcon icon={item.icon} height={20} />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div>
        <ul className={styles.menu_items}>
          {signout.map((item) => (
            <li key={item.id}>
              <FontAwesomeIcon icon={item.icon} height={20} />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
