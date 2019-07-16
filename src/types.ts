export type VideoLanguage = "node" | "ruby" | "java" | "php" | "python" | "go";

export interface LanguageVideo {
  language: VideoLanguage;
  url: string;
  posterUrl: string;
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
}
