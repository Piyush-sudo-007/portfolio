import WindowControls from "#components/WindowControls";
import windowWrapper from "#hoc/windowWrapper";
import React from "react";

const Archive = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="archive" />
        <h2>Archive</h2>
      </div>

      <div className="p-5 bg-white min-w-3xl">
        <h1 className="text-center">Archive is empty</h1>
      </div>
    </>
  );
};

const ArchiveWindow = windowWrapper(Archive, "archive");

export default ArchiveWindow;
