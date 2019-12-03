import React, { useEffect, useState } from "react";
import { keys, set, clear } from "idb-keyval";
import { Link } from "react-router-dom";
import cx from "classnames";
import "./VideoDownloader.css";
import { MalibuIcon } from "@heroku/react-malibu";
import { ReactComponent as Logo } from "./logo.svg";

type DownloadStatus = "queued" | "downloading" | "downloaded" | "error";

interface Status {
  status: DownloadStatus;
  message?: string;
}

interface Progress {
  [key: string]: Status;
}

interface DownloadStatusProps {
  status: Status;
}
const DownloadStatusIndicator: React.FC<DownloadStatusProps> = ({ status }) => {
  switch (status.status) {
    case "downloading":
      return <MalibuIcon size={32} name="sync-28" />;
    case "downloaded":
      return <MalibuIcon size={32} name="confirm-28" />;
    case "error":
      return (
        <div>
          <MalibuIcon size={32} name="delete-28" />
          Error
        </div>
      );
  }

  return null;
};

interface VideoDownloaderProps {
  urls: string[];
  languages: string[];
}
const VideoDownloader: React.FC<VideoDownloaderProps> = ({
  urls,
  languages
}) => {
  const [progress, setProgress] = useState({
    initial: { status: "queued" }
  } as Progress);
  const [isDownloading, setIsDownloading] = useState(false);
  const [defaultLanguage, setDefaultLanguage] = useState(languages[0]);

  useEffect(() => {
    async function initialSetup(vids: string[]) {
      const existingKeys = await keys();
      setProgress(
        vids.reduce<Progress>((a, b) => {
          a[b] =
            existingKeys.indexOf(b) > -1
              ? { status: "downloaded" }
              : { status: "queued" };
          return a;
        }, {})
      );
    }
    initialSetup(urls);
  }, [urls]);

  async function download() {
    setIsDownloading(true);
    const existingKeys = await keys();
    for (const videoUrl of urls.sort()) {
      if (existingKeys.indexOf(videoUrl) === -1) {
        setProgress(progress => ({
          ...progress,
          [videoUrl]: { status: "downloading" }
        }));
        try {
          const response = await fetch(videoUrl);
          if (!response.ok) {
            throw new Error(`Invalid response: ${response.status}`);
          }
          const videoBlob = await response.blob();
          const buffer = await new Response(videoBlob).arrayBuffer();
          await set(videoUrl, { buffer, type: videoBlob.type });
          setProgress(progress => ({
            ...progress,
            [videoUrl]: { status: "downloaded" }
          }));
        } catch (err) {
          console.error(err);
          setProgress(progress => ({
            ...progress,
            [videoUrl]: { status: "error", message: err }
          }));
        }
      }
    }
    setIsDownloading(false);
  }

  const allVideosDownloaded = Object.entries(progress).every(
    ([, value]) => value.status === "downloaded"
  );

  return (
    <div className="videodownloader-container">
      <section className="videodownloader-main">
        <header className="videodownloader-header">
          <button
            disabled={isDownloading}
            onClick={download}
            className="button"
          >
            Download Videos
          </button>
          <h1>Videos</h1>
          <select
            onChange={e => setDefaultLanguage(e.target.value)}
            value={defaultLanguage}
          >
            {languages.map(language => (
              <option value={language} key={language}>
                {language}
              </option>
            ))}
          </select>
          <Link
            className={cx("button", !allVideosDownloaded && "disabled")}
            {...(allVideosDownloaded
              ? { to: `/viewer?default_lang=${defaultLanguage}` }
              : { to: "/" })}
          >
            Go to view
          </Link>
        </header>
        {Object.keys(progress)
          .sort()
          .map(url => (
            <div key={url} className="videodownloader-item">
              <div className="videodownloader-item-url">
                <p>{url}</p>
                {progress[url].message && <p>{`${progress[url].message}`}</p>}
              </div>
              <div
                className={`videodownloader-item-status${
                  progress[url].status === "error" ? " error" : ""
                }${progress[url].status === "queued" ? " queued" : ""}`}
              >
                <DownloadStatusIndicator status={progress[url]} />
              </div>
            </div>
          ))}
        <div>
          <button
            onClick={() => {
              clear();
              window.location.reload();
            }}
            className="clear-all-button"
          >
            Clear all downloaded assets
          </button>
        </div>
      </section>
      <section className="videodownloader-footer">
        <Logo />
      </section>
    </div>
  );
};

export default VideoDownloader;
