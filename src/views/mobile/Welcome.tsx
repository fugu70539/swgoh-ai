'use client';

import { useState, useEffect } from 'react';

export default function WelcomeMobile() {
  const [greeting, setGreeting] = useState('');
  const [value, setValue] = useState('');

  const suggestions = [
    "Расскажи о себе",
    "Какие есть топовые пачки?",
    "Как пройти Противостояние?",
    "Лучшие модули на Вейдера",
    "Гайд по Реликвиям"
  ];

  useEffect(() => {
    const greetings = ['Сап', 'Привет', 'Что на душе'];
    const random = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(random === 'Что на душе' ? 'Что на душе, юзер?' : `${random}, юзер!`);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col bg-white overflow-hidden font-sans">
      
      {/* Меню (без тени) */}
      <div className="absolute top-6 left-6 z-50">
        <button className="w-10 h-10 rounded-full bg-[#edf2f7] flex items-center justify-center active:scale-90 transition-all">
          <img src="/Icons/menu.PNG" alt="M" className="w-5 h-5 object-contain" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center items-start px-8 w-full">
        
        {/* Заголовки (темно-серый #1a1a1a, без теней) */}
        <div className="inline-block mb-10 select-none">
          <h1 className="text-[32px] font-bold tracking-tight text-[#1a1a1a] leading-tight">
            {greeting || 'Привет, юзер!'}
          </h1>
          <h2 className="text-[32px] font-bold tracking-tight text-[#1a1a1a] opacity-60 leading-tight">
            Я помогу тебе с любым вопросом
          </h2>
        </div>

        {/* Увеличенный объединенный блок ввода */}
        <div className="w-full max-w-[480px]">
          <div className="flex flex-col bg-[#edf2f7] rounded-[28px] p-2">
            
            {/* Блок подсказок внутри строки ввода (теперь сверху) */}
            <div className="w-full mb-3 pt-1">
              <div className="flex gap-2 overflow-x-auto no-scrollbar px-2">
                {suggestions.map((text, index) => (
                  <button
                    key={index}
                    onClick={() => setValue(text)}
                    className="flex items-center gap-2 whitespace-nowrap px-4 py-2.5 bg-white text-[#7a89a3] border border-[#e2e8f0] rounded-full text-[14px] font-semibold active:scale-95 transition-all active:bg-[#f8fafc]"
                  >
                    {/* Желтая иконка лампочки bulb.PNG */}
                    <img 
                      src="/Icons/bulb.PNG" 
                      alt="💡" 
                      className="w-4 h-4 object-contain filter-yellow" 
                    />
                    {text}
                  </button>
                ))}
              </div>
            </div>

            {/* Собственно строка ввода с кнопкой (высота увеличена) */}
            <div className="flex items-center h-[64px] bg-[#edf2f7] rounded-full pl-6 pr-2">
              <div className="relative flex-1 h-full flex items-center">
                {value === "" && (
                  <span className="absolute left-0 text-[#7a89a3] font-medium text-[16px] pointer-events-none whitespace-nowrap">
                    Спросить что угодно…
                  </span>
                )}
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="bg-transparent border-none outline-none text-[#1a1a1a] text-[16px] w-full font-medium"
                />
              </div>

              <button className="h-[48px] w-[48px] bg-[#1a1a1a] rounded-full flex items-center justify-center active:scale-95 transition-all shrink-0 ml-3">
                <img 
                  src="/Icons/send.PNG" 
                  alt="↑" 
                  className="w-5 h-5 brightness-0 invert" 
                />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* CSS для скрытия скроллбара и фильтра для желтого цвета */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        /* Превращает черно-белую иконку в приятный желтый */
        .filter-yellow {
          filter: invert(85%) sepia(30%) saturate(1000%) hue-rotate(10deg) brightness(105%) contrast(105%);
        }
      `}</style>
    </div>
  );
}
