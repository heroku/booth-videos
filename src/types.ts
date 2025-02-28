export type VideoLanguage = "node" | "ruby" | "java" | "php" | "python" | "go";

export interface LanguageVideo {
  language: VideoLanguage;
  url: string;
}

export interface Video {
  name: string;
  videos: LanguageVideo[];
}

export interface Section {
  name: string;
  videos: Video[];
}

export interface VideosConfig {
  sections: Section[];
  autoplay: boolean;
  deafultPosterUrl: string;
}

export type DownloadStatus = "queued" | "downloading" | "downloaded" | "error";

export interface Status {
  status: DownloadStatus;
  message?: string;
}

export interface Progress {
  [key: string]: Status;
}

export interface Downloads {
  initial: boolean;
  entries: [string, Status][];
  pending: boolean;
  complete: boolean;
  download: () => void;
}
