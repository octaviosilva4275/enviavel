import { WatchProgress, AppSettings } from '../types';

const WATCH_PROGRESS_KEY = 'magneticAttraction_watchProgress';
const SETTINGS_KEY = 'magneticAttraction_settings';

export const saveWatchProgress = (progress: WatchProgress): void => {
  const existing = getWatchProgress();
  const filtered = existing.filter(p => p.videoId !== progress.videoId);
  const updated = [...filtered, progress].sort((a, b) => b.lastWatched - a.lastWatched);
  localStorage.setItem(WATCH_PROGRESS_KEY, JSON.stringify(updated));
};

export const getWatchProgress = (): WatchProgress[] => {
  const stored = localStorage.getItem(WATCH_PROGRESS_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const getVideoProgress = (videoId: string): number => {
  const progress = getWatchProgress();
  const video = progress.find(p => p.videoId === videoId);
  return video ? video.progress : 0;
};

export const clearWatchProgress = (): void => {
  localStorage.removeItem(WATCH_PROGRESS_KEY);
};

export const saveSettings = (settings: AppSettings): void => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};

export const getSettings = (): AppSettings => {
  const stored = localStorage.getItem(SETTINGS_KEY);
  return stored ? JSON.parse(stored) : { darkMode: true, language: 'pt' };
};

export const getVideoThumbnail = (embedUrl: string): string => {
  const videoId = embedUrl.split('/embed/')[1]?.split('?')[0];
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
};
