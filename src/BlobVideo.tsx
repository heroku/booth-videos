import React, { useState, useEffect, useRef } from "react";
import { get } from "idb-keyval";
import blobImage from "./blobImage";

interface StoredVideo {
  buffer: ArrayBuffer;
  type: string;
}

interface BlobVideoProps {
  videoUrl: string;
  posterUrl: string;
  onEnded?: () => void;
}
const BlobVideo: React.FC<BlobVideoProps> = ({
  videoUrl,
  posterUrl,
  onEnded
}) => {
  const [src, setSrc] = useState({ videoSrc: "", posterSrc: "" });
  const playerRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    async function setVideoSrc() {
      try {
        const posterSrc = await blobImage(posterUrl);
        const videoBlob = await get<StoredVideo>(videoUrl);
        const videoSrc = URL.createObjectURL(
          new Blob([videoBlob.buffer], { type: videoBlob.type })
        );
        setSrc({ videoSrc, posterSrc });

        if (onEnded && playerRef.current) {
          playerRef.current.addEventListener("ended", onEnded);
        }
      } catch (err) {
        // The thrown error is likely due to Safari closing the IDB connection.
        // Reloading the page re-establishes the connection.
        console.error(err);
        window.location.reload();
      }
    }
    setVideoSrc();
    const player = playerRef.current;
    return () => {
      if (onEnded && player) {
        player.removeEventListener("ended", onEnded);
      }
    };
  }, [videoUrl, posterUrl, setSrc, onEnded, playerRef]);

  return (
    <video
      autoPlay
      ref={playerRef}
      src={src.videoSrc}
      controls={true}
      poster={src.posterSrc}
    />
  );
};

export default BlobVideo;
