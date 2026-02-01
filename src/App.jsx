import React from "react";
import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import Doc from "#components/Doc";
import Terminal from "#windows/Terminal";
import Safari from "#windows/Safari";
import Resume from "#windows/Resume";
import Finder from "#windows/Finder";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Text from "#windows/Text";
import Image from "#windows/Image";
import Contact from "#windows/Contact";
import Home from "#components/Home";
import Photos from "#windows/Photos";
import Archive from "#windows/Archive";
import { initTheme } from "#store/theme";
gsap.registerPlugin(Draggable);

initTheme();

const App = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <Doc />
      <Home />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Archive />
    </>
  );
};

export default App;
