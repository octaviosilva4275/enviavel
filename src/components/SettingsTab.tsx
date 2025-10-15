import { useState } from 'react';
import { Moon, Globe, RefreshCw } from 'lucide-react';
import { getSettings, saveSettings, clearWatchProgress } from '../utils/storage';
import { AppSettings } from '../types';

interface SettingsTabProps {
  onSettingsChange: (settings: AppSettings) => void;
  onProgressReset: () => void;
}

export default function SettingsTab({ onSettingsChange, onProgressReset }: SettingsTabProps) {
  const [settings, setSettings] = useState<AppSettings>(getSettings());
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleLanguageChange = (language: 'pt' | 'en') => {
    const newSettings = { ...settings, language };
    setSettings(newSettings);
    saveSettings(newSettings);
    onSettingsChange(newSettings);
  };

  const handleResetProgress = () => {
    clearWatchProgress();
    setShowResetConfirm(false);
    onProgressReset();
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10 animate-fade-in">
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Configurações</h2>
        <p className="text-zinc-500 text-lg">Personalize sua experiência</p>
      </div>

      <div className="space-y-6">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-8 space-y-6">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-950 to-zinc-900 flex items-center justify-center">
              <Moon className="w-7 h-7 text-red-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Modo Escuro</h3>
              <p className="text-zinc-500 text-sm">
                O modo escuro está sempre ativado para melhor experiência
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-between p-5 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <span className="text-white font-semibold">Modo Escuro</span>
            <div className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-bold shadow-lg shadow-red-600/30">
              ATIVO
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-8 space-y-6">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-950 to-zinc-900 flex items-center justify-center">
              <Globe className="w-7 h-7 text-red-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Idioma</h3>
              <p className="text-zinc-500 text-sm">
                Escolha o idioma da interface
              </p>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-4">
            <button
              onClick={() => handleLanguageChange('pt')}
              className={`p-5 rounded-xl font-bold transition-all duration-300 ${
                settings.language === 'pt'
                  ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30'
                  : 'bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              Português
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`p-5 rounded-xl font-bold transition-all duration-300 ${
                settings.language === 'en'
                  ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30'
                  : 'bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              English
            </button>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-8 space-y-6">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-950 to-zinc-900 flex items-center justify-center">
              <RefreshCw className="w-7 h-7 text-red-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Resetar Progresso</h3>
              <p className="text-zinc-500 text-sm">
                Limpar todo o histórico de vídeos assistidos
              </p>
            </div>
          </div>

          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="relative w-full p-5 bg-zinc-900/50 border border-zinc-800 text-white rounded-xl font-bold hover:bg-zinc-800 hover:border-red-900/50 transition-all duration-300"
            >
              Resetar Progresso
            </button>
          ) : (
            <div className="relative space-y-4">
              <div className="p-5 bg-red-950/30 border border-red-900/50 rounded-xl backdrop-blur-sm">
                <p className="text-red-400 font-bold text-center text-lg">
                  Tem certeza? Esta ação não pode ser desfeita.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="p-5 bg-zinc-900/50 border border-zinc-800 text-white rounded-xl font-bold hover:bg-zinc-800 transition-all duration-300"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleResetProgress}
                  className="p-5 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-xl font-bold hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg shadow-red-600/30"
                >
                  Confirmar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
