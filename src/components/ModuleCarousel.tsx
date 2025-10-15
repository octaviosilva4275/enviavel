import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Module } from '../types';
import VideoPlayer from './VideoPlayer';

interface ModuleCarouselProps {
  modules: Module[];
  onProgressUpdate: () => void;
}

export default function ModuleCarousel({ modules, onProgressUpdate }: ModuleCarouselProps) {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);

  const nextModule = () => {
    setCurrentModuleIndex((prev) => (prev + 1) % modules.length);
  };

  const prevModule = () => {
    setCurrentModuleIndex((prev) => (prev - 1 + modules.length) % modules.length);
  };

  const currentModule = modules[currentModuleIndex];

  return (
    <div className="space-y-10">
      <div className="relative">
        <div className="flex items-center justify-center gap-8 mb-8">
          <button
            onClick={prevModule}
            className="group p-4 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 hover:from-red-950 hover:to-zinc-950 border border-zinc-800 hover:border-red-900/50 transition-all duration-300 shadow-lg hover:shadow-red-900/20"
            aria-label="Módulo anterior"
          >
            <ChevronLeft className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
          </button>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800">
              <span className="text-xs font-bold text-red-500">MÓDULO {currentModuleIndex + 1}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              {currentModule.title}
            </h2>
            <div className="flex justify-center gap-2">
              {modules.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentModuleIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentModuleIndex
                      ? 'w-12 bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/50'
                      : 'w-6 bg-zinc-800 hover:bg-zinc-700'
                  }`}
                  aria-label={`Ir para módulo ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={nextModule}
            className="group p-4 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 hover:from-red-950 hover:to-zinc-950 border border-zinc-800 hover:border-red-900/50 transition-all duration-300 shadow-lg hover:shadow-red-900/20"
            aria-label="Próximo módulo"
          >
            <ChevronRight className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentModule.videos.map((video, index) => (
          <div
            key={video.id}
            className="group space-y-4 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <VideoPlayer
              video={video}
              moduleTitle={currentModule.title}
              onProgressUpdate={onProgressUpdate}
            />
            <div className="px-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-1 rounded-full bg-red-500" />
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Vídeo {video.order}
                </span>
              </div>
              <h3 className="text-white font-semibold text-base group-hover:text-red-400 transition-colors">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
