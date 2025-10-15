export interface Video {
  id: string;
  embedUrl: string;
  title: string;
  moduleId: number;
  order: number;
}

export interface Module {
  id: number;
  title: string;
  videos: Video[];
}

export interface WatchProgress {
  videoId: string;
  progress: number;
  lastWatched: number;
  thumbnail: string;
  title: string;
  moduleTitle: string;
}

export interface AppSettings {
  darkMode: boolean;
  language: 'pt' | 'en';
}
