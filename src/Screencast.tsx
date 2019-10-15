import React, { useState } from "react";
import { MalibuIcon } from "@heroku/react-malibu";
import BlobVideo from "./BlobVideo";
import { useHistory } from "react-router-dom";
import { VideosConfig, VideoLanguage } from "./types";
import { ReactComponent as Logo } from "./logo.svg";
import "./Screencast.css";

// TODO: scroll video section into view

const LANGUAGES: Record<VideoLanguage, string> = {
  node: "Node",
  ruby: "Ruby",
  java: "Java",
  php: "PHP",
  python: "Python",
  go: "Go"
};

const LongPressLogo: React.FC = () => {
  const history = useHistory();

  let timer: number;
  function onLongPress() {
    timer = window.setTimeout(() => {
      // history.push("/");
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
  languages: string[];
  activeLanguage: string;
  onLanguageChange: (lang: string) => void;
}
const ScreencastLanguagesList: React.FC<ScreencastLanguagesListProps> = ({
  languages,
  activeLanguage,
  onLanguageChange
}) => (
  <div className="screencast-languages-list">
    {languages.map(lang => (
      <a
        href="#"
        onClick={() => {
          onLanguageChange(lang);
        }}
        className={`js-language-switcher screencast-language${
          activeLanguage === lang ? " active" : ""
        }`}
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
      </a>
    ))}
  </div>
);

interface Props {
  config: VideosConfig;
}
const Screencast: React.FC<Props> = ({ config }) => {
  const [
    { activeSection, activeVideo, activeLanguageVideo },
    setState
  ] = useState({
    activeSection: config.sections[0],
    activeVideo: config.sections[0].videos[0],
    activeLanguageVideo: config.sections[0].videos[0].videos[0]
  });

  function availableLanguages() {
    const languages: string[] = [];
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
                  className={
                    activeSection.name === section.name &&
                    activeVideo.name === video.name
                      ? "sidebar-video-name playing"
                      : "sidebar-video-name"
                  }
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
          onLanguageChange={(lang: string) => {
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
