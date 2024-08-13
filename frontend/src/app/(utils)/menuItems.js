import {
  faChartLine,
  faMoneyBillTransfer,
  faCreditCard,
  faMoneyBillTrendUp,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export const menuItems = [
  {
    id: 1,
    title: "Panel Główny",
    icon: faChartLine,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Zobacz Transakcje",
    icon: faMoneyBillTransfer,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Przychody",
    icon: faCreditCard,
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Wydatki",
    icon: faMoneyBillTrendUp,
    link: "/dashboard",
  },
];

export const signout = [
  {
    id: 1,
    title: "Wyloguj",
    icon: faRightFromBracket,
    link: "/dashboard",
  },
];
