import React, { useState } from "react";
import Screencast from "./Screencast";
import { default as mainConfig } from "./config";
import VideoDownloader from "./VideoDownloader";

const Configurator: React.FC = () => {
  const [config, setConfig] = useState(mainConfig);
  const [currentView, setCurrentView] = useState("downloader");
  const getVideoUrlsFromConfig = () => {
    const urls: string[] = [];
    config.sections.forEach(section => {
      section.videos.forEach(video => {
        video.videos.forEach(languageVideo => {
          urls.push(languageVideo.url);
          urls.push(languageVideo.posterUrl);
        });
      });
    });
    return Array.from(new Set(urls));
  };

  return currentView === "downloader" ? (
    <VideoDownloader
      videos={getVideoUrlsFromConfig()}
      goToView={() => setCurrentView("preview")}
    />
  ) : (
    <Screencast config={config} goToView={() => setCurrentView("downloader")} />
  );
};

export default Configurator;
