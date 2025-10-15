import { Flame } from 'lucide-react';
import { modules } from '../data/modules';
import ModuleCarousel from './ModuleCarousel';

interface MainTabProps {
  onProgressUpdate: () => void;
}

export default function MainTab({ onProgressUpdate }: MainTabProps) {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950/30 via-black to-black border border-red-900/20 p-12 md:p-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-950/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/50 border border-red-900/50 backdrop-blur-sm">
            <Flame className="w-4 h-4 text-red-500" />
            <span className="text-sm font-semibold text-red-400 tracking-wider uppercase">
              Treinamento Exclusivo
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Atração
            <span className="block bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              Magnética
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            Domine a arte da comunicação digital e conquiste
            <br className="hidden md:block" />
            através de mensagens que geram atração real
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">5</div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">Módulos</div>
            </div>
            <div className="w-px bg-zinc-800" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">25</div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">Vídeos</div>
            </div>
            <div className="w-px bg-zinc-800" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">Prático</div>
            </div>
          </div>
        </div>
      </div>

      <ModuleCarousel modules={modules} onProgressUpdate={onProgressUpdate} />
    </div>
  );
}
