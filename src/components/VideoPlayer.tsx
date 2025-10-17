import { useEffect, useRef, useState } from 'react';
import { Play, Maximize2, Minimize2 } from 'lucide-react';
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
  const [isFullscreen, setIsFullscreen] = useState(false);
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
      } catch {
        // ignora erros de parse
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
    if (progressInterval.current) clearInterval(progressInterval.current);
  };

const handlePlay = () => {
  if (iframeRef.current) {
    const cleanUrl = `${video.embedUrl}${
      video.embedUrl.includes('?') ? '&' : '?'
    }autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1`;

    iframeRef.current.src = cleanUrl; // apenas essa linha define o src final
  }
  setIsPlaying(true);
};


  const toggleFullscreen = () => {
    if (!iframeRef.current) return;

    if (!document.fullscreenElement) {
      iframeRef.current.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

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

      {/* Botão de Fullscreen */}
      {isPlaying && (
        <button
          onClick={toggleFullscreen}
          className="absolute top-3 right-3 z-20 p-2 bg-black/50 hover:bg-red-900/70 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          {isFullscreen ? (
            <Minimize2 className="w-5 h-5 text-white" />
          ) : (
            <Maximize2 className="w-5 h-5 text-white" />
          )}
        </button>
      )}
    </div>
  );
}
