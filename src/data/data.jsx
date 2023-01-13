import {
  UilEstate,
  UilClipboard,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

//sidebar data

export const SidebarData = [
  {
    icon: UilEstate,
    name: "Operation",
  },
  {
    icon: UilClipboard,
    name: "Jobs",
  },
  {
    icon: UilUsersAlt,
    name: "Clients",
  },
  {
    icon: UilPackage,
    name: "Trucks",
  },
  {
    icon: UilPackage,
    name: "Finance",
  },
  {
    icon: UilChart,
    name: "Analytics",
  },
];

export const OperationCardsData = [
  {
    title: "Client",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Client",
        data: [32, 33, 34, 35, 36],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 70,
    value: "25,970",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [32, 33, 34, 35, 36],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 70,
    value: "25,970",
    png: UilSignOutAlt,
    series: [
      {
        name: "Expenses",
        data: [32, 33, 34, 35, 36],
      },
    ],
  },
];
