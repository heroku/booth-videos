import { useState, useCallback, useMemo } from "react";
import { VideoLanguage, VideosConfig, Section, Video } from "./types";

const useVideos = (config: VideosConfig, defaultLanguage: VideoLanguage) => {
  const defaultSection = config.sections[0];
  const defaultVideo = defaultSection.videos[0];
  const defaultLanguageVideo = useMemo(() => {
    const { videos } = defaultVideo;
    const defaultLanguageVideo =
      defaultLanguage && videos.find(v => v.language === defaultLanguage);
    return defaultLanguageVideo || videos[0];
  }, [defaultVideo, defaultLanguage]);

  const [
    { activeSection, activeVideo, activeLanguageVideo },
    setState
  ] = useState({
    activeSection: defaultSection,
    activeVideo: defaultVideo,
    activeLanguageVideo: defaultLanguageVideo
  });

  const availableLanguages = useMemo(() => {
    const languages: VideoLanguage[] = [];
    activeVideo.videos.forEach(video => {
      languages.push(video.language);
    });
    return Array.from(new Set(languages));
  }, [activeVideo]);

  const playNext = useCallback(() => {
    const indexOfActiveVideo = activeSection.videos.findIndex(
      v => v.name === activeVideo.name
    );
    if (indexOfActiveVideo === activeSection.videos.length - 1) {
      const indexOfActiveSection = config.sections.findIndex(
        s => s.name === activeSection.name
      );
      if (indexOfActiveSection === config.sections.length - 1) {
        setState({
          activeSection: config.sections[0],
          activeVideo: config.sections[0].videos[0],
          activeLanguageVideo: config.sections[0].videos[0].videos.filter(
            v => v.language === activeLanguageVideo.language
          )[0]
        });
      } else {
        setState({
          activeSection: config.sections[indexOfActiveSection + 1],
          activeVideo: config.sections[indexOfActiveSection + 1].videos[0],
          activeLanguageVideo: config.sections[
            indexOfActiveSection + 1
          ].videos[0].videos.filter(
            v => v.language === activeLanguageVideo.language
          )[0]
        });
      }
    } else {
      setState({
        activeSection,
        activeVideo: activeSection.videos[indexOfActiveVideo + 1],
        activeLanguageVideo: activeSection.videos[
          indexOfActiveVideo + 1
        ].videos.filter(v => v.language === activeLanguageVideo.language)[0]
      });
    }
  }, [config, activeLanguageVideo, activeSection, activeVideo]);

  const selectLanguage = useCallback(
    (lang: VideoLanguage) => {
      const newLanguageVideo = activeVideo.videos.filter(
        v => v.language === lang
      );
      if (newLanguageVideo.length > 0) {
        setState({
          activeSection,
          activeVideo,
          activeLanguageVideo: newLanguageVideo[0]
        });
      }
    },
    [activeSection, activeVideo]
  );

  const selectVideo = useCallback(
    ({ section, video }: { section: Section; video: Video }) => {
      setState({
        activeSection: section,
        activeVideo: video,
        activeLanguageVideo: video.videos.filter(
          v => v.language === activeLanguageVideo.language
        )[0]
      });
    },
    [activeLanguageVideo.language]
  );

  const isPlaying = useCallback(
    ({ section, video }: { section: Section; video: Video }) =>
      activeSection.name === section.name && activeVideo.name === video.name,
    [activeSection.name, activeVideo.name]
  );

  return {
    activeVideo: {
      language: activeLanguageVideo.language,
      name: activeVideo.name,
      url: activeLanguageVideo.url,
      posterUrl: activeLanguageVideo.posterUrl
    },
    availableLanguages,
    playNext,
    selectLanguage,
    selectVideo,
    isPlaying
  };
};

export default useVideos;
