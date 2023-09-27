import React from "react";
import {MenuIcon} from "../assets/svg/icons";
import menu from "../assets/icons/homeIcon.png";
import task from "../assets/icons/taskIcon.png";

export default function Sidebar() {
  return (
    <aside className="w-[93px] shadow-[0px_4px_23px_0px_rgba(0,0,0,0.05)] h-full py-10 flex flex-col items-center">
      <button className="mb-10">
        <MenuIcon />
      </button>

      <nav>
        <ul className="space-y-8">
          <li>
            <a href="#">
              <img src={menu} alt="menu icon" width={25} height={25} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={task} alt="menu icon" width={25} height={25} />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
