import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../assets/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../data/data";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      {/*logo*/}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          AFRI <span>RASISING </span>Ltd
        </span>
      </div>
      {/*menu*/}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menu-item active" : "menu-item"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.name}</span>
            </div>
          );
        })}

        <div className="menu-item">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
