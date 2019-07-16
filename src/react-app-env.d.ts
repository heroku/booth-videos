/// <reference types="react-scripts" />

declare module "@heroku/react-malibu" {
  import React from "react";
  interface MalibuSpritesProps {
    set?: string;
  }
  export class MalibuSprites extends React.Component<MalibuSpritesProps> {}

  interface MalibuIconProps {
    name: string;
    size?: number;
    extraClasses?: string;
    fillClass?: string;
  }
  export class MalibuIcon extends React.Component<MalibuIconProps> {}
}
