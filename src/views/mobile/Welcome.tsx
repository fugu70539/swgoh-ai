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
        
        {/* Группа текста */}
        <div className="inline-block mb-8">
          <h1 className="text-[32px] font-bold tracking-tight text-black leading-tight">
            {greeting || 'Привет, юзер!'}
          </h1>
          <h2 className="text-[32px] font-bold tracking-tight text-black opacity-65 leading-tight">
            Я помогу тебе с любым вопросом
          </h2>
        </div>

        {/* Строка ввода (ширина подстроена под текст выше) */}
        <div className="w-full max-w-fit">
          <div className="flex items-center h-[56px] bg-[#f0f3f8] rounded-full pl-6 pr-2 transition-all">
            <div className="relative flex items-center min-w-[280px]">
              {value === "" && (
                <span className="absolute left-0 text-black/30 font-medium text-[16px] pointer-events-none whitespace-nowrap">
                  Спросить что угодно…
                </span>
              )}
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-transparent border-none outline-none text-black text-[16px] w-full font-medium"
              />
            </div>

            {/* Кнопка отправки */}
            <button className="h-[42px] w-[42px] bg-black rounded-full flex items-center justify-center active:scale-95 transition-all shrink-0 ml-4">
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
