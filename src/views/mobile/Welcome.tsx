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
        <button className="w-10 h-10 rounded-full bg-[#f0f3f8] flex items-center justify-center active:scale-90 transition-all shadow-sm">
          <img src="/Icons/menu.PNG" alt="M" className="w-5 h-5 object-contain" />
        </button>
      </div>

      {/* Основной контейнер */}
      <div className="flex-1 flex flex-col justify-center px-8">
        
        {/* Блок текста: теперь выровнен по левому краю */}
        <div className="text-left mb-8">
          <h1 className="text-[28px] font-bold tracking-tight text-black leading-tight">
            {greeting || 'Привет, юзер!'}
          </h1>
          <p className="text-[28px] font-bold text-black/65 leading-tight">
            Спрашивай о чем угодно
          </p>
        </div>

        {/* Инпут (без контура) */}
        <div className="w-full">
          <div className="flex items-center h-[56px] bg-[#f0f3f8] rounded-2xl pl-5 pr-2 transition-all">
            <div className="relative flex-1 h-full flex items-center">
              {value === "" && (
                <span className="absolute left-0 text-black/30 font-medium text-[17px] pointer-events-none">
                  Найти что-нибудь...
                </span>
              )}
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                // border-none и outline-none убирают все рамки
                className="bg-transparent border-none outline-none text-black text-[17px] w-full font-medium"
              />
            </div>

            {/* Кнопка отправки */}
            <button className="h-[42px] w-[42px] bg-black rounded-xl flex items-center justify-center active:scale-95 transition-all">
              <img 
                src="/Icons/SendToAi.png" 
                alt="↑" 
                className="w-4 h-4 invert" 
              />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
