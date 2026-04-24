'use client';

import { useState, useEffect } from 'react';

export default function WelcomeView({ isVisible, onSuggest }: { isVisible: boolean, onSuggest: (t: string) => void }) {
  const [items, setItems] = useState<string[]>([]);
  const pool = ["Лучшая пачка с Кеноби", "Гайд на Великую Арену", "Как победить Джаббу?", "Рейд Набу", "Релики 9"];

  useEffect(() => {
    setItems([...pool].sort(() => 0.5 - Math.random()).slice(0, 4));
  }, []);

  return (
    <div className={`absolute inset-0 flex flex-col justify-center px-8 transition-all duration-500 ease-in-out ${!isVisible ? 'opacity-0 -translate-y-20 pointer-events-none' : 'opacity-100'}`}>
      <div className="w-full max-w-[440px]">
        <div className="flex items-center gap-3 mb-1">
          <img src="/Icons/appicon.PNG" alt="" className="w-[36px] h-[36px]" />
          <h1 className="text-[32px] font-bold tracking-tight text-[#1a1a1a]">Привет, юзер!</h1>
        </div>
        <h2 className="text-[32px] font-bold tracking-tight text-[#1a1a1a] opacity-60 leading-tight">Я помогу тебе с любым вопросом</h2>
        
        <div className="h-3" />
        
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
          {items.map((t, i) => (
            <button key={i} onClick={() => onSuggest(t)} className="flex items-center gap-2 whitespace-nowrap px-5 py-3 bg-white text-[#7a89a3] border-[1.5px] border-[#edf2f7]/60 rounded-full text-[14px] font-semibold active:scale-95 transition-all">
              <img src="/Icons/idea.PNG" alt="" className="w-4 h-4 opacity-60" style={{ filter: 'invert(64%) sepia(59%) saturate(1450%) hue-rotate(326deg) brightness(98%) contrast(92%)' }} />
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
