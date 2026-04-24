'use client';

import { useState, useEffect } from 'react';

export default function WelcomeMobile() {
  const [v, setV] = useState('');
  const [st, setSt] = useState<'ready' | 'chat'>('ready');
  const [items, setItems] = useState<string[]>([]);
  const [h, setH] = useState<{ r: string; c: string }[]>([]);

  const pool = [
    "Лучшая пачка с Кеноби", "Как зафармить Легенду?", "Модули для Дарта Вейдера",
    "Кого качать новичку в 2026?", "Гайд на Великую Арену", "Как победить Джаббу?",
    "Рейд Набу: лучшие герои", "Зачем нужны реликвии 9?", "Контр-пики Галактических Легенд",
    "Лучший флот для Арены", "Как эффективно фармить моды?", "Событие на Чебакку"
  ];

  useEffect(() => {
    setItems([...pool].sort(() => 0.5 - Math.random()).slice(0, 6));
  }, []);

  const send = (overrideText?: string) => {
    const textToSend = overrideText || v;
    const t = textToSend.trim();
    if (t.length <= 1 || !/[a-zA-Zа-яА-Я0-9]/.test(t)) return;

    setSt('chat');
    setH([...h, { r: 'user', c: t }]);
    setV('');

    setTimeout(() => {
      setH(prev => [...prev, { 
        r: 'ai', 
        c: 'Для эффективного фарма этой пачки тебе понадобятся персонажи 5-го уровня реликвий. Рекомендую начать с модулей на скорость и критический шанс. Это обеспечит стабильный темп в бою.' 
      }]);
    }, 600);
  };

  const isValid = v.trim().length > 1 && /[a-zA-Zа-яА-Я0-9]/.test(v.trim());

  return (
    <div className="fixed inset-0 flex flex-col bg-white overflow-hidden font-sans">
      {/* Кнопка меню */}
      <div className="absolute top-6 left-6 z-50">
        <button className="w-[42px] h-[42px] rounded-full bg-[#edf2f7] flex items-center justify-center active:scale-90 transition-all">
          <img src="/Icons/menu.PNG" alt="" className="w-5 h-5 object-contain" />
        </button>
      </div>

      <div className="flex-1 relative w-full">
        {/* БЛОК 1: Нулевое состояние (Welcome) */}
        <div className={`absolute inset-0 flex flex-col justify-center px-8 transition-all duration-500 ease-in-out ${st === 'chat' ? 'opacity-0 -translate-y-20 pointer-events-none' : 'opacity-100'}`}>
          <div className="w-full max-w-[440px]">
            <div className="flex items-center gap-3 mb-1">
              <img src="/Icons/appicon.PNG" alt="" className="w-[36px] h-[36px] object-contain" />
              <h1 className="text-[32px] font-bold tracking-tight text-[#1a1a1a]">Привет, юзер!</h1>
            </div>
            <h2 className="text-[32px] font-bold tracking-tight text-[#1a1a1a] opacity-60 leading-tight">Я помогу тебе с любым вопросом</h2>
            <div className="h-3" />
            <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
              {items.map((t, i) => (
                <button key={i} onClick={() => send(t)} className="flex items-center gap-2 whitespace-nowrap px-5 py-3 bg-white text-[#7a89a3] border-[1.5px] border-[#edf2f7]/60 rounded-full text-[14px] font-semibold active:scale-95 transition-all flex-shrink-0">
                  <img src="/Icons/idea.PNG" alt="" className="w-4 h-4 opacity-60" style={{ filter: 'invert(64%) sepia(59%) saturate(1450%) hue-rotate(326deg) brightness(98%) contrast(92%)' }} />
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* БЛОК 2: Состояние с чатом (Messages) */}
        <div className={`absolute inset-0 pt-24 px-8 overflow-y-auto no-scrollbar transition-opacity duration-500 ${st === 'chat' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="w-full max-w-[440px] flex flex-col gap-8 pb-32">
            {h.map((m, i) => (
              <div key={i} className={`text-[16px] leading-relaxed ${m.r === 'user' ? 'text-[#1a1a1a] font-semibold' : 'text-[#1a1a1a] opacity-80'}`}>
                {m.c}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Инпут (общий для обоих состояний) */}
      <div className={`w-full px-8 pb-6 transition-all duration-500 ease-in-out ${st === 'chat' ? 'translate-y-0' : '-translate-y-[calc(50vh-140px)]'}`}>
        <div className="w-full max-w-[440px] mx-auto">
          <div className="flex items-center h-[56px] bg-[#edf2f7] rounded-full px-2">
            <div className="relative flex-1 h-full flex items-center ml-4">
              {v === "" && <span className="absolute left-0 text-[#7a89a3] font-medium text-[16px] pointer-events-none whitespace-nowrap">Спросить что угодно…</span>}
              <input 
                type="text" 
                value={v} 
                onChange={(e) => setV(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && send()} 
                className="bg-transparent border-none outline-none text-[#1a1a1a] text-[16px] w-full font-medium" 
              />
            </div>
            <button 
              onClick={() => send()}
              disabled={!isValid}
              className={`h-[42px] w-[42px] bg-[#1a1a1a] rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${isValid ? 'opacity-100 scale-100' : 'opacity-[0.65] scale-95'}`}
            >
              <img src="/Icons/send.PNG" alt="" className="w-4 h-4 brightness-0 invert" />
            </button>
          </div>
          <p className="mt-3 text-center text-[11.5px] text-[#1a1a1a] opacity-[0.6] font-medium leading-[1.1] tracking-wide">
            ИИ может ошибаться, не стоит принимать все<br />за чистую монету
          </p>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
