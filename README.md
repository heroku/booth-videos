# Heroku Booth Videos

This is a TypeScript project bootstrapped with Create React App that displays a nice interface for playing videos at Heroku events.

## Configuration

You can configure the videos presented by editing the `config.ts` file. It has the following properties:

- `config.sections[].name`: The name of the section of videos. Displayed as a header in the sidebar.
- `config.sections[].videos[].name`: The name of the video. Displayed in the sidebar and as a header above the video when playing.
- `config.sections[].videos[].videos[].language`: The language of the video, displayed as a button below the video. Should match one of the available languages in `VideoLanguage` in `types.ts`.
- `config.sections[].videos[].videos[].url`: The URL of the video to play. Should be served with proper CORS headers.
- `config.sections[].videos[].videos[].posterUrl`: The URL of the poster image for the video. Displayed before the video begins playing on some clients. Should be served with proper CORS headers.

## Downloading Assets

On first launch, you'll be presented with a list of the distinct assets that the app will download into local browser storage. To download the assets, click "Download Videos". If any errors occur while downloading, the response code will be displayed below the URL. The error will also be logged to the console.

To remove all downloaded assets, click "Clear all downloaded assets".

Once downloaded, you can go to the viewing interface by clicking "Go to View".

## Exiting the Viewing Interface

To exit the viewing interface, you can refresh the page, which will bring you to the admin panel. If you cannot refresh, press and hold the Heroku logo in the bottom right corner for six seconds.

## Building and Deploying

To build the static assets for the app, run `npm run build`. This will generate static assets in the `build` folder that can then be deployed to any static file host.

To make deployment easy, the app comes with a Dockerfile configured for use with Heroku's container service.

```sh
$ heroku container:login
$ heroku create
$ heroku container:push web
$ heroku container:release web
```

## Create React App Stuff

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
