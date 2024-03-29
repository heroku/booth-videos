import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";
import ms from "ms";
import { VideoLanguage } from "./types";
import dukeImg from "./images/duke.png";
import pythonImg from "./images/python.png";
import "./EasterEgg.scss";

// Keep this in sync with whatever width is defined in CSS for the easter egg images
const IMAGE_WIDTH = 100;

const random = (min: number, max: number) => {
  if (min > max) {
    [min, max] = [max, min];
  }
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
  Left = "left",
  Right = "right"
}

function randomEnum<T>(anEnum: T): T[keyof T] {
  const enumValues = (Object.values(anEnum) as unknown) as T[keyof T][];
  return enumValues[random(0, enumValues.length - 1)];
}

const getStyleFromPosition = (position: Position) => {
  // Keep the image this far from the edge
  const gutterFromEdge = 20;

  // If the image is on top or bottom, the left position is randomized
  // If its on the sides, then the top is randomized
  const stylePosition =
    position === Position.Top || position === Position.Bottom
      ? Position.Left
      : Position.Top;

  // End position is calulated by the window and image dimensions
  const end =
    stylePosition === Position.Left
      ? window.innerWidth - gutterFromEdge - IMAGE_WIDTH
      : window.innerHeight - gutterFromEdge - IMAGE_WIDTH;

  return {
    [stylePosition]: random(gutterFromEdge, end)
  };
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
