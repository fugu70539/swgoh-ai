'use client';

import { useState, useEffect } from 'react';

export default function WelcomeMobile() {
  const [greeting, setGreeting] = useState('');
  const [value, setValue] = useState('');

  // Список подсказок
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
      
      {/* Кнопка меню (вверху слева) */}
      <div className="absolute top-6 left-6 z-50">
        <button className="w-10 h-10 rounded-full bg-[#edf2f7] flex items-center justify-center active:scale-90 transition-all">
          <img src="/Icons/menu.PNG" alt="M" className="w-5 h-5 object-contain" />
        </button>
      </div>

      {/* Основной контент */}
      <div className="flex-1 flex flex-col justify-center items-start px-8 w-full max-w-[500px]">
        
        {/* Группа текста (Темно-серый #1a1a1a) */}
        <div className="inline-block mb-8 select-none">
          <h1 className="text-[32px] font-bold tracking-tight text-[#1a1a1a] leading-tight">
            {greeting || 'Привет, юзер!'}
          </h1>
          <h2 className="text-[32px] font-bold tracking-tight text-[#1a1a1a] opacity-60 leading-tight">
            Я помогу тебе с любым вопросом
          </h2>
        </div>

        {/* Блок подсказок (Горизонтальный скролл) */}
        <div className="w-full mb-5">
          <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2">
            {suggestions.map((text, index) => (
              <button
                key={index}
                onClick={() => setValue(text)}
                // Мягкий желтый фон #fef9c3, без тени
                className="whitespace-nowrap flex items-center gap-2 px-4 py-2.5 bg-[#fef9c3] text-[#7a89a3] rounded-full text-[14px] font-semibold active:scale-95 transition-all active:bg-[#fef08a]"
              >
                {/* Иконка лампочки bulb.PNG */}
                <img 
                  src="/Icons/bulb.PNG" 
                  alt="💡" 
                  className="w-4 h-4 object-contain brightness-95" 
                />
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Строка ввода */}
        <div className="w-full">
          <div className="flex items-center h-[56px] bg-[#edf2f7] rounded-full pl-6 pr-2 shadow-inner">
            
            <div className="relative flex-1 h-full flex items-center">
              {value === "" && (
                // Подсказка с легким синеватым оттенком #7a89a3
                <span className="absolute left-0 text-[#7a89a3] font-medium text-[16px] pointer-events-none whitespace-nowrap opacity-70">
                  Спросить что угодно…
                </span>
              )}
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                // Текст ввода тоже темно-серый #1a1a1a
                className="bg-transparent border-none outline-none text-[#1a1a1a] text-[16px] w-full font-medium"
              />
            </div>

            {/* Кнопка отправки */}
            <button className="h-[42px] w-[42px] bg-[#1a1a1a] rounded-full flex items-center justify-center active:scale-95 transition-all shrink-0 ml-2">
              <img 
                src="/Icons/send.PNG" 
                alt="↑" 
                className="w-4 h-4 brightness-0 invert" 
              />
            </button>
          </div>
        </div>

      </div>

      {/* Скрываем стандартный скроллбар */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
