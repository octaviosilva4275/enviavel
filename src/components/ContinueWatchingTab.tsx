import { Play } from 'lucide-react';
import { getWatchProgress } from '../utils/storage';

export default function ContinueWatchingTab() {
  const watchProgress = getWatchProgress();

  if (watchProgress.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] text-center animate-fade-in">
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-red-600/20 blur-3xl" />
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 flex items-center justify-center">
            <Play className="w-12 h-12 text-zinc-700" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">Nenhum vídeo assistido ainda</h2>
        <p className="text-zinc-500 text-lg max-w-md">
          Comece a assistir os módulos para ver seu progresso aqui
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Continuar Assistindo</h2>
        <p className="text-zinc-500 text-lg">Retome de onde você parou</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {watchProgress.map((progress, index) => (
          <div
            key={progress.videoId}
            className="group cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-red-900/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/10 transform hover:scale-105">
              <div className="relative aspect-video bg-black">
                <img
                  src={progress.thumbnail}
                  alt={progress.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-red-600 blur-xl opacity-50" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-2xl shadow-red-600/50">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-zinc-900">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-red-700 transition-all shadow-lg shadow-red-600/50"
                    style={{ width: `${progress.progress}%` }}
                  />
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                    {progress.moduleTitle}
                  </p>
                </div>
                <h3 className="text-white font-bold text-lg group-hover:text-red-400 transition-colors">{progress.title}</h3>
                <div className="flex items-center justify-between pt-2">
                  <p className="text-sm text-zinc-500 font-medium">
                    {progress.progress}% concluído
                  </p>
                  <span className="text-xs text-red-500 font-semibold">RETOMAR</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
