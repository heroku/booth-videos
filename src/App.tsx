import React, { useState } from "react";
import { MalibuSprites } from "@heroku/react-malibu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Screencast from "./Screencast";
import { default as mainConfig } from "./config";
import VideoDownloader from "./VideoDownloader";

const App: React.FC = () => {
  const [config, setConfig] = useState(mainConfig);

  function getVideoUrlsFromConfig() {
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
  }

  return (
    <Router>
      <div className="App">
        <MalibuSprites />
        <MalibuSprites set="marketing" />
        <Switch>
          <Route path="/" exact>
            <VideoDownloader videos={getVideoUrlsFromConfig()} />
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
