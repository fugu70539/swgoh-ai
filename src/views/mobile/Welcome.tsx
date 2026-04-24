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
      
      {/* Меню (вверху слева) — без контура */}
      <div className="absolute top-6 left-6 z-50">
        <button className="w-10 h-10 rounded-full bg-[#f0f3f8] flex items-center justify-center active:scale-90 transition-all shadow-sm">
          <img src="/Icons/menu.PNG" alt="M" className="w-5 h-5 object-contain" />
        </button>
      </div>

      {/* Основной контент — теперь прижат к левому краю */}
      <div className="flex-1 flex flex-col justify-center items-start px-8 w-full max-w-[500px]">
        
        {/* Текстовый блок (выровнен по левому краю) */}
        <div className="text-left mb-8 w-full">
          <h1 className="text-[36px] font-bold tracking-tight text-black leading-tight">
            {greeting || 'Привет, юзер!'}
          </h1>
          <p className="text-[19px] font-medium text-black/65 mt-2">
            Я помогу тебе с любым вопросом
          </p>
        </div>

        {/* Строка ввода — без контура */}
        <div className="w-full">
          <div className="flex items-center h-[56px] bg-[#f0f3f8] rounded-full pl-6 pr-2 shadow-sm">
            <div className="relative flex-1 h-full flex items-center">
              {value === "" && (
                <span className="absolute left-0 text-black/30 font-medium text-[16px] pointer-events-none">
                  Найти что-нибудь...
                </span>
              )}
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-transparent border-none outline-none text-black text-[16px] w-full font-medium"
              />
            </div>

            {/* Кнопка отправки с иконкой send.PNG (белая на черном фоне) */}
            <button className="h-[42px] w-[42px] bg-black rounded-full flex items-center justify-center active:scale-95 transition-all shrink-0">
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
