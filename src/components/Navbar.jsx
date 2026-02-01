import React, { useEffect, useState } from "react";
import { navIcons, navLinks } from "#constants";
import dayjs from "dayjs";
import useWindowStore from "#store/window.js";
import useThemeStore from "#store/theme";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const { toggleTheme } = useThemeStore();

  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Piyush Dev's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id}>
              <p onClick={() => openWindow(type)}>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img, action }) => (
            <li key={id}>
              <img
                src={img}
                className="icon-hover cursor-pointer"
                alt={`icon-${id}`}
                onClick={action === "toggle-theme" ? toggleTheme : undefined}
              />
            </li>
          ))}
        </ul>

        <time>{time.format("ddd D MMM h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
