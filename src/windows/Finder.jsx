import WindowControls from "#components/WindowControls";
import { locations } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import useLocationStore from "#store/location";
import { Search } from "lucide-react";
import React from "react";
import clsx from "clsx";
import useWindowStore from "#store/window";

const Finder = () => {
  const { activeLocation, setActiveLocation, resetActiveLocation } =
    useLocationStore();

  const { openWindow } = useWindowStore();

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favourites</h3>
            <ul>
              {Object.values(locations).map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setActiveLocation(item);
                  }}
                  className={clsx(
                    activeLocation && item.id === activeLocation.id
                      ? "active"
                      : "not-active"
                  )}
                >
                  <img src={item.icon} alt={item.name} className="w-4" />
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>My Projects</h3>
            <ul>
              {locations.work.children.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setActiveLocation(item)}
                  className={clsx(
                    activeLocation && item.id === activeLocation.id
                      ? "active"
                      : "not-active"
                  )}
                >
                  <img src={item.icon} alt={item.name} className="w-4" />
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="content">
          {activeLocation?.children?.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = windowWrapper(Finder, "finder");

export default FinderWindow;
