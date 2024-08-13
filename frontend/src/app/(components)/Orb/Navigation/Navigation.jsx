import React from "react";
import styles from "./Navigation.module.css";
import Image from "next/image";
import { menuItems } from "@/app/(utils)/menuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="user-icon">
        <Image src="/avatar.png" alt="avatar" height={150} width={150} />
        <div>
          <h2>Johnny</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li key={item.id}>
            <FontAwesomeIcon icon={item.icon} height={20} />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
