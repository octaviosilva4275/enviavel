import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { saveWatchProgress, getVideoThumbnail } from '../utils/storage';
import { Video } from '../types';

interface VideoPlayerProps {
  video: Video;
  moduleTitle: string;
  onProgressUpdate?: () => void;
}

export default function VideoPlayer({ video, moduleTitle, onProgressUpdate }: VideoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const progressInterval = useRef<number>();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return;

      try {
        const data = JSON.parse(event.data);
        if (data.event === 'onStateChange') {
          if (data.info === 1) {
            setIsPlaying(true);
            startProgressTracking();
          } else {
            setIsPlaying(false);
            stopProgressTracking();
          }
        }
      } catch (e) {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
      stopProgressTracking();
    };
  }, []);

  const startProgressTracking = () => {
    stopProgressTracking();
    progressInterval.current = window.setInterval(() => {
      saveWatchProgress({
        videoId: video.id,
        progress: 50,
        lastWatched: Date.now(),
        thumbnail: getVideoThumbnail(video.embedUrl),
        title: video.title,
        moduleTitle
      });
      onProgressUpdate?.();
    }, 5000);
  };

  const stopProgressTracking = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-zinc-950 to-black rounded-2xl overflow-hidden group shadow-2xl border border-zinc-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      {!isPlaying && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer bg-gradient-to-br from-black/70 via-black/50 to-black/70 group-hover:from-black/40 group-hover:via-black/30 group-hover:to-black/40 transition-all duration-500"
          onClick={handlePlay}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-red-600 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center group-hover:scale-110 transform transition-all duration-300 shadow-2xl shadow-red-600/50 animate-glow">
              <Play className="w-10 h-10 text-white ml-1" fill="white" />
            </div>
          </div>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={video.embedUrl}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={video.title}
      />
    </div>
  );
}
