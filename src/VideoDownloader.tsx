import React, { useEffect, useState } from "react";
import { keys, set, clear } from "idb-keyval";
import { Link } from "react-router-dom";
import "./VideoDownloader.css";
import { MalibuIcon } from "@heroku/react-malibu";
import { ReactComponent as Logo } from "./logo.svg";

type DownloadStatus = "queued" | "downloading" | "downloaded" | "error";

interface Status {
  status: DownloadStatus;
  message?: string;
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
  videos: string[];
}
const VideoDownloader: React.FC<VideoDownloaderProps> = ({ videos }) => {
  const [progress, setProgress] = useState({} as {
    [key: string]: Status;
  });
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    async function initialSetup(vids: string[]) {
      const existingKeys = await keys();
      setProgress(
        vids.reduce<typeof progress>((a, b) => {
          a[b] =
            existingKeys.indexOf(b) > -1
              ? { status: "downloaded" }
              : { status: "queued" };
          return a;
        }, {})
      );
    }
    initialSetup(videos);
  }, [videos]);

  async function download() {
    setIsDownloading(true);
    const existingKeys = await keys();
    for (const videoUrl of videos.sort()) {
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

  function allVideosDownloaded() {
    for (let [key, value] of Object.entries(progress)) {
      if (value.status !== "downloaded") {
        return false;
      }
    }

    return true;
  }

  return (
    <div className="videodownloader-container">
      <section className="videodownloader-main">
        <header className="videodownloader-header">
          <button disabled={isDownloading} onClick={download}>
            Download Videos
          </button>
          <h1>Videos</h1>
          <Link to="/viewer">
            <button disabled={!allVideosDownloaded()}>Go to view</button>
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
