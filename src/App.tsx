import React, { useState } from "react";
import { MalibuSprites } from "@heroku/react-malibu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Screencast from "./Screencast";
import { default as mainConfig } from "./config";
import VideoDownloader from "./VideoDownloader";

const App: React.FC = () => {
  const [config] = useState(mainConfig);

  function getDownloaderInfoFromConfig() {
    const urls: string[] = [];
    const languages: string[] = [];

    config.sections.forEach(section => {
      section.videos.forEach(video => {
        video.videos.forEach(languageVideo => {
          urls.push(languageVideo.url);
          urls.push(languageVideo.posterUrl);
          languages.push(languageVideo.language);
        });
      });
    });

    return {
      urls: Array.from(new Set(urls)),
      languages: Array.from(new Set(languages))
    };
  }

  return (
    <Router>
      <div className="App">
        <MalibuSprites />
        <MalibuSprites set="marketing" />
        <Switch>
          <Route path="/" exact>
            <VideoDownloader {...getDownloaderInfoFromConfig()} />
          </Route>
          <Route path="/viewer">
            <Screencast config={config} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
