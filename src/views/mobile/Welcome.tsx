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
    <div className="fixed inset-0 flex flex-col bg-white overflow-hidden">
      
      {/* Меню (вверху слева) */}
      <div className="absolute top-6 left-6 z-50">
        <button className="w-10 h-10 rounded-full bg-[#f0f3f8] border border-[#e5e9f0] flex items-center justify-center active:scale-90 transition-all shadow-sm">
          <img src="/Icons/menu.PNG" alt="M" className="w-5 h-5 object-contain" />
        </button>
      </div>

      {/* Основной экран */}
      <div className="flex-1 flex flex-col justify-center items-center px-8">
        
        {/* Центрированный текст */}
        <div className="text-center mb-10">
          <h1 className="text-[34px] font-bold tracking-tight text-black leading-tight">
            {greeting || 'Привет, юзер!'}
          </h1>
          <p className="text-[17px] font-medium text-black/60 mt-1">
            Спрашивай о чем угодно
          </p>
        </div>

        {/* Инпут */}
        <div className="w-full max-w-[400px]">
          <div className="flex items-center h-[52px] bg-[#f0f3f8] rounded-full pl-6 pr-2 border border-[#e5e9f0]">
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

            {/* Кнопка с иконкой */}
            <button className="h-[38px] w-[38px] bg-black rounded-full flex items-center justify-center active:scale-95 transition-all">
              <img 
                src="/Icons/SendToAi.png" 
                alt="↑" 
                className="w-3.5 h-3.5 invert" 
              />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
