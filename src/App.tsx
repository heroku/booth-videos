import React from "react";
import { MalibuSprites } from "@heroku/react-malibu";
import Configurator from "./Configurator";

const App: React.FC = () => {
  return (
    <div className="App">
      <MalibuSprites />
      <MalibuSprites set="marketing" />
      <Configurator />
    </div>
  );
};

export default App;
