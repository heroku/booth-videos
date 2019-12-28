import React, { useEffect, useState, useRef } from "react";
import blobMedia from "./blobMedia";

interface VideoProps {
  src: string;
}
function useVideoBlob(src: string): VideoProps {
  const [video, setVideo] = useState({ src: ""} as VideoProps);

  useEffect(() => {
    let isCancelled = false;
    let srcUrl = "";

    async function getBlobs() {
      try {
        // Safari has an issue with IDBTransacations hanging for concurrent operations.
        // I was getting a hanging transaction at least 1 out of every 10 reloads in Safarai 13.0.3
        // and found this corroborating the issue https://github.com/localForage/localForage/issues/824
        // So for now always call these sequentially
        srcUrl = await blobMedia(src);

        if (!isCancelled) {
          setVideo({ src: srcUrl});
        }
      } catch (e) {
        if (!isCancelled) {
          // The thrown error is likely due to Safari closing the IDB connection.
          // Reloading the page re-establishes the connection.
          window.location.reload();
        }
      }
    }

    getBlobs();

    return () => {
      isCancelled = true;
      URL.revokeObjectURL(srcUrl);
    };
  }, [src]);

  return video;
}

interface BlobVideoProps {
  videoUrl: string;
  onEnded?: () => void;
}
const BlobVideo: React.FC<BlobVideoProps> = ({
  videoUrl,
  onEnded
}) => {
  const video = useVideoBlob(videoUrl);
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = playerRef.current;
    if (onEnded && player) {
      player.addEventListener("ended", onEnded);
      return () => player.removeEventListener("ended", onEnded);
    }
  }, [onEnded]);

  return <video ref={playerRef} autoPlay controls={true} {...video} />;
};

export default BlobVideo;
