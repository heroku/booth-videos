import React, { useEffect } from "react";
import { MalibuIcon } from "@heroku/react-malibu";
import BlobVideo from "./BlobVideo";
import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";
import cx from "classnames";
import { VideosConfig, VideoLanguage, Downloads } from "./types";
import { ReactComponent as Logo } from "./logo.svg";
import { useHasDownloads } from "./useDownloads";
import useVideos from "./useVideos";
import EasterEgg from "./EasterEgg";
import "./Screencast.css";

// TODO: scroll video section into view

const languageTitles: Record<VideoLanguage, string> = {
  node: "Node",
  ruby: "Ruby",
  java: "Java",
  php: "PHP",
  python: "Python",
  go: "Go"
};

const LongPressLogo: React.FC = () => {
  const history = useHistory();

  let timer: number | null = null;
  function onLongPress() {
    timer = window.setTimeout(() => {
      history.push("/");
    }, 5000);
  }

  function onRelease() {
    if (timer) {
      window.clearTimeout(timer);
    }
  }

  useEffect(() => {
    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [timer]);

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
        key={lang}
        onClick={() => {
          onLanguageChange(lang);
        }}
        className={cx("screencast-language", {
          active: activeLanguage === lang
        })}
      >
        <span className="video-marker" />
        <MalibuIcon
          name={`marketing-language-${lang}-48`}
          extraClasses="icon"
        />
        {languageTitles.hasOwnProperty(lang)
          ? languageTitles[lang as VideoLanguage]
          : lang}
      </button>
    ))}
  </div>
);

interface Props {
  downloads: Downloads;
  config: VideosConfig;
}
const Screencast: React.FC<Props> = ({ downloads, config }) => {
  const {
    activeVideo,
    availableLanguages,
    playNext,
    isPlaying,
    selectLanguage,
    selectVideo
  } = useVideos(
    config,
    qs.parse(useLocation().search).default_lang as VideoLanguage
  );

  // If this page is being loaded without downloaded videos then pause rendering
  // since the check can be async, and then the hook will handle redirecting to
  // the downloader page
  const hasDownloads = useHasDownloads(downloads, { redirectTo: "/" });
  if (!hasDownloads) {
    return null;
  }

  return (
    <div className="container">
      {config.languageEasterEggs[activeVideo.language] && (
        <EasterEgg language={activeVideo.language} />
      )}
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
                videoUrl={activeVideo.url}
                posterUrl={activeVideo.posterUrl}
                onEnded={playNext}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sidebar">
        <ol className="video-chapters">
          {config.sections.map(section => (
            <li key={section.name} className="section-title">
              {section.name}
              {section.videos.map(video => (
                <span
                  key={`${section.name}${video.name}`}
                  className={cx("sidebar-video-name", {
                    playing: isPlaying({ section, video })
                  })}
                >
                  <span className="video-marker" />
                  <button onClick={() => selectVideo({ section, video })}>
                    <span>{video.name}</span>
                  </button>
                </span>
              ))}
            </li>
          ))}
        </ol>
      </section>
      <section className="footer">
        <ScreencastLanguagesList
          activeLanguage={activeVideo.language}
          languages={availableLanguages}
          onLanguageChange={selectLanguage}
        />
      </section>
      <section className="footer-logo">
        <LongPressLogo />
      </section>
    </div>
  );
};

export default Screencast;
