import React, { useState, useMemo } from "react";
import { MalibuSprites } from "@heroku/react-malibu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Screencast from "./Screencast";
import { default as mainConfig } from "./config";
import VideoDownloader from "./VideoDownloader";
import useDownloads from "./useDownloads";
import { VideoLanguage } from "./types";

const App: React.FC = () => {
  const [config] = useState(mainConfig);

  const { urls, languages } = useMemo(() => {
    const urls: string[] = [];
    const languages: VideoLanguage[] = [];
    
    //Downloading the default poster URL
    urls.push(config.deafultPosterUrl);
    config.sections.forEach(section => {
      section.videos.forEach(video => {
        video.videos.forEach(languageVideo => {
          urls.push(languageVideo.url);
          languages.push(languageVideo.language);
        });
      });
    });

    return {
      urls: Array.from(new Set(urls)),
      languages: Array.from(new Set(languages))
    };
  }, [config]);

  const downloads = useDownloads(urls);

  return (
    <Router>
      <div className="App">
        <MalibuSprites />
        <MalibuSprites set="marketing" />
        <Switch>
          <Route path="/" exact>
            <VideoDownloader downloads={downloads} languages={languages} />
          </Route>
          <Route path="/viewer">
            <Screencast downloads={downloads} config={config} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
