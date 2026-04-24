'use client';

import { useState, useEffect } from 'react';

export default function WelcomeMobile() {
  const [greeting, setGreeting] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    const greetings = ['Сап', 'Привет', 'Что на душе'];
    const random = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(random === 'Что на душе' ? 'Что на душе, юзер?' : `${random}, юзер!`);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col bg-white overflow-hidden font-sans">
      
      {/* Кнопка меню (вверху слева) */}
      <div className="absolute top-6 left-6 z-50">
        <button className="w-10 h-10 rounded-full bg-[#f0f3f8] flex items-center justify-center active:scale-90 transition-all">
          <img src="/Icons/menu.PNG" alt="M" className="w-5 h-5 object-contain" />
        </button>
      </div>

      {/* Контент */}
      <div className="flex-1 flex flex-col justify-center items-start px-8 w-full">
        
        {/* Группа текста — теперь темно-серый #1a1a1a */}
        <div className="inline-block mb-8 select-none">
          <h1 className="text-[32px] font-bold tracking-tight text-[#1a1a1a] leading-tight">
            {greeting || 'Привет, юзер!'}
          </h1>
          <h2 className="text-[32px] font-bold tracking-tight text-[#1a1a1a] opacity-60 leading-tight">
            Я помогу тебе с любым вопросом
          </h2>
        </div>

        {/* Строка ввода (фиксированная привязка кнопки внутри) */}
        <div className="w-full max-w-[440px]">
          <div className="flex items-center h-[56px] bg-[#f0f3f8] rounded-full pl-6 pr-2">
            
            <div className="relative flex-1 h-full flex items-center">
              {value === "" && (
                // Подсказка с легким синеватым оттенком
                <span className="absolute left-0 text-[#8e9aaf] font-medium text-[16px] pointer-events-none whitespace-nowrap">
                  Спросить что угодно…
                </span>
              )}
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                // Текст ввода тоже темно-серый
                className="bg-transparent border-none outline-none text-[#1a1a1a] text-[16px] w-full font-medium"
              />
            </div>

            {/* Кнопка отправки — теперь точно внутри контейнера */}
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
    </div>
  );
}
