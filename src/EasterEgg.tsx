import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";
import ms from "ms";
import { VideoLanguage } from "./types";
import dukeImg from "./images/duke.png";
import pythonImg from "./images/python.png";
import "./EasterEgg.css";

const random = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const languageImages = {
  node: "",
  ruby: "",
  java: dukeImg,
  php: "",
  python: pythonImg,
  go: ""
};

enum Position {
  Top = "top",
  Bottom = "bottom",
  Left = "left"
}

function randomEnum<T>(anEnum: T): T[keyof T] {
  const enumValues = (Object.values(anEnum) as unknown) as T[keyof T][];
  return enumValues[random(0, enumValues.length - 1)];
}

const getStyleFromPosition = (position: Position) => {
  if (position === Position.Top) {
    return { left: random(20, window.innerWidth - 320) };
  } else if (position === Position.Bottom) {
    return {
      left: [
        random(20, 100),
        random(window.innerWidth - 420, window.innerWidth - 320)
      ][random(0, 1)]
    };
  } else if (position === Position.Left) {
    return {
      top: [
        random(20, 100),
        random(window.innerHeight - 220, window.innerHeight - 20)
      ][random(0, 1)]
    };
  }
};

interface EasterEggProps {
  language: VideoLanguage;
}
const EasterEgg: React.FC<EasterEggProps> = ({ language }) => {
  const imageSrc = languageImages[language];
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState(Position.Left);
  const nodeRef = useRef(document.createElement("div"));
  const languageRef = useRef("");

  // Whenever an animation ends on the easter egg node, set the state to false
  // which will trigger another animation to kick off another animation eventually
  useEffect(() => {
    const node = nodeRef.current;
    const listener = () => setShow(false);
    node.addEventListener("animationend", listener);
    return () => node.removeEventListener("animationend", listener);
  }, []);

  // Language changes should reset animation state
  useEffect(() => {
    if (languageRef.current !== language) {
      languageRef.current = language;
      setShow(false);
    }
  }, [language]);

  // Whenever the state is toggled off, a new animation will be triggered at a
  // future random time
  useEffect(() => {
    if (!show && imageSrc) {
      setPosition(randomEnum(Position));
      const timeout = setTimeout(
        () => setShow(true),
        random(ms("2m"), ms("4m"))
      );
      return () => clearTimeout(timeout);
    }
  }, [show, imageSrc]);

  return (
    <div
      ref={nodeRef}
      className={cx("easter-egg", position, language, { show })}
      style={getStyleFromPosition(position)}
    >
      {imageSrc && <img alt={language} src={imageSrc} />}
    </div>
  );
};

export default EasterEgg;
