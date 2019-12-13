import React, { useState } from "react";
import { clear } from "idb-keyval";
import { Link } from "react-router-dom";
import cx from "classnames";
import { MalibuIcon } from "@heroku/react-malibu";
import { VideoLanguage, Status, Downloads } from "./types";
import { ReactComponent as Logo } from "./logo.svg";
import "./VideoDownloader.css";

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
  downloads: Downloads;
  languages: VideoLanguage[];
}
const VideoDownloader: React.FC<VideoDownloaderProps> = ({
  downloads,
  languages
}) => {
  const [defaultLanguage, setDefaultLanguage] = useState(languages[0]);

  return (
    <div className="videodownloader-container">
      <section className="videodownloader-main">
        <header className="videodownloader-header">
          <button
            disabled={downloads.pending || !downloads.entries.length}
            onClick={downloads.download}
            className="button"
          >
            Download Videos
          </button>
          <h1>Videos</h1>
          <select
            onChange={e => setDefaultLanguage(e.target.value as VideoLanguage)}
            value={defaultLanguage}
          >
            {languages.map(language => (
              <option value={language} key={language}>
                {language}
              </option>
            ))}
          </select>
          <Link
            className={cx("button", { disabled: !downloads.complete })}
            to={
              downloads.complete
                ? `/viewer?default_lang=${defaultLanguage}`
                : "/"
            }
          >
            Go to view
          </Link>
        </header>
        {downloads.entries.map(([url, status]) => (
          <div key={url} className="videodownloader-item">
            <div className="videodownloader-item-url">
              <p>{url}</p>
              {status.message && <p>{`${status.message}`}</p>}
            </div>
            <div
              className={cx("videodownloader-item-status", {
                error: status.status === "error",
                queued: status.status === "queued"
              })}
            >
              <DownloadStatusIndicator status={status} />
            </div>
          </div>
        ))}
        <div>
          <button
            onClick={async () => {
              await clear();
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
