import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Play, BookText, Settings } from 'lucide-react';
import {
  Home as HomeIcon,
  Play as PlayIcon,
  BookText as BookTextIcon,
  Settings as SettingsIcon,
} from 'lucide-react';
import MainTab from './components/MainTab';
import ContinueWatchingTab from './components/ContinueWatchingTab';
import UpsellPage from "./components/UpsellPage";
import MoreContentTab from './components/MoreContentTab';
import SettingsTab from './components/SettingsTab';
import { getSettings } from './utils/storage';
import { AppSettings } from './types';

type TabType = 'main' | 'continue' | 'content' | 'settings';

function App() {
const [activeTab, setActiveTab] = useState<TabType>('main');
const [settings, setSettings] = useState<AppSettings>(getSettings());
const [refreshKey, setRefreshKey] = useState(0);

const handleProgressUpdate = () => {
setRefreshKey(prev => prev + 1);
};

const handleProgressReset = () => {
setRefreshKey(prev => prev + 1);
};

const tabs = [
    { id: 'main' as TabType, icon: Home, label: 'Principal' },
    { id: 'continue' as TabType, icon: Play, label: 'Continuar' },
    { id: 'content' as TabType, icon: BookText, label: 'Conteúdos' },
    { id: 'settings' as TabType, icon: Settings, label: 'Configurações' },
    { id: 'main' as TabType, icon: HomeIcon, label: 'Principal' },
    { id: 'continue' as TabType, icon: PlayIcon, label: 'Continuar' },
    { id: 'content' as TabType, icon: BookTextIcon, label: 'Conteúdos' },
    { id: 'settings' as TabType, icon: SettingsIcon, label: 'Configurações' },
];

return (
<Router>
<Routes>
        <Route path="/" element={<Home />} />
        {/* Se quiser renderizar um componente de rota real em "/", substitua <div /> por <MainTab /> ou outro componente */}
        <Route path="/" element={<div />} />
<Route path="/upsell" element={<UpsellPage />} />
</Routes>

    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-red-950/5 rounded-full blur-3xl" />
      <div className="min-h-screen bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-red-950/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 pb-28 md:pb-8">
        <div className="mb-8">
          {activeTab === 'main' && <MainTab onProgressUpdate={handleProgressUpdate} />}
          {activeTab === 'continue' && <ContinueWatchingTab key={refreshKey} />}
          {activeTab === 'content' && <MoreContentTab />}
          {activeTab === 'settings' && (
            <SettingsTab
              onSettingsChange={setSettings}
              onProgressReset={handleProgressReset}
            />
          )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 pb-28 md:pb-8">
          <div className="mb-8">
            {activeTab === 'main' && <MainTab onProgressUpdate={handleProgressUpdate} />}
            {activeTab === 'continue' && <ContinueWatchingTab key={refreshKey} />}
            {activeTab === 'content' && <MoreContentTab />}
            {activeTab === 'settings' && (
              <SettingsTab
                onSettingsChange={setSettings}
                onProgressReset={handleProgressReset}
              />
            )}
          </div>
</div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-t border-zinc-900/50 md:relative md:border-t-0 md:bg-transparent md:backdrop-blur-none md:mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-2 py-3 md:flex md:justify-center md:gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2 px-5 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30'
                      : 'text-zinc-500 hover:text-white hover:bg-zinc-900/50'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-600 to-red-700 opacity-20 blur-lg" />
                  )}
                  <Icon className={`w-5 h-5 transition-transform ${
                    isActive ? 'scale-110' : ''
                  }`} />
                  <span className={`text-xs md:text-sm font-semibold transition-all ${
                    isActive ? 'scale-105' : ''
                  }`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
        <nav className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-t border-zinc-900/50 md:relative md:border-t-0 md:bg-transparent md:backdrop-blur-none md:mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-4 gap-2 py-3 md:flex md:justify-center md:gap-3">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2 px-5 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30'
                        : 'text-zinc-500 hover:text-white hover:bg-zinc-900/50'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-600 to-red-700 opacity-20 blur-lg" />
                    )}
                    <Icon className={`w-5 h-5 transition-transform ${
                      isActive ? 'scale-110' : ''
                    }`} />
                    <span className={`text-xs md:text-sm font-semibold transition-all ${
                      isActive ? 'scale-105' : ''
                    }`}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
</div>
        </div>
      </nav>
    </div>
  </Router>
        </nav>
      </div>
    </Router>
);
}

export default App;
