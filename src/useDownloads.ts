import { useEffect, useState, useCallback, useMemo } from "react";
import { keys, set } from "idb-keyval";
import { useHistory } from "react-router-dom";
import PQueue from "p-queue";
import { Progress, Status, Downloads } from "./types";

const urlComparator = (a: string, b: string) => (a > b ? 1 : -1);

const useDownloads = (urls: string[]) => {
  const [progress, setProgress] = useState({} as Progress);
  const sortedUrls = useMemo(() => urls.slice(0).sort(urlComparator), [urls]);

  const download = useCallback(async () => {
    const queue = new PQueue({ concurrency: 2 });
    const existingKeys = await keys();

    const downloadFile = async (videoUrl: string) => {
      const setVideoStatus = (status: Status) =>
        setProgress(prev => ({ ...prev, [videoUrl]: status }));

      if (existingKeys.indexOf(videoUrl) === -1) {
        setVideoStatus({ status: "downloading" });
        try {
          const response = await fetch(videoUrl);
          if (!response.ok) {
            throw new Error(`Invalid response: ${response.status}`);
          }
          const videoBlob = await response.blob();
          const buffer = await new Response(videoBlob).arrayBuffer();
          await set(videoUrl, { buffer, type: videoBlob.type });
          setVideoStatus({ status: "downloaded" });
        } catch (err) {
          setVideoStatus({ status: "error", message: err });
        }
      }
    };

    const downloadFns = sortedUrls.map(url => () => downloadFile(url));
    await queue.addAll(downloadFns);
  }, [sortedUrls]);

  useEffect(() => {
    keys().then(existingKeys =>
      setProgress(
        sortedUrls.reduce<Progress>((a, b) => {
          a[b] =
            existingKeys.indexOf(b) > -1
              ? { status: "downloaded" }
              : { status: "queued" };
          return a;
        }, {})
      )
    );
  }, [sortedUrls]);

  const entries = Object.entries(progress).sort((a, b) =>
    urlComparator(a[0], b[0])
  );

  const complete =
    entries.length > 0 &&
    entries.every(([, value]) => value.status === "downloaded");

  const pending =
    entries.length > 0 &&
    entries.every(([, value]) => value.status === "downloading");

  return {
    initial: urls.length > entries.length,
    entries,
    pending,
    complete,
    download
  } as Downloads;
};

export const useHasDownloads = (
  downloads: Downloads,
  { redirectTo = "/" } = {}
) => {
  const history = useHistory();
  const hasDownloads = !downloads.initial && downloads.complete;

  useEffect(() => {
    if (!downloads.initial && !downloads.complete) {
      history.push(redirectTo);
    }
  }, [downloads.initial, downloads.complete, history, redirectTo]);

  return hasDownloads;
};

export default useDownloads;
