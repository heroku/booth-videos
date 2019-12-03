import React, { useState, useEffect, useRef } from "react";
import { MalibuIcon } from "@heroku/react-malibu";
import BlobVideo from "./BlobVideo";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import cx from "classnames";
import ms from "ms";
import { VideosConfig, VideoLanguage } from "./types";
import { ReactComponent as Logo } from "./logo.svg";
import "./Screencast.css";

// TODO: scroll video section into view

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const LANGUAGES: Record<VideoLanguage, string> = {
  node: "Node",
  ruby: "Ruby",
  java: "Java",
  php: "PHP",
  python: "Python",
  go: "Go"
};

const LongPressLogo: React.FC = () => {
  let timer: number;
  function onLongPress() {
    timer = window.setTimeout(() => {
      window.location.reload();
    }, 5000);
  }

  function onRelease() {
    window.clearTimeout(timer);
  }

  return (
    <Logo
      onTouchStart={onLongPress}
      onTouchEnd={onRelease}
      onMouseDown={onLongPress}
      onMouseUp={onRelease}
    />
  );
};

interface ScreencastLanguagesListProps {
  languages: VideoLanguage[];
  activeLanguage: VideoLanguage;
  onLanguageChange: (lang: VideoLanguage) => void;
}
const ScreencastLanguagesList: React.FC<ScreencastLanguagesListProps> = ({
  languages,
  activeLanguage,
  onLanguageChange
}) => (
  <div className="screencast-languages-list">
    {languages.map(lang => (
      <button
        onClick={() => {
          onLanguageChange(lang);
        }}
        className={cx("js-language-switcher", "screencast-language", {
          active: activeLanguage === lang
        })}
        data-language={lang}
        key={lang}
      >
        <span className="video-marker" />
        <MalibuIcon
          name={`marketing-language-${lang}-48`}
          extraClasses="icon"
        />
        {LANGUAGES.hasOwnProperty(lang)
          ? LANGUAGES[lang as VideoLanguage]
          : lang}
      </button>
    ))}
  </div>
);

interface EasterEggProps {
  language: VideoLanguage;
}
const EasterEgg: React.FC<EasterEggProps> = ({ language }) => {
  const [show, setShow] = useState(false);
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
    if (!show) {
      const timeout = setTimeout(
        () => setShow(true),
        random(ms("2m"), ms("4m"))
      );
      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <div ref={nodeRef} className={cx("easter-egg", language, { show })}></div>
  );
};

interface Props {
  config: VideosConfig;
}
const Screencast: React.FC<Props> = ({ config }) => {
  const defaultLanguage = qs.parse(useLocation().search)
    .default_lang as VideoLanguage;
  const [
    { activeSection, activeVideo, activeLanguageVideo },
    setState
  ] = useState({
    activeSection: config.sections[0],
    activeVideo: config.sections[0].videos[0],
    activeLanguageVideo: findDefaultLanguageVideo()
  });

  function findDefaultLanguageVideo() {
    const videos = config.sections[0].videos[0].videos;
    const defaultLanguageVideo =
      defaultLanguage && videos.find(v => v.language === defaultLanguage);
    return defaultLanguageVideo || videos[0];
  }

  function availableLanguages() {
    const languages: VideoLanguage[] = [];
    activeVideo.videos.forEach(video => {
      languages.push(video.language);
    });
    return Array.from(new Set(languages));
  }

  function playNextVideo() {
    const indexOfActiveVideo = activeSection.videos.findIndex(
      v => v.name === activeVideo.name
    );
    if (indexOfActiveVideo === activeSection.videos.length - 1) {
      const indexOfActiveSection = config.sections.findIndex(
        s => s.name === activeSection.name
      );
      if (indexOfActiveSection === config.sections.length - 1) {
        setState({
          activeSection: config.sections[0],
          activeVideo: config.sections[0].videos[0],
          activeLanguageVideo: config.sections[0].videos[0].videos.filter(
            v => v.language === activeLanguageVideo.language
          )[0]
        });
      } else {
        setState({
          activeSection: config.sections[indexOfActiveSection + 1],
          activeVideo: config.sections[indexOfActiveSection + 1].videos[0],
          activeLanguageVideo: config.sections[
            indexOfActiveSection + 1
          ].videos[0].videos.filter(
            v => v.language === activeLanguageVideo.language
          )[0]
        });
      }
    } else {
      setState({
        activeSection,
        activeVideo: activeSection.videos[indexOfActiveVideo + 1],
        activeLanguageVideo: activeSection.videos[
          indexOfActiveVideo + 1
        ].videos.filter(v => v.language === activeLanguageVideo.language)[0]
      });
    }
  }

  return (
    <div className="container">
      <section className="screencast">
        {config.languageEasterEggs[activeLanguageVideo.language] && (
          <EasterEgg language={activeLanguageVideo.language} />
        )}
        <div className="wrapper">
          <h2 className="video-name">{activeVideo.name}</h2>
          <div className="screencast-container has-spinner">
            <div className="spinner spinner-centered">
              <i className="spinner__dot spinner__dot--one" />
              <i className="spinner__dot spinner__dot--two" />
              <i className="spinner__dot" />
            </div>
            <div className="video-wrapper video-wrapper-dark">
              <BlobVideo
                videoUrl={activeLanguageVideo.url}
                posterUrl={activeLanguageVideo.posterUrl}
                onEnded={() => {
                  playNextVideo();
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sidebar">
        <ol className="video-chapters js-chapter-switcher">
          {config.sections.map(section => (
            <li key={section.name} className="section-title">
              {section.name}
              {section.videos.map(video => (
                <span
                  key={`${section.name}${video.name}`}
                  className={cx("sidebar-video-name", {
                    playing:
                      activeSection.name === section.name &&
                      activeVideo.name === video.name
                  })}
                >
                  <span className="video-marker" />
                  <a
                    data-target={video.name}
                    href={`#${video.name}`}
                    data-tooltip={video.name}
                    onClick={() => {
                      setState({
                        activeSection: section,
                        activeVideo: video,
                        activeLanguageVideo: video.videos.filter(
                          v => v.language === activeLanguageVideo.language
                        )[0]
                      });
                    }}
                  >
                    <span>{video.name}</span>
                  </a>
                </span>
              ))}
            </li>
          ))}
        </ol>
      </section>
      <section className="footer">
        <ScreencastLanguagesList
          activeLanguage={activeLanguageVideo.language}
          languages={availableLanguages()}
          onLanguageChange={(lang: VideoLanguage) => {
            const newLanguageVideo = activeVideo.videos.filter(
              v => v.language === lang
            );
            if (newLanguageVideo.length > 0) {
              setState({
                activeSection,
                activeVideo,
                activeLanguageVideo: newLanguageVideo[0]
              });
            }
          }}
        />
      </section>
      <section className="footer-logo">
        <LongPressLogo />
      </section>
    </div>
  );
};

export default Screencast;
