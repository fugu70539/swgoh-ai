'use client';

import { useState } from 'react';
import WelcomeView from './WelcomeView';
import ChatView from './ChatView';
import InputZone from './InputZone';

export default function MobileLayout() {
  const [mode, setMode] = useState<'welcome' | 'chat'>('welcome');
  const [history, setHistory] = useState<{ role: string; content: string }[]>([]);

  const handleSend = (text: string) => {
    setMode('chat');
    setHistory(prev => [...prev, { role: 'user', content: text }]);
    
    // Имитация ответа
    setTimeout(() => {
      setHistory(prev => [...prev, { 
        role: 'ai', 
        content: 'Принято. Анализирую твой ростер. Для этого этапа лучше всего подойдут персонажи с высоким сопротивлением.' 
      }]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 bg-white overflow-hidden flex flex-col">
      {/* Кнопка меню всегда на месте */}
      <div className="absolute top-6 left-6 z-50">
        <button className="w-[42px] h-[42px] rounded-full bg-[#edf2f7] flex items-center justify-center active:scale-90 transition-all">
          <img src="/Icons/menu.PNG" alt="" className="w-5 h-5 object-contain" />
        </button>
      </div>

      <div className="flex-1 relative">
        <WelcomeView isVisible={mode === 'welcome'} onSuggest={(t) => handleSend(t)} />
        <ChatView isVisible={mode === 'chat'} messages={history} />
      </div>

      <InputZone mode={mode} onSend={handleSend} />
    </div>
  );
}
